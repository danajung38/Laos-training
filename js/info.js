/* ================================================================
   info.js — Info 페이지 모달 & 줌 기능
   ================================================================ */

/* ── 카드 데이터 ── */
const CARD_DATA = {
  health: {
    title: '🏥 Health & Safety',
    type: 'text',
    html: `
      <div class="info-text-content">
        <span class="info-tag">Health & Safety</span>
        <h3>Emergency Numbers</h3>
        <ul>
          <li><strong>Emergency (Police / Fire / Ambulance):</strong> 119</li>
          <li><strong>Police only:</strong> 112</li>
          <li><strong>Foreigner Help Desk (English):</strong> 1345</li>
          <li><strong>KMU Health Center:</strong> 053-580-5271</li>
        </ul>

        <h3>KMU Health Center</h3>
        <p>Located in the Student Union Building (1F). Open weekdays 09:00–17:30. Provides basic medical care, prescriptions, and referrals. Bring your alien registration card or passport.</p>

        <h3>Nearby Hospitals</h3>
        <ul>
          <li><strong>Keimyung University Dongsan Hospital</strong> — 10 min by taxi from campus. 24-hour emergency room available.</li>
          <li><strong>Daegu Fatima Hospital</strong> — International patient services available.</li>
          <li><strong>Chilgok Kyungpook National University Hospital</strong> — Full-service tertiary care.</li>
        </ul>

        <h3>Pharmacy (약국)</h3>
        <p>Look for the green cross symbol (약국). Pharmacies are widely available near campus. Basic medications (cold, fever, pain relief) can be purchased without a prescription.</p>

        <h3>Health Insurance</h3>
        <p>All program participants are covered by KMU's group health insurance during the program period. Please keep your insurance card with you at all times. For claims and inquiries, contact the program coordinator.</p>

        <h3>Food Safety Tips</h3>
        <ul>
          <li>Tap water in Korea is safe to drink, but bottled water is widely available.</li>
          <li>Korean food can be spicy — inform restaurant staff of dietary restrictions.</li>
          <li>Convenience stores (GS25, CU, 7-Eleven) offer 24/7 food options.</li>
        </ul>
      </div>
    `
  },

  life: {
    title: '🎓 Life in KMU',
    type: 'text',
    html: `
      <div class="info-text-content">
        <span class="info-tag">Life in KMU</span>
        <h3>About Keimyung University</h3>
        <p>Keimyung University (KMU) is a private university located in Daegu, South Korea. Founded in 1954, it is one of the major universities in the Daegu-Gyeongbuk region with over 20,000 students.</p>

        <h3>Campus Facilities Overview</h3>
        <ul>
          <li><strong>Library (동산도서관):</strong> Open 24/5. Computers, study rooms, printing services available.</li>
          <li><strong>Student Union Building:</strong> Cafeteria, convenience store, ATM, health center.</li>
          <li><strong>Sports Complex (체육관):</strong> Gym, swimming pool, tennis courts available for all students.</li>
          <li><strong>International Student Office:</strong> Administrative support for visa, housing, and academic matters.</li>
        </ul>

        <h3>Daily Life Tips</h3>
        <ul>
          <li>Use the KMU app for campus maps, shuttle schedules, and announcements.</li>
          <li>Campus shuttle buses connect dormitories to main buildings.</li>
          <li>Printing is available at the library for free (limited pages per day).</li>
          <li>Student ID card doubles as a library card and cafeteria payment card.</li>
        </ul>

        <h3>Food on Campus</h3>
        <p>Multiple cafeterias (학생식당) offer affordable Korean meals from ₩3,000–₩5,000. A faculty restaurant and a café are also available in the main building.</p>

        <h3>Getting Around</h3>
        <ul>
          <li><strong>Bus:</strong> Daegu city buses stop at campus gates. Use T-money card for payment.</li>
          <li><strong>Taxi:</strong> Kakao Taxi app works in English. Approximately ₩5,000–₩10,000 to city center.</li>
          <li><strong>Subway:</strong> Nearest station is Keimyung University Station (Line 2), 10-min walk.</li>
        </ul>
      </div>
    `
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
          <li><strong>Program Coordinator:</strong> 010-XXXX-XXXX (to be confirmed)</li>
          <li><strong>KMU International Office:</strong> 053-580-5671</li>
        </ul>

        <h3>In Case of Fire</h3>
        <ul>
          <li>Activate the nearest fire alarm.</li>
          <li>Call 119 immediately.</li>
          <li>Use the nearest staircase — do NOT use elevators.</li>
          <li>Gather at the designated assembly point outside the building.</li>
        </ul>

        <h3>Natural Disasters</h3>
        <p>South Korea occasionally experiences typhoons (July–September) and mild earthquakes. In a strong earthquake: take cover under a desk, protect your head, and move outside once shaking stops. Emergency alerts are sent via the Korean Emergency Alert System (loud alert tone on mobile phones).</p>

        <h3>Lost Passport / Documents</h3>
        <ul>
          <li>Contact your home country's embassy in Seoul immediately.</li>
          <li>File a police report (경찰서) for lost/stolen items.</li>
          <li>Contact the program coordinator for assistance with re-issuance.</li>
        </ul>

        <h3>Embassy Contacts</h3>
        <ul>
          <li><strong>Lao Embassy in Korea:</strong> +82-2-796-1713 (Seoul)</li>
          <li>Website: <em>laosembassykorea.org</em></li>
        </ul>
      </div>
    `
  },

  korea: {
    title: '🇰🇷 Living in Korea',
    type: 'text',
    html: `
      <div class="info-text-content">
        <span class="info-tag">Living in Korea</span>

        <h3>Culture & Etiquette</h3>
        <ul>
          <li>Bow slightly when greeting — a 15–30° bow is standard.</li>
          <li>Use both hands when giving or receiving items (especially business cards).</li>
          <li>Remove shoes when entering Korean homes.</li>
          <li>It is polite to wait for elders to begin eating before you start.</li>
          <li>Public intoxication is common but disruptive behavior is frowned upon.</li>
        </ul>

        <h3>Money & Banking</h3>
        <ul>
          <li>Currency: Korean Won (₩). ₩1,000 ≈ 0.75 USD (approximate).</li>
          <li>ATMs (especially in convenience stores) accept foreign cards.</li>
          <li>Korea is largely cashless — credit/debit cards accepted almost everywhere.</li>
          <li>Kakao Pay and Naver Pay are popular mobile payment options.</li>
        </ul>

        <h3>Transportation</h3>
        <ul>
          <li><strong>T-money card:</strong> Reloadable card for buses and subways. Buy at any convenience store.</li>
          <li><strong>KTX (high-speed train):</strong> Connects major cities. Daegu to Seoul in ~1.5 hours.</li>
          <li><strong>Kakao Taxi / UT:</strong> Ride-hailing apps that support English.</li>
        </ul>

        <h3>Shopping & Daily Needs</h3>
        <ul>
          <li><strong>Convenience stores (CU, GS25, 7-Eleven):</strong> Open 24/7, sell food, toiletries, mobile top-ups.</li>
          <li><strong>E-mart / Homeplus:</strong> Large supermarkets available in Daegu city.</li>
          <li><strong>Dongseongno:</strong> Daegu's main shopping and entertainment district (20 min from campus).</li>
        </ul>

        <h3>Weather in Daegu</h3>
        <ul>
          <li><strong>Spring (Mar–May):</strong> Mild, 10–20°C. Cherry blossoms in April.</li>
          <li><strong>Summer (Jun–Aug):</strong> Hot & humid, 25–35°C. Occasional heavy rain.</li>
          <li><strong>Autumn (Sep–Nov):</strong> Comfortable, 10–22°C. Foliage season.</li>
          <li><strong>Winter (Dec–Feb):</strong> Cold, -5–5°C. Dress in warm layers.</li>
        </ul>
      </div>
    `
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
          <div class="wifi-row"><span>Password</span><span>kmu@2026</span></div>
          <div class="wifi-row"><span>Coverage</span><span>All academic buildings</span></div>
        </div>

        <div class="wifi-card">
          <h4>Dormitory Wifi</h4>
          <div class="wifi-row"><span>Network Name (SSID)</span><span>KMU_DORM</span></div>
          <div class="wifi-row"><span>Password</span><span>dorm@2026</span></div>
          <div class="wifi-row"><span>Coverage</span><span>Dormitory buildings only</span></div>
        </div>

        <div class="wifi-card">
          <h4>Public Wifi (eduroam)</h4>
          <div class="wifi-row"><span>Network Name (SSID)</span><span>eduroam</span></div>
          <div class="wifi-row"><span>Login</span><span>Your KMU student email</span></div>
          <div class="wifi-row"><span>Available at</span><span>Universities worldwide</span></div>
        </div>

        <h3>Mobile Data</h3>
        <p>Korean telecom providers (SKT, KT, LG U+) offer short-term SIM cards and data plans at Incheon Airport and convenience stores. A 30-day unlimited data plan costs approximately ₩30,000–₩50,000.</p>

        <h3>VPN Note</h3>
        <p>Some services may be geo-restricted in Korea. Consider installing a VPN before arrival if needed. The KMU network does not block major international services.</p>

        <h3>Helpful Apps</h3>
        <ul>
          <li><strong>Naver Maps</strong> — Best navigation app for Korea (Korean & English).</li>
          <li><strong>Kakao Talk</strong> — Primary messaging app in Korea.</li>
          <li><strong>Papago</strong> — Real-time Korean translation.</li>
          <li><strong>Coupang</strong> — Fast online delivery (food, daily items).</li>
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
