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
    title: 'PEV Lecture & Project',
    date: 'July 15, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260715_1.jpeg',
      'photo/20260715_2.jpeg',
      'photo/20260715_3.jpeg'
    ]
  },
  {
    id: '',
    title: 'PEV Lecture & Project',
    date: 'July 14, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260714_4.jpeg',
    photos: [
      'photo/20260714_1.jpeg',
      'photo/20260714_2.jpeg',
      'photo/20260714_3.jpeg',
      'photo/20260714_4.jpeg'
    ]
  },
  {
    id: '',
    title: 'Field Trip: Navigating Korea’s Startup Ecosystem',
    date: 'July 13, 2026',
    location: 'Asan Nanum Foundation, TIPS, and MARU',
    cover: 'photo/20260713_4.jpeg',
    photos: [
      'photo/20260713_1.jpeg',
      'photo/20260713_2.jpeg',
      'photo/20260713_3.jpeg',
      'photo/20260713_4.jpeg',
      'photo/20260713_5.jpeg',
      'photo/20260713_6.jpeg',
      'photo/20260713_7.jpeg',
      'photo/20260713_8.jpeg',
      'photo/20260713_9.jpeg'
    ]
  },
   {
    id: '',
    title: 'PEV Lecture: Chapter 11',
    date: 'July 9, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260709_4.jpeg',
    photos: [
      'photo/20260709_1.jpeg',
      'photo/20260709_2.jpeg',
      'photo/20260709_3.jpeg',
      'photo/20260709_4.jpeg',
    ]
  },
    {
    id: '',
    title: 'PEV Lecture: Chapter 11',
    date: 'July 8, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260708_4.jpeg',
    photos: [
      'photo/20260708_1.jpeg',
      'photo/20260708_2.jpeg',
      'photo/20260708_3.jpeg',
      'photo/20260708_4.jpeg',
    ]
  },
  {
    id: '',
    title: 'Field Trip: Exploring Global Education Hub at HUFS',
    date: 'July 7, 2026',
    location: 'HUFS',
    cover: 'photo/20260707_1.jpeg',
    photos: [
      'photo/20260707_1.jpeg',
      'photo/20260707_2.jpeg',
      'photo/20260707_3.jpeg',
      'photo/20260707_4.jpeg',
      'photo/20260707_5.jpeg',
    ]
  },
  {
    id: '',
    title: 'Field Trip: Exploring Korea&apos;s Silicon Valley and Tech Ecosystem',
    date: 'July 3, 2026',
    location: 'Pangyo',
    cover: 'photo/20260703_10.jpeg',
    photos: [
      'photo/20260703_1.jpeg',
      'photo/20260703_2.jpeg',
      'photo/20260703_3.jpeg',
      'photo/20260703_4.jpeg',
      'photo/20260703_6.jpeg',
      'photo/20260703_7.jpeg',
      'photo/20260703_8.jpeg',
      'photo/20260703_9.jpeg',
      'photo/20260703_10.jpeg'
    ]
  },
  {
    id: '',
    title: 'PEV Lecture: Chapter 10',
    date: 'July 2, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260702_2.jpeg',
    photos: [
      'photo/20260702_1.jpeg',
      'photo/20260702_2.jpeg',
      'photo/20260702_3.jpeg',
      'photo/20260702_4.jpeg'
    ]
  },
    {
    id: '',
    title: 'PEV Lecture: Chapter 9',
    date: 'July 1, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260701_2.jpeg',
    photos: [
      'photo/20260701_1.jpeg',
      'photo/20260701_2.jpeg',
      'photo/20260701_3.jpeg',
      'photo/20260701_4.jpeg',
      'photo/20260701_5.jpeg',
    ]
  },
  {
    id: '',
    title: 'PEV Lecture: Chapter 9',
    date: 'June 29, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260629_4.jpeg',
    photos: [
      'photo/20260629_1.jpeg',
      'photo/20260629_2.jpeg',
      'photo/20260629_3.jpeg',
      'photo/20260629_4.jpeg',
    ]
  },
  {
    id: '',
    title: 'Busan Workshop: DAY 3',
    date: 'June 20, 2026',
    location: 'Busan',
    cover: 'photo/20260620_7.jpeg',
    photos: [
      'photo/20260620_1.jpeg',
      'photo/20260620_2.jpeg',
      'photo/20260620_3.jpeg',
      'photo/20260620_4.jpeg',
      'photo/20260620_5.jpeg',
      'photo/20260620_6.jpeg',
      'photo/20260620_7.jpeg',
      'photo/20260620_8.jpeg',
      'photo/20260620_9.jpeg',
    ]
  },
      {
    id: '',
    title: 'Busan Workshop: DAY 2',
    date: 'June 19, 2026',
    location: 'Busan',
    cover: 'photo/20260619_7.jpeg',
    photos: [
      'photo/20260619_1.jpeg',
      'photo/20260619_2.jpeg',
      'photo/20260619_3.jpeg',
      'photo/20260619_4.jpeg',
      'photo/20260619_5.jpeg',
      'photo/20260619_6.jpeg',
      'photo/20260619_7.jpeg',
      'photo/20260619_8.jpeg'
    ]
  },
    {
    id: '',
    title: 'Busan Workshop: DAY 1',
    date: 'June 18, 2026',
    location: 'Busan',
    cover: '',
    photos: [
      'photo/20260618_1.jpeg',
      'photo/20260618_2.jpeg',
      'photo/20260618_3.jpeg',
      'photo/20260618_4.jpeg',
      'photo/20260618_5.jpeg',
      'photo/20260618_6.jpeg',
      'photo/20260618_7.jpeg',
      'photo/20260618_8.jpeg',
      'photo/20260618_9.jpeg',
      'photo/20260618_10.jpeg',
      'photo/20260618_11.jpeg',
    ]
  },
  {
    id: '',
    title: 'PEV Lecture: Chapter 8',
    date: 'June 17, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260617_5.jpeg',
    photos: [
      'photo/20260617_1.jpeg',
      'photo/20260617_2.jpeg',
      'photo/20260617_3.jpeg',
      'photo/20260617_4.jpeg',
      'photo/20260617_5.jpeg'
    ]
  },
    {
    id: '',
    title: 'PEV Lecture: Chapter 8',
    date: 'June 15, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260615_4.jpeg',
    photos: [
      'photo/20260615_1.jpeg',
      'photo/20260615_2.jpeg',
      'photo/20260615_3.jpeg',
      'photo/20260615_4.jpeg',
      'photo/20260615_5.jpeg',
      'photo/20260615_6.jpeg',
    ]
  },
     {
    id: '',
    title: 'PEV Lecture: Chapter 7',
    date: 'June 10, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260610_1.jpeg',
      'photo/20260610_2.jpeg',
      'photo/20260610_3.jpeg',
    ]
  },
        {
    id: '',
    title: 'PEV Lecture: Chapter 7',
    date: 'June 9, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260609_1.jpeg',
      'photo/20260609_2.jpeg',
      'photo/20260609_3.jpeg',
    ]
  },
      {
    id: '',
    title: 'PEV Lecture: Chapter 7',
    date: 'June 8, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260608_1.jpeg',
      'photo/20260608_2.jpeg',
      'photo/20260608_3.jpeg',
      'photo/20260608_4.jpeg',
    ]
  },
      {
    id: '',
    title: 'Mallipo Workshop: Fellowship & Dinner',
    date: 'June 4-5, 2026',
    location: 'KMU Mallipo Education & Training Cente',
    cover: 'photo/20260604_5.jpeg',
    photos: [
      'photo/20260604_1.jpeg',
      'photo/20260604_2.jpeg',
      'photo/20260604_3.jpeg',
      'photo/20260604_4.jpeg',
      'photo/20260604_5.jpeg',
      'photo/20260604_6.jpeg',
      'photo/20260604_7.jpeg',
    ]
  },
    {
    id: '',
    title: 'Mallipo Workshop: Mid-Term Presentation',
    date: 'June 4-5, 2026',
    location: 'KMU Mallipo Education & Training Cente',
    cover: 'photo/20260604_seminar2.jpeg',
    photos: [
      'photo/20260604_seminar1.jpeg',
      'photo/20260604_seminar2.jpeg',
      'photo/20260604_seminar3.jpeg',
      'photo/20260604_seminar4.jpeg',
      'photo/20260604_seminar5.jpeg',
      'photo/20260604_seminar6.jpeg',
      'photo/20260604_seminar7.jpeg',
      'photo/20260604_seminar8.jpeg',
      'photo/20260604_seminar9.jpeg',
      'photo/20260604_seminar10.jpeg',
      'photo/20260604_seminar11.jpeg',
      'photo/20260604_seminar12.jpeg',
      'photo/20260604_seminar13.jpeg',
      'photo/20260604_seminar14.jpeg',
    ]
  },
          {
    id: '',
    title: 'Project Workshop & Team building Activity ',
    date: 'June 2, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260602_3.jpeg',
    photos: [
      'photo/20260602_1.jpeg',
      'photo/20260602_2.jpeg',
      'photo/20260602_3.jpeg',
      'photo/20260602_4.jpeg',
      'photo/20260602_5.jpeg',
      'photo/20260602_6.jpeg',
      'photo/20260602_7.jpeg',
    ]
  },
        {
    id: '',
    title: 'Project Workshop',
    date: 'June 1, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260601_1.jpeg',
      'photo/20260601_2.jpeg',
      'photo/20260601_3.jpeg',
      'photo/20260601_4.jpeg',
    ]
  },

      {
    id: '',
    title: 'Project Workshop',
    date: 'May 29, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260529_5.jpeg',
    photos: [
      'photo/20260529_1.jpeg',
      'photo/20260529_2.jpeg',
      'photo/20260529_3.jpeg',
      'photo/20260529_4.jpeg',
      'photo/20260529_5.jpeg',
      'photo/20260529_6.jpeg',
    ]
  },
    {
    id: '',
    title: 'PEV Lecture: Chapter 6',
    date: 'May 28, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260528_4.jpeg',
    photos: [
      'photo/20260528_1.jpeg',
      'photo/20260528_2.jpeg',
      'photo/20260528_3.jpeg',
      'photo/20260528_4.jpeg',
    ]
  },
        {
    id: '',
    title: 'Guest Lecture: South Korean Startup Ecosystem Analysis',
    date: 'May 27, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260527_4.jpeg',
    photos: [
      'photo/20260527_1.jpeg',
      'photo/20260527_2.jpeg',
      'photo/20260527_3.jpeg',
      'photo/20260527_4.jpeg',
      'photo/20260527_5.jpeg',
    ]
  },
      {
    id: '',
    title: 'PEV Lecture: Chapter 6',
    date: 'May 22, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260522_2.jpeg',
    photos: [
      'photo/20260522_1.jpeg',
      'photo/20260522_2.jpeg',
      'photo/20260522_3.jpeg',
      'photo/20260522_4.jpeg',
      'photo/20260522_5.jpeg',
    ]
  },
    {
    id: '',
    title: 'Field Trip: Social Innovation Insight_MYSC ',
    date: 'May 21, 2026',
    location: 'SeongSu-Dong & MYSC',
    cover: '',
    photos: [
      'photo/20260521_1.jpeg',
      'photo/20260521_2.jpeg',
      'photo/20260521_3.jpeg',
      'photo/20260521_4.jpeg',
      'photo/20260521_5.jpeg',
      'photo/20260521_6.jpeg',
      'photo/20260521_7.jpeg',
      'photo/20260521_8.jpeg',
      'photo/20260521_9.jpeg',

    ]
  },
           {
    id: '',
    title: 'PEV Lecture: Chapter 5',
    date: 'May 20, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260520_1.jpeg',
      'photo/20260520_2.jpeg',
      'photo/20260520_3.jpeg',
      'photo/20260520_4.jpeg',
      'photo/20260520_5.jpeg',

    ]
  },
         {
    id: '',
    title: 'PEV Lecture: Chapter 5',
    date: 'May 19, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260519_1.jpeg',
      'photo/20260519_2.jpeg',
      'photo/20260519_3.jpeg',

    ]
  },
       {
    id: '',
    title: 'PEV Lecture: Chapter 5',
    date: 'May 18, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260518_5.jpeg',
    photos: [
      'photo/20260518_1.jpeg',
      'photo/20260518_2.jpeg',
      'photo/20260518_3.jpeg',
      'photo/20260518_4.jpeg',
      'photo/20260518_5.jpeg',
      'photo/20260518_6.jpeg',
      'photo/20260518_7.jpeg',
    ]
  },
     {
    id: '',
    title: 'PEV Lecture: Chapter 4',
    date: 'May 15, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260515_1.jpeg',
    photos: [
      'photo/20260515_1.jpeg',
      'photo/20260515_2.jpeg',
      'photo/20260515_3.jpeg',
      'photo/20260515_4.jpeg',
      'photo/20260515_5.jpeg',
      'photo/20260515_6.jpeg',
      'photo/20260515_7.jpeg',
    ]
  },
            {
    id: '',
    title: 'Project Workshop',
    date: 'May 14, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260514_1.jpeg',
    photos: [
      'photo/20260514_1.jpeg',
      'photo/20260514_2.jpeg',
      'photo/20260514_3.jpeg',
      'photo/20260514_4.jpeg',
      'photo/20260514_5.jpeg',
      'photo/20260514_6.jpeg',
      'photo/20260514_7.jpeg',
    ]
  },
          {
    id: '',
    title: 'Guest Lecture: Korean SME Supporting Policy',
    date: 'May 12, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260512_4.jpeg',
    photos: [
      'photo/20260512_1.jpeg',
      'photo/20260512_2.jpeg',
      'photo/20260512_3.jpeg',
      'photo/20260512_4.jpeg',
      'photo/20260512_5.jpeg',
      'photo/20260512_6.jpeg',
    ]
  },
        {
    id: '',
    title: 'Cultural Tour: Gyeongbokgung Palace & Bukchon Hanok Village',
    date: 'May 07, 2026',
    location: 'Gyeongbokgung & Bukchon Hanok Village',
    cover: '',
    photos: [
      'photo/20260507_1.jpeg',
      'photo/20260507_2.jpeg',
      'photo/20260507_3.jpeg',
      'photo/20260507_4.jpeg',
      'photo/20260507_5.jpeg',
      'photo/20260507_6.jpeg',
      'photo/20260507_7.jpeg',
      'photo/20260507_8.jpeg',
      'photo/20260507_9.jpeg',
      'photo/20260507_10.jpeg',
      'photo/20260507_11.jpeg',
      'photo/20260507_12.jpeg',
      'photo/20260507_13.jpeg',
      'photo/20260507_14.jpeg',
    ]
  },
      {
    id: '',
    title: 'Project Workshop Presentation',
    date: 'May 06, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260506_7.jpeg',
    photos: [
      'photo/20260506_1.jpeg',
      'photo/20260506_2.jpeg',
      'photo/20260506_3.jpeg',
      'photo/20260506_4.jpeg',
      'photo/20260506_5.jpeg',
      'photo/20260506_6.jpeg',
      'photo/20260506_7.jpeg',
      'photo/20260506_8.jpeg',
      'photo/20260506_9.jpeg',
      'photo/20260506_10.jpeg'
    ]
  },
    {
    id: '',
    title: 'Project Workshop',
    date: 'May 04, 2026',
    location: 'KMU, Classroom 215',
    cover: '',
    photos: [
      'photo/20260504_1.jpeg',
      'photo/20260504_2.jpeg',
      'photo/20260504_3.jpeg'
    ]
  },
  {
    id: '',
    title: 'Guest Lecture: Business model and strategy development',
    date: 'April 30, 2026',
    location: 'KMU, Classroom 215',
    cover: 'photo/20260430_5.jpeg',
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
      'photo/20260429_15.jpeg'
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
      'photo/20260428_arrived1.jpg'
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
