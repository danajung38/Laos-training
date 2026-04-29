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
 *    Notion 페이지 본문(블록)을 읽어 \n 으로 이어 붙임.
 *    paragraph / heading_* / bulleted_list_item / numbered_list_item / quote / callout 지원.
 * ================================================================
 */

const fs   = require('fs');
const path = require('path');
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

/* ---------- Notion 색상 → CSS ----------
 * Notion 의 표준 팔레트와 가깝게 매핑.
 * - 글자색: 'gray', 'red', ... → color
 * - 배경색: '*_background'    → background-color (글자색은 약간 진하게)
 * --------------------------------------- */
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

/* ---------- 유틸: rich_text 배열 → HTML (본문 블록용)
 *  Notion 서식을 보존: bold, italic, underline, strikethrough, code, color, link
 * ------------------------------------------------------------------- */
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

/* ---------- 페이지 본문(blocks) → 텍스트 ---------- */
async function fetchPageText(pageId) {
  let lines = [];
  let cursor;
  do {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    for (const block of res.results) {
      lines.push(blockToText(block));
    }
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return lines.join('\n').trimEnd();
}

function blockToText(block) {
  const t = block.type;
  const data = block[t];
  if (!data) return '';
  switch (t) {
    case 'paragraph':           return richToHtml(data.rich_text);
    // 헤딩은 본문 안에서 더 굵게 보이도록 강조
    case 'heading_1':           return '<strong>' + richToHtml(data.rich_text) + '</strong>';
    case 'heading_2':           return '<strong>' + richToHtml(data.rich_text) + '</strong>';
    case 'heading_3':           return '<strong>' + richToHtml(data.rich_text) + '</strong>';
    case 'bulleted_list_item':  return '* ' + richToHtml(data.rich_text);
    case 'numbered_list_item':  return '- ' + richToHtml(data.rich_text);
    case 'quote':               return '> ' + richToHtml(data.rich_text);
    case 'callout':             return richToHtml(data.rich_text);
    case 'to_do':               return (data.checked ? '[x] ' : '[ ] ') + richToHtml(data.rich_text);
    case 'divider':             return '---';
    case 'code':                return '<code>' + richToHtml(data.rich_text) + '</code>';
    default:                    return '';
  }
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
      // Order(높은 값) → Date(최신) 순
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

    const icon   = (status === 'Read') ? 'icon_announced.png' : 'icon_announce.png';
    const content = await fetchPageText(page.id);

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
