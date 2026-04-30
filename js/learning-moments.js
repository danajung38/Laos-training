/* ================================================================
   learning-moments.js
   - 갤러리 데이터를 배열로 관리 (사진 추가 시 events 배열만 수정)
   - 카드 그리드 렌더링 + 페이지네이션
   - 클릭 시 라이트박스 모달로 슬라이드 보기
   ================================================================ */

/* -----------------------------------------------------------------
   1) 이벤트(갤러리) 데이터
      · 사진을 추가하려면 해당 event 의 photos 배열에 파일명만 추가
      · 새 이벤트를 추가하려면 events 배열에 오브젝트를 추가
      · cover 가 비어있으면 photos[0] 이 자동으로 사용됨
   ----------------------------------------------------------------- */
const events = [
  {
    id: '',
    title: 'Guest Lecture: Business model and strategy development',
    date: 'April 30, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260430_1.jpeg',
      'photo/20260430_2.jpeg',
      'photo/20260430_3.jpeg',
      'photo/20260430_4.jpeg',
      'photo/20260430_5.jpeg',
    ]
  },
  {
    id: '',
    title: 'First Day of KMU! (2)',
    date: 'April 29, 2026',
    location: 'KMU',
    cover: 'photo/20260429_15.jpeg',
    photos: [
      'photo/20260429_9.JPEG',
      'photo/20260429_10.JPEG',
      'photo/20260429_11.JPEG',
      'photo/20260429_12.jpeg',
      'photo/20260429_16.jpeg',
      'photo/20260429_17.jpeg',
      'photo/20260429_13.jpeg',
      'photo/20260429_14.jpeg',
      'photo/20260429_15.jpeg',

    ]
  },
  {
    id: '',
    title: 'First Day of KMU! (1)',
    date: 'April 29, 2026',
    location: 'KMU, classroom 215',
    cover: 'photo/20260429_8.jpg',
    photos: [
      'photo/20260429_1.JPEG',
      'photo/20260429_2.jpg',
      'photo/20260429_3.jpeg',
      'photo/20260429_4.jpg',
      'photo/20260429_5.jpeg',
      'photo/20260429_6.jpeg',
      'photo/20260429_7.jpg',
      'photo/20260429_8.jpg',
    ]
  },

  {
    id: '',
    title: 'Arrived in Korea🛬',
    date: 'April 28, 2026',
    location: 'Seoul',
    cover: 'photo/20260428_arrived2.jpg',
    photos: [
      'photo/20260428_arrived4.jpg',
      'photo/20260428_arrived3.jpg',
      'photo/20260428_arrived2.jpg',
      'photo/20260428_arrived1.jpg',
    ]
  },

  {
    id: '',
    title: 'PEV Lecture: Chapter 3',
    date: 'April 27, 2026',
    location: 'Online(Zoom)',
    cover: '',
    photos: [
      'photo/20260427_PEV1.png',
      'photo/20260427_PEV2.png',
      'photo/20260427_PEV3.png',
      'photo/20260427_PEV4.png'
    ]
  },
  {
    id: 'classroom-setup',
    title: 'Classroom Setup for Upcoming Training!',
    date: 'April 23, 2026',
    location: 'Classroom 215',
    cover: '',
    photos: [
      'photo/classroom1.jpg',
      'photo/classroom2.jpg',
      'photo/classroom3.jpg'
    ]
  },
  {
    id: 'guest-lecture',
    title: 'Guest Lecture_The Founder&apos;s Roadmap: Leveraging Startup Ecosystems from Campus to Global Stages',
    date: 'April 22, 2026',
    location: 'Online(Zoom)',
    cover: '',
    photos: [
      'photo/20260422_GuestLecture1.png',
      'photo/20260422_GuestLecture2.png',
      'photo/20260422_GuestLecture3.png',
      'photo/20260422_GuestLecture4.png'
    ]
  },
  {
    id: 'pev-visit',
    title: 'PEV Lecture: Chapter 2 ',
    date: 'April 21, 2026',
    location: 'Online(Zoom)',
    cover: '',
    photos: [
      'photo/20260421_PEV1.png',
      'photo/20260421_PEV2.png'
    ]
  },
  {
    id: 'pev-visit',
    title: 'PEV Lecture: Chapter 1 ',
    date: 'April 17, 2026',
    location: 'Online(Zoom)',
    cover: '',
    photos: [
      'photo/20260417_PEV.png',
      'photo/20260417_PEV2.png',
      'photo/20260417_PEV3.png',
      'photo/20260417_PEV4.png'
    ]
  },
  {
    id: 'guest-lecture',
    title: 'Guest Lecture_Korea&apos;s Startup World: Culture, Companies, and What You Can Learn',
    date: 'April 10, 2026',
    location: 'Online(Zoom)',
    cover: '',
    photos: [
      'photo/20260410_GuestLecture1.png',
      'photo/20260410_GuestLecture2.png',
      'photo/20260410_GuestLecture3.png'
    ]
  },
  {
    id: 'orientation',
    title: 'Orientation',
    date: 'April 9, 2026',
    location: 'Online(Zoom)',
    cover: '',
    photos: [
      'photo/20260409_오리엔테이션.png',
      'photo/20260409_오리엔테이션2.png',
      'photo/20260409_오리엔테이션3.png',
      'photo/20260409_오리엔테이션4.png',
      'photo/20260409_오리엔테이션5.png',
      'photo/20260409_오리엔테이션6.png'
    ]
  }
];

/* -----------------------------------------------------------------
   2) 설정
   ----------------------------------------------------------------- */
const ITEMS_PER_PAGE = 6;
const LOCATION_ICON = 'images/icon_location.png';

/* -----------------------------------------------------------------
   3) DOM 참조
   ----------------------------------------------------------------- */
const gridEl = document.getElementById('lmGrid');
const paginationEl = document.getElementById('lmPagination');

const modalBackdrop = document.getElementById('lmModalBackdrop');
const modalImg = document.getElementById('lmModalImg');
const modalTitle = document.getElementById('lmModalTitle');
const modalMeta = document.getElementById('lmModalMeta');
const modalCounter = document.getElementById('lmModalCounter');
const modalCloseBtn = document.getElementById('lmModalClose');
const modalPrevBtn = document.getElementById('lmModalPrev');
const modalNextBtn = document.getElementById('lmModalNext');

/* -----------------------------------------------------------------
   4) 상태
   ----------------------------------------------------------------- */
let currentPage = 1;
let activeEvent = null;   // 라이트박스에 표시 중인 event
let activePhotoIdx = 0;      // 해당 event 내 photo index

/* -----------------------------------------------------------------
   5) 유틸
   ----------------------------------------------------------------- */
function getCover(event) {
  return event.cover && event.cover.length ? event.cover : event.photos[0];
}

function totalPages() {
  return Math.max(1, Math.ceil(events.length / ITEMS_PER_PAGE));
}

/* -----------------------------------------------------------------
   6) 그리드 렌더링
   ----------------------------------------------------------------- */
function renderGrid() {
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = events.slice(start, start + ITEMS_PER_PAGE);

  gridEl.innerHTML = '';

  pageItems.forEach((ev, i) => {
    const eventIndex = start + i; // 전체 events 배열에서의 인덱스
    const li = document.createElement('li');
    li.className = 'lm-card';
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');
    li.setAttribute('aria-label', `${ev.title} — ${ev.photos.length} photos`);

    li.innerHTML = `
      <div class="lm-card-img-wrap">
        <img class="lm-card-img" src="${getCover(ev)}" alt="${ev.title}" loading="lazy">
      </div>
      <p class="lm-card-title">${ev.title}</p>
      <p class="lm-card-meta">
        <span>${ev.date}</span>
        <span class="lm-card-meta-sep">|</span>
        <span class="lm-card-location">
          <img src="${LOCATION_ICON}" alt="">
          <span>${ev.location}</span>
        </span>
      </p>
    `;

    const open = () => openModal(eventIndex, 0);
    li.addEventListener('click', open);
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });

    gridEl.appendChild(li);
  });
}

/* -----------------------------------------------------------------
   7) 페이지네이션 렌더링
   ----------------------------------------------------------------- */
function renderPagination() {
  const pages = totalPages();
  paginationEl.innerHTML = '';

  if (pages <= 1) return;

  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement('button');
    btn.className = 'lm-page-btn' + (i === currentPage ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', () => {
      currentPage = i;
      renderGrid();
      renderPagination();
      // 스크롤 맨 위로
      const scrollContainer = document.querySelector('.lm-content');
      if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    });
    paginationEl.appendChild(btn);
  }
}

/* -----------------------------------------------------------------
   8) 라이트박스 모달
   ----------------------------------------------------------------- */
function openModal(eventIndex, photoIdx) {
  activeEvent = events[eventIndex];
  activePhotoIdx = photoIdx || 0;
  if (!activeEvent) return;

  updateModalView();
  modalBackdrop.classList.add('lm-modal-open');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('lm-modal-open');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  activeEvent = null;
  activePhotoIdx = 0;
  modalImg.src = '';
}

function showPrev() {
  if (!activeEvent) return;
  const n = activeEvent.photos.length;
  activePhotoIdx = (activePhotoIdx - 1 + n) % n;
  updateModalView();
}

function showNext() {
  if (!activeEvent) return;
  const n = activeEvent.photos.length;
  activePhotoIdx = (activePhotoIdx + 1) % n;
  updateModalView();
}

function updateModalView() {
  if (!activeEvent) return;
  const total = activeEvent.photos.length;
  modalImg.src = activeEvent.photos[activePhotoIdx];
  modalImg.alt = `${activeEvent.title} — ${activePhotoIdx + 1}/${total}`;
  modalTitle.textContent = activeEvent.title;
  modalMeta.textContent = `${activeEvent.date}  ·  ${activeEvent.location}`;
  modalCounter.textContent = `${activePhotoIdx + 1} / ${total}`;

  // 사진이 하나뿐이면 좌/우 버튼 숨김
  const hideNav = total <= 1;
  modalPrevBtn.style.display = hideNav ? 'none' : '';
  modalNextBtn.style.display = hideNav ? 'none' : '';
}

/* -----------------------------------------------------------------
   9) 이벤트 바인딩
   ----------------------------------------------------------------- */
modalCloseBtn.addEventListener('click', closeModal);
modalPrevBtn.addEventListener('click', showPrev);
modalNextBtn.addEventListener('click', showNext);

// 배경 클릭 시 닫기 (이미지/버튼 클릭은 제외)
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});

// 키보드 지원 (←, →, Esc)
document.addEventListener('keydown', (e) => {
  if (!modalBackdrop.classList.contains('lm-modal-open')) return;
  if (e.key === 'Escape') closeModal();
  else if (e.key === 'ArrowLeft') showPrev();
  else if (e.key === 'ArrowRight') showNext();
});

/* -----------------------------------------------------------------
   10) 초기 렌더
   ----------------------------------------------------------------- */
renderGrid();
renderPagination();
