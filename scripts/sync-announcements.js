/**
 * ================================================================
 *  scripts/sync-announcements.js
 * ----------------------------------------------------------------
 *  Notion 데이터베이스의 공지사항을 가져와 data/announcements.json 으로 저장.
 *  GitHub Actions(.github/workflows/sync-notion.yml)에서 주기적으로 실행됨.
 *
 *  필요 환경 변수:
 *    NOTION_TOKEN          : Notion Integration Internal Token
 *    NOTION_DATABASE_ID    : 공지사항 DB ID (URL에서 추출)
 *
 *  Notion DB 속성 매핑:
 *    Title       (Title)        -> title
 *    Date        (Date)         -> date  (long format, e.g. "April 29, 2026")
 *    Author      (Rich text)    -> author  (없으면 'Program Coordinator')
 *    Emoji       (Rich text)    -> emoji   (없으면 '📢')
 *    Status      (Select)       -> 'New'  → icon_announce.png
 *                                  'Read' → icon_announced.png
 *    Published   (Checkbox)     -> 체크된 것만 노출
 *    Order       (Number)       -> 정렬 우선순위 (큰 값이 위)
 *
 *  본문(content):
 *    Notion 페이지 본문(블록)을 읽어 HTML 문자열로 변환.
 *    paragraph / heading_* / bulleted_list_item / numbered_list_item /
 *    quote / callout / to_do / divider / code / table / image 지원.
 *    Notion 내부 이미지는 images/announcements/ 폴더에 다운로드.
 * ================================================================
 */

const fs   = require('fs');
const path = require('path');
const http  = require('http');
const https = require('https');
const { Client } = require('@notionhq/client');

const NOTION_TOKEN       = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error('❌ NOTION_TOKEN, NOTION_DATABASE_ID 환경변수가 필요합니다.');
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });

/* ---------- 유틸: HTML 이스케이프 ---------- */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ---------- 유틸: rich_text 배열 → 평문 (속성 값 읽을 때) ---------- */
function richToPlain(arr) {
  if (!Array.isArray(arr)) return '';
  return arr.map(t => t.plain_text || '').join('');
}

/* ---------- Notion 색상 → CSS ---------- */
const NOTION_TEXT_COLORS = {
  gray:   '#9B9A97',
  brown:  '#64473A',
  orange: '#D9730D',
  yellow: '#DFAB01',
  green:  '#0F7B6C',
  blue:   '#0B6E99',
  purple: '#6940A5',
  pink:   '#AD1A72',
  red:    '#E03E3E',
};
const NOTION_BG_COLORS = {
  gray_background:   '#EBECED',
  brown_background:  '#E9E5E3',
  orange_background: '#FAEBDD',
  yellow_background: '#FBF3DB',
  green_background:  '#DDEDEA',
  blue_background:   '#DDEBF1',
  purple_background: '#EAE4F2',
  pink_background:   '#F4DFEB',
  red_background:    '#FBE4E4',
};

function colorStyle(color) {
  if (!color || color === 'default') return '';
  if (NOTION_TEXT_COLORS[color]) return `color:${NOTION_TEXT_COLORS[color]}`;
  if (NOTION_BG_COLORS[color])   return `background-color:${NOTION_BG_COLORS[color]};padding:0 4px;border-radius:3px`;
  return '';
}

/* ---------- 유틸: rich_text 배열 → HTML ---------- */
function richToHtml(arr) {
  if (!Array.isArray(arr)) return '';
  return arr.map(t => {
    let html = escapeHtml(t.plain_text || '');
    const ann = t.annotations || {};
    if (ann.code)          html = `<code>${html}</code>`;
    if (ann.bold)          html = `<strong>${html}</strong>`;
    if (ann.italic)        html = `<em>${html}</em>`;
    if (ann.underline)     html = `<u>${html}</u>`;
    if (ann.strikethrough) html = `<s>${html}</s>`;
    const cs = colorStyle(ann.color);
    if (cs)                html = `<span style="${cs}">${html}</span>`;
    if (t.href) {
      const safeHref = escapeHtml(t.href);
      html = `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${html}</a>`;
    }
    return html;
  }).join('');
}

/* ---------- 유틸: Notion 속성 → 값 ---------- */
function readProp(props, name, type) {
  const p = props[name];
  if (!p) return null;
  switch (type || p.type) {
    case 'title':       return richToPlain(p.title);
    case 'rich_text':   return richToPlain(p.rich_text);
    case 'date':        return p.date ? p.date.start : null;
    case 'select':      return p.select ? p.select.name : null;
    case 'checkbox':    return !!p.checkbox;
    case 'number':      return (typeof p.number === 'number') ? p.number : null;
    default:            return null;
  }
}

/* ---------- 날짜 포맷 (YYYY-MM-DD → "April 29, 2026") ---------- */
const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/* ---------- 이미지 다운로드 ----------
 * Notion 내부 이미지 URL은 약 1시간 후 만료되므로 sync 시점에 파일로 저장.
 * 외부(external) 이미지는 URL 을 직접 사용.
 * --------------------------------------- */
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;

    function doGet(target) {
      const p = target.startsWith('https') ? https : http;
      p.get(target, (res) => {
        // 리다이렉트 처리
        if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
          res.resume();
          doGet(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
        file.on('error', (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
      }).on('error', reject);
    }

    doGet(url);
  });
}

async function resolveImageSrc(block) {
  const imgData = block.image;
  let url = '';

  if (imgData.type === 'external') {
    url = imgData.external && imgData.external.url;
  } else if (imgData.type === 'file') {
    url = imgData.file && imgData.file.url;
  }

  if (!url) return null;

  // 외부 URL — 안정적이므로 그대로 사용
  if (imgData.type === 'external') return url;

  // Notion 내부 파일 — 다운로드하여 저장
  try {
    const imgDir  = path.join(__dirname, '..', 'images', 'announcements');
    fs.mkdirSync(imgDir, { recursive: true });

    // URL 경로에서 확장자 추출 (쿼리스트링 제거)
    let ext = path.extname(new URL(url).pathname);
    if (!['.jpg','.jpeg','.png','.gif','.webp','.svg'].includes(ext.toLowerCase())) {
      ext = '.jpg';
    }

    const filename = `ann_${block.id}${ext}`;
    const destPath = path.join(imgDir, filename);

    await downloadFile(url, destPath);
    console.log(`   📷  Saved image: ${filename}`);
    return `images/announcements/${filename}`;
  } catch (err) {
    console.warn(`   ⚠️  Image download failed (block ${block.id}): ${err.message}`);
    // 만료 전이라면 URL 직접 사용 (폴백)
    return url;
  }
}

/* ---------- 표(table) 블록 → HTML ---------- */
async function tableToHtml(tableBlock) {
  const { table_width, has_column_header, has_row_header } = tableBlock.table;

  // table_row 자식 블록 가져오기
  const rows = [];
  let cursor;
  do {
    const res = await notion.blocks.children.list({
      block_id: tableBlock.id,
      start_cursor: cursor,
      page_size: 100,
    });
    for (const row of res.results) {
      if (row.type === 'table_row') rows.push(row);
    }
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  if (!rows.length) return '';

  let html = '<table class="ann-table">\n';

  rows.forEach((row, rowIdx) => {
    const cells = row.table_row.cells || [];
    const isHeaderRow = has_column_header && rowIdx === 0;
    html += '  <tr>\n';
    cells.forEach((cell, colIdx) => {
      const isHeaderCol = has_row_header && colIdx === 0;
      const tag  = (isHeaderRow || isHeaderCol) ? 'th' : 'td';
      const text = richToHtml(cell);
      html += `    <${tag}>${text}</${tag}>\n`;
    });
    html += '  </tr>\n';
  });

  html += '</table>';
  return html;
}

/* ---------- 블록 배열 → HTML (비동기, 리스트 그루핑 포함) ---------- */
async function blocksToHtml(blocks) {
  const parts = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];
    const t     = block.type;
    const data  = block[t];

    /* ── 연속된 bulleted_list_item → <ul> ── */
    if (t === 'bulleted_list_item') {
      const items = [];
      while (i < blocks.length && blocks[i].type === 'bulleted_list_item') {
        items.push(`<li>${richToHtml(blocks[i].bulleted_list_item.rich_text)}</li>`);
        i++;
      }
      parts.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    /* ── 연속된 numbered_list_item → <ol> ── */
    if (t === 'numbered_list_item') {
      const items = [];
      while (i < blocks.length && blocks[i].type === 'numbered_list_item') {
        items.push(`<li>${richToHtml(blocks[i].numbered_list_item.rich_text)}</li>`);
        i++;
      }
      parts.push(`<ol>${items.join('')}</ol>`);
      i++;
      continue;
    }

    /* ── 연속된 to_do → <ul class="ann-todo"> ── */
    if (t === 'to_do') {
      const items = [];
      while (i < blocks.length && blocks[i].type === 'to_do') {
        const td   = blocks[i].to_do;
        const chk  = td.checked ? '☑' : '☐';
        const text = richToHtml(td.rich_text);
        items.push(`<li class="${td.checked ? 'ann-todo-done' : ''}">${chk} ${text}</li>`);
        i++;
      }
      parts.push(`<ul class="ann-todo">${items.join('')}</ul>`);
      continue;
    }

    /* ── 그 외 블록 ── */
    let html = '';

    if (!data) { i++; continue; }

    switch (t) {
      case 'paragraph': {
        const inner = richToHtml(data.rich_text);
        html = inner ? `<p>${inner}</p>` : '<p><br></p>';
        break;
      }
      case 'heading_1':
        html = `<h2 class="ann-h">${richToHtml(data.rich_text)}</h2>`;
        break;
      case 'heading_2':
        html = `<h3 class="ann-h">${richToHtml(data.rich_text)}</h3>`;
        break;
      case 'heading_3':
        html = `<h4 class="ann-h">${richToHtml(data.rich_text)}</h4>`;
        break;
      case 'quote':
        html = `<blockquote class="ann-quote">${richToHtml(data.rich_text)}</blockquote>`;
        break;
      case 'callout': {
        const icon  = data.icon ? (data.icon.emoji || '') : '';
        const inner = richToHtml(data.rich_text);
        html = `<div class="ann-callout">${icon ? `<span class="ann-callout-icon">${icon}</span>` : ''}${inner}</div>`;
        break;
      }
      case 'divider':
        html = '<hr class="ann-hr">';
        break;
      case 'code': {
        const lang = data.language || '';
        const code = escapeHtml(richToPlain(data.rich_text));
        html = `<pre class="ann-code" data-lang="${escapeHtml(lang)}"><code>${code}</code></pre>`;
        break;
      }
      case 'table':
        html = await tableToHtml(block);
        break;
      case 'image': {
        const src     = await resolveImageSrc(block);
        const caption = richToPlain(data.caption || []);
        if (src) {
          const altText = escapeHtml(caption || 'image');
          html = `<figure class="ann-figure">` +
                 `<img src="${escapeHtml(src)}" alt="${altText}" loading="lazy">` +
                 (caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : '') +
                 `</figure>`;
        }
        break;
      }
      default:
        break;
    }

    if (html) parts.push(html);
    i++;
  }

  return parts.join('\n');
}

/* ---------- 페이지 본문(blocks) → HTML ---------- */
async function fetchPageHtml(pageId) {
  const blocks = [];
  let cursor;
  do {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  return blocksToHtml(blocks);
}

/* ---------- DB 쿼리 ---------- */
async function queryDatabase() {
  const items = [];
  let cursor;
  do {
    const res = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: { equals: true },
      },
      sorts: [
        { property: 'Order', direction: 'descending' },
        { property: 'Date',  direction: 'descending' },
      ],
      start_cursor: cursor,
      page_size: 100,
    });
    items.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return items;
}

/* ---------- 메인 ---------- */
(async function main() {
  console.log('📥 Fetching announcements from Notion...');
  const pages = await queryDatabase();
  console.log(`   → ${pages.length} published pages found.`);

  const items = [];
  for (let i = 0; i < pages.length; i++) {
    const page  = pages[i];
    const props = page.properties || {};

    const title  = readProp(props, 'Title')  || '(제목 없음)';
    const dateIso= readProp(props, 'Date');
    const author = readProp(props, 'Author') || 'Program Coordinator';
    const emoji  = readProp(props, 'Emoji')  || '📢';
    const status = readProp(props, 'Status') || 'New';
    const order  = readProp(props, 'Order');

    const icon    = (status === 'Read') ? 'icon_announced.png' : 'icon_announce.png';
    const content = await fetchPageHtml(page.id);

    items.push({
      id: (typeof order === 'number') ? order : (pages.length - i),
      icon,
      emoji,
      title,
      date: formatDate(dateIso),
      author,
      content,
    });
    console.log(`   • [${status}] ${title}`);
  }

  const outDir  = path.join(__dirname, '..', 'data');
  const outPath = path.join(outDir, 'announcements.json');
  fs.mkdirSync(outDir, { recursive: true });

  const payload = {
    _comment: '이 파일은 GitHub Actions가 Notion에서 자동 동기화합니다. 직접 수정하지 마세요.',
    generatedAt: new Date().toISOString(),
    items,
  };
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`✅ Wrote ${outPath} (${items.length} items)`);
})().catch(err => {
  console.error('❌ Sync failed:', err);
  process.exit(1);
});
