/* ================================================================
   info.js — Info 페이지 모달 & 줌 기능
   ================================================================ */

/* ── 카드 데이터 ── */
const CARD_DATA = {
  health: {
    title: '🏥 Health & Safety',
    type: 'img-multi',
    imgs: [
      'info_contents/images/health_90.png',
      'info_contents/images/health_91.png'
    ]
  },

  life: {
    title: '🎓 Life in KMU',
    type: 'img-multi',
    imgs: [
      'info_contents/images/lifekmu_113.png',
      'info_contents/images/lifekmu_116.png',
      'info_contents/images/lifekmu_117.png',
      'info_contents/images/lifekmu_118.png',
      'info_contents/images/lifekmu_119.png'
    ]
  },

  emergency: {
    title: '🚨 Emergency Info',
    type: 'text',
    html: `
      <div class="info-text-content">
        <span class="info-tag">Emergency Info</span>

        <h3>Key Emergency Contacts</h3>
        <ul>
          <li><strong>119</strong> — Fire & Ambulance (24hr)</li>
          <li><strong>112</strong> — Police (24hr)</li>
          <li><strong>1345</strong> — Korea Immigration & Foreigner Information (multilingual)</li>
          <li><strong>1339</strong> — Medical Emergency Helpline</li>
        </ul>

        <h3>Embassy Contacts</h3>
        <ul>
          <li><strong>Lao Embassy in Korea:</strong> +82-2-796-1713 (Seoul)</li>
          <li>Address: 30-4, Daesagwan-ro 11-gil, Yongsan-gu, Seoul</li>
          <li>Email: laos@mofa.go.kr </li>
        </ul>
      </div>
    `
  },

  korea: {
    title: '🇰🇷 Living in Korea',
    type: 'img-multi',
    imgs: [
      'info_contents/images/livingKorea_82.png',
      'info_contents/images/livingKorea_83.png',
      'info_contents/images/livingKorea_84.png',
      'info_contents/images/livingKorea_85.png',
      'info_contents/images/livingKorea_86.png',
      'info_contents/images/livingKorea_87.png',
      'info_contents/images/livingKorea_88.png',
      'info_contents/images/livingKorea_92.png',
      'info_contents/images/livingKorea_93.png',
      'info_contents/images/livingKorea_94.png'
    ]
  },

  facilities: {
    title: '🏛 Campus Facilities',
    type: 'img-multi',
    imgs: [
      'info_contents/images/facilities_1_1.png',
      'info_contents/images/facilities_2_1.png',
      'info_contents/images/facilities_3_1.png',
      'info_contents/images/facilities_4_1.png',
      'info_contents/images/facilities_5_1.png'
    ]
  },

  map: {
    title: '🗺️ Campus Map',
    type: 'img-multi',
    imgs: [
      'info_contents/images/campus_map_1.png',
      'info_contents/images/campus_map_2.png'
    ],
    tabLabels: ['Map 1', 'Map 2']
  },

  wifi: {
    title: '📶 Wifi',
    type: 'text',
    html: `
      <div class="info-text-content">
        <span class="info-tag">Wifi & Internet</span>

        <h3>Campus Wifi Networks</h3>

        <div class="wifi-card">
          <h4>KMU Official Network</h4>
          <div class="wifi-row"><span>Network Name (SSID)</span><span>KMU_WIFI</span></div>
          <div class="wifi-row"><span>Password</span><span>Individual passwords will be provided via email</span></div>
          <div class="wifi-row"><span>Coverage</span><span>All academic buildings</span></div>
        </div>

        <h3>Mobile Data</h3>
        <p>Korean telecom providers (SKT, KT, LG U+) offer short-term SIM cards and data plans at Incheon Airport and convenience stores. A 30-day unlimited data plan costs approximately ₩30,000–₩50,000.</p>

     

        <h3>Helpful Apps</h3>
        <ul>
          <li><strong>Naver Maps</strong> — Best navigation app for Korea (Korean & English).</li>
        </ul>
      </div>
    `
  }
};

/* ── 줌 상태 ── */
let zoomLevel = 1.0;
const ZOOM_STEP = 0.25;
const MIN_ZOOM  = 0.5;
const MAX_ZOOM  = 3.0;
let currentPdfIdx = 0;
let currentCardKey = null;

/* ── DOM 참조 ── */
const backdrop    = document.getElementById('infoModalBackdrop');
const titleEl     = document.getElementById('infoModalTitle');
const contentEl   = document.getElementById('infoModalContent');
const zoomBox     = document.getElementById('infoZoomBox');
const zoomLabelEl = document.getElementById('zoomLabel');
const pdfTabs     = document.getElementById('infoPdfTabs');
const btnZoomIn   = document.getElementById('btnZoomIn');
const btnZoomOut  = document.getElementById('btnZoomOut');
const closeBtn    = document.getElementById('infoModalClose');

/* ── 줌 적용 ── */
function applyZoom() {
  const pct = Math.round(zoomLevel * 100);
  zoomLabelEl.textContent = pct + '%';
  zoomBox.style.zoom = zoomLevel;
}

function setZoom(level) {
  zoomLevel = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, level));
  applyZoom();
}

/* ── 콘텐츠 렌더 ── */
function renderContent(key) {
  const data = CARD_DATA[key];
  if (!data) return;

  currentCardKey = key;
  titleEl.textContent = data.title;
  zoomLevel = 1.0;
  applyZoom();

  if (data.type === 'text') {
    pdfTabs.classList.remove('visible');
    contentEl.innerHTML = data.html;

  } else if (data.type === 'img-multi') {
    // 탭 개수 동적 생성
    const labels = data.tabLabels || data.imgs.map((_, i) => `Part ${i + 1}`);
    pdfTabs.innerHTML = labels.map((label, i) =>
      `<button class="pdf-tab${i === 0 ? ' active' : ''}" data-idx="${i}">${label}</button>`
    ).join('');
    pdfTabs.classList.add('visible');
    currentPdfIdx = 0;
    contentEl.innerHTML = `<img class="info-img-view" src="${data.imgs[0]}" alt="page 1">`;
  }
}

/* ── 모달 열기 ── */
function openModal(key) {
  renderContent(key);
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── 모달 닫기 ── */
function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  contentEl.innerHTML = '';
  pdfTabs.classList.remove('visible');
}

/* ── 이벤트: 카드 클릭 ── */
document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.card;
    if (key) openModal(key);
  });
});

/* ── 이벤트: 줌 버튼 ── */
btnZoomIn.addEventListener('click',  () => setZoom(zoomLevel + ZOOM_STEP));
btnZoomOut.addEventListener('click', () => setZoom(zoomLevel - ZOOM_STEP));

/* ── 이벤트: 마우스 휠 줌 (Ctrl + scroll) ── */
document.getElementById('infoScrollArea').addEventListener('wheel', e => {
  if (e.ctrlKey) {
    e.preventDefault();
    setZoom(zoomLevel + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP));
  }
}, { passive: false });

/* ── 이벤트: 닫기 버튼 ── */
closeBtn.addEventListener('click', closeModal);

/* ── 이벤트: 배경 클릭으로 닫기 ── */
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

/* ── 이벤트: ESC 키 닫기 ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
});

/* ── 이벤트: 이미지 탭 전환 ── */
pdfTabs.addEventListener('click', e => {
  const btn = e.target.closest('.pdf-tab');
  if (!btn) return;

  const idx  = parseInt(btn.dataset.idx, 10);
  const data = CARD_DATA[currentCardKey];
  if (!data || !data.imgs) return;

  pdfTabs.querySelectorAll('.pdf-tab').forEach((b, i) => b.classList.toggle('active', i === idx));
  currentPdfIdx = idx;

  // 스크롤 맨 위로
  document.getElementById('infoScrollArea').scrollTop = 0;
  contentEl.innerHTML = `<img class="info-img-view" src="${data.imgs[idx]}" alt="page ${idx + 1}">`;
});
