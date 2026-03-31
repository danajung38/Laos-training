/**
 * ================================================================
 *  curriculum.js — Curriculum 페이지 데이터 + 렌더링 로직
 * ================================================================
 *
 *  ✏️  콘텐츠 수정 방법:
 *  CURRICULUM_DATA 객체에서 원하는 Month와 Week를 찾아 수정하세요.
 *
 *  각 week 구조:
 *  - week       : 주차 번호
 *  - title      : 챕터 제목
 *  - dates      : 날짜 범위
 *  - tags       : 태그 배열
 * ///////////////////////////////////////////////////////
 *  - sessions   : 세션 배열 (강의 / 특강 / 필드트립 / 문화체험 / 워크숍 / 프레젠테이션)
 *      - type       : 'lecture' | 'special' | 'fieldtrip' | 'culture' | 'workshop' | 'presentation'
 *      - title      : 세션 제목
 *      - desc       : 간단한 설명
 *      - date       : (선택) 세션 날짜, 예: 'Apr 13, 2026'
 *      - instructor : (선택) 이 세션의 강사 이름 (없으면 week의 professor 표시)
 *      - location   : (선택) 필드트립/문화체험 장소
 * ================================================================
 */

const CURRICULUM_DATA = {
  1: {
    topic: 'Recognizing Opportunities',
    weeks: [
      {
        week: 1,
        title: 'Chapter 1. Becoming an Entrepreneur',
        dates: 'Apr 14–17, 2026',
        tags: ['#Entrepreneurship', '#characteristic', '#Personal-Vision'],

        sessions: [
          {
            type: 'lecture',
            date: 'Apr 14',
            title: 'Becoming an Entrepreneur',
            instructor: 'Prof. Woojin Lee / Prof. Byungchul Choi / Ms.Soohyun Na',
            desc: 'Understand the definition and key characteristics of entrepreneurship, and learn to establish a personal vision and structured planning process for business success.',
          },
          {
            type: 'special',
            date: 'Apr 15',
            title: 'My Entrepreneurial Journey',
            instructor: 'Ms. Soohyun Na',
            desc: '',
          },
          {
            type: 'culture',
            date: 'Apr 17',
            title: 'Bukchon Hanok Village',
            location: 'Bukchon Hanok Village',
            desc: 'Explore Korea&apos;s living history with hands-on traditional activities in the heart of Bukchon Hanok Village.',
          },
        ],
      },
      {
        week: 2,
        title: 'Chapter 2. Defining a Business Concept',
        dates: 'Apr 20–23, 2026',
        tags: ['#Opportunities', '#Business-Ideation', '#Personal-Vision'],
        sessions: [
          {
            type: 'lecture',
            date: 'Apri 20, 22',
            instructor: 'Prof. Byungchul Choi / Ms.Soohyun Na',
            title: 'Recognizing Opportunities',
            desc: 'This chapter teaches how to identify market opportunities, generate creative business ideas, and evaluate them against your personal vision.',
          },
          {
            type: 'special',
            date: 'Apr 22',
            title: 'untitled',
            instructor: 'Mr. Dongok Ahn(CEO)',
            desc: '.',
          },
          {
            type: 'fieldtrip',
            date: 'Apr 23',
            title: 'TIPS (Tech Incubator Program for Startups Korea) & Asan Nanum Foundation',
            location: ['TIPS Town', 'Asan Nanum Foundation'],
            desc: '',
          },
        ],
      },
      {
        week: 3,
        title: 'Chapter 3. Defining a Business Concept',
        dates: 'Apr 27 – Apr 30, 2026',
        tags: ['#Business-Concept', '#Target-Audience', '#Market-Research'],
        sessions: [
          {
            type: 'lecture',
            date: 'Apr 27, 29',
            title: 'Defining a Business Concept',
            instructor: 'Prof. Byungchul Choi',
            desc: 'This chapter covers defining your product or service, identifying target customers, and researching market reach to draft a formal business concept.',
          },
          {
            type: 'special',
            date: 'Apr 28',
            title: '성공한 라오스 창업가 토크',
            guest: 'Prof. jin Lee',
            desc: '농업 스타트업을 성공시킨 창업가의 비즈니스 모델 설계 경험담을 듣습니다.',
          },
          {
            type: 'culture',
            date: '',
            title: '한국 문화 교류의 밤',
            location: '한국문화원, 비엔티안',
            desc: '한국 전통 문화 체험과 K-스타트업 문화를 소개하는 교류 행사입니다.',
          },
        ],
      },
      {
        week: 4,
        title: 'Project: Economic Environment of Laos, BM Development & MVP',
        dates: 'May 4–7, 2026',
        tags: ['#MVP', '#Business-Model', '#Laos'],
        sessions: [
          {
            type: 'workshop',
            date: 'May 4-6',
            title: 'Economic Environment of Laos, BM Development & MVP',
            desc: '최소기능제품(MVP)의 개념과 빠른 검증 사이클(Build-Measure-Learn)을 배웁니다.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '월간 쇼케이스 & 피드백 세션',
            location: '라오스-한국 비즈니스 센터, 비엔티안',
            desc: '1개월 차 마무리 팀 발표. 프로토타입 시연 및 멘토 피드백.',
          },
        ],
      },
    ],
  },

  2: {
    topic: 'BM Development',
    weeks: [
      {
        week: 5,
        title: 'Chapter 4. Model Feasibility checklist',
        dates: 'May 11–15, 2026',
        tags: ['#Feasibility-Analysis', '#Business-Model', '#Financial-Viability'],
        sessions: [
          {
            type: 'lecture',
            date: 'May 11, May 13',
            instructor: 'Prof. Byungchul Choi',
            title: 'Model Feasibility checklist',
            desc: 'This chapter focuses on analyzing the feasibility of a business model by evaluating its product, market, and financial viability.',
          },
          {
            type: 'special',
            date: '',
            title: 'UX 리서치 심화',
            guest: 'Ms. Noy Silavong (UX 컨설턴트)',
            desc: '현지 라오스 사용자의 디지털 행동 패턴과 UX 설계 시 고려사항을 공유합니다.',
          },
          {
            type: 'culture',
            date: '',
            title: '분사이 축제 문화 체험',
            location: '왓 시사켓 사원, 비엔티안',
            desc: '라오스 전통 불교 문화를 체험하며 현지 커뮤니티와 소통합니다.',
          },
        ],
      },
      {
        week: 6,
        title: 'Chapter 5. Product/Service Planning',
        dates: 'May 18–21, 2026',
        tags: ['#ProductDefinition', '#LegalCompliance', '#BusinessPlanning'],
        sessions: [
          {
            type: 'lecture',
            date: 'May 18, 20',
            instructor: 'Prof. Woojin Lee',
            title: 'Product/Service Planning',
            desc: 'This chapter covers defining your product or service, ensuring its protection, and complying with government regulations to draft the product section of a business plan.',
          },
          {
            type: 'special',
            date: '',
            title: '동남아 시장 진출 전략',
            guest: 'Dr. Somsak Rattanavong (ASEAN 비즈니스 컨설턴트)',
            desc: 'ASEAN 시장의 특수성과 라오스에서 성공하는 포지셔닝 전략을 논의합니다.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '경쟁 제품/서비스 현장 조사',
            location: '비엔티안 IT 파크 & 스타트업 허브',
            desc: '현지 경쟁 스타트업 방문 및 서비스 체험을 통해 차별화 포인트를 발굴합니다.',
          },
        ],
      },
      {
        week: 7,
        title: 'Chapter 6. Management & Organization Planning',
        dates: 'May 25–28, 2026',
        tags: ['#LegalStructure', '#TeamBuilding', '#HumanResources'],
        sessions: [
          {
            type: 'lecture',
            date: 'May 25, 28',
            title: 'Management & Organization Planning',
            desc: 'This chapter covers selecting a legal structure, building a management team, and developing strategies for recruiting, retaining, and outsourcing talent.',
          },
          {
            type: 'special',
            date: '',
            title: '라오스 세무·회계 실무',
            guest: 'Ms. Khamla Phomvixay (공인회계사)',
            desc: '라오스 현지 세금 구조, 법인 설립 비용, 회계 처리 실무를 안내합니다.',
          },
          {
            type: 'culture',
            date: '',
            title: '라오스 전통 요리 체험',
            location: '비엔티안 요리 학교 (Makphet)',
            desc: '라오스 음식 문화를 배우며 팀 빌딩 시간을 갖습니다.',
          },
        ],
      },
      {
        week: 8,
        title: 'Project. Service Design & Market Analysis of Laos',
        dates: 'Jun 1–4, 2026',
        tags: ['#serviceDesign', '#MaketAnalysis', '#LaoPDR'],
        sessions: [
          {
            type: 'workshop',
            date: 'Jun 1, 3',
            title: 'Service Design & Market Analysis of Laos',
            desc: '',
          },
          {
            type: 'special',
            date: '',
            title: '멘토 모의 피칭 세션',
            guest: '멘토단 (투자자 3인, 창업가 2인)',
            desc: '5분 피치 후 멘토 패널의 심층 Q&A 및 피드백을 받습니다.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '2개월 차 데모데이',
            location: '라오스-한국 비즈니스 센터 대강당',
            desc: '2개월 성과 발표 및 네트워킹 리셉션. 외부 투자자 초청.',
          },
        ],
      },
    ],
  },

  3: {
    topic: 'Customer Marketing',
    weeks: [
      {
        week: 9,
        title: 'Chapter 7. Market Planning: Industry & Competition',
        dates: 'Jun 8–12, 2026',
        tags: ['#IndustryAnalysis', 'CompetitiveStrategy', '#MarketingPlan'],
        sessions: [
          {
            type: 'lecture',
            date: 'Jun 8, 10',
            instructor: 'Prof.Woojin Lee',
            title: 'Market Planning: Industry & Competition',
            desc: 'This chapter focuses on analyzing the industry and competition to develop a strategic marketing plan that positions your business effectively',
          },
          {
            type: 'special',
            date: '',
            title: '라오스 SNS 마케팅 현황',
            guest: 'Mr. Phonesavanh Keovilay (디지털 마케터)',
            desc: '페이스북 중심의 라오스 SNS 생태계와 현지 마케팅 성공 사례를 공유합니다.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '메콩강 유람선 팀 워크숍',
            location: '메콩강, 비엔티안',
            desc: '메콩강 유람선에서 진행하는 창의적 팀 브레인스토밍 워크숍.',
          },
        ],
      },
      {
        week: 10,
        title: 'Chapter 8. Market Planning: Market Analysis',
        dates: 'Jun 15–18, 2026',
        tags: ['#MarketResearch', '#TargetMarket', '#CustomerProfile'],
        professor: 'Prof. Park Dong-hyun',
        sessions: [
          {
            type: 'lecture',
            date: 'Jun 15, 17',
            instructor:'Prof. Hyejin Bang',
            title: 'Market Planning: Market Analysis',
            desc: 'This chapter focuses on conducting market research to identify a specific target market and building detailed customer profiles to guide business decisions.',
          },
          {
            type: 'special',
            date: '',
            title: '라오스 정부 지원 사업 소개',
            guest: 'Mr. Thongvanh Vongkhamchanh (기업청 담당관)',
            desc: '라오스 중소기업 지원 정책 및 한-라오스 정부 협력 프로그램을 안내합니다.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '네트워킹 믹서 & 산업 투어',
            location: 'Lao ITECC 전시관',
            desc: '라오스 ICT 기업 전시를 관람하고 업계 관계자들과 네트워킹합니다.',
          },
        ],
      },
      {
        week: 11,
        title: 'Chapter 9. Market Planning: Penetration',
        dates: 'Jun 22–25, 2026',
        tags: ['#BrandingStrategy', '#MarketReach', '#MarketPenetration'],
        sessions: [
          {
            type: 'lecture',
            date: 'Jun 22, 24',
            instructor:'Prof. Woojin Lee',
            title: 'Market Planning: Penetration',
            desc: 'This chapter explores building a business brand and developing effective communication strategies to successfully reach and penetrate your target market.',
          },
          {
            type: 'special',
            date: '',
            title: '유니콘 스타트업의 스케일업 경험',
            guest: 'Mr. Park Jae-won (쿠팡 전 CPO)',
            desc: '대형 스타트업의 빠른 성장 과정에서 직면한 운영 도전과 해결책을 공유합니다.',
          },
          {
            type: 'culture',
            date: '',
            title: '루앙프라방 당일 문화 탐방',
            location: '루앙프라방 세계문화유산 지구',
            desc: '유네스코 세계문화유산 루앙프라방을 방문하여 라오스 역사 문화를 체험합니다.',
          },
        ],
      },
      {
        week: 12,
        title: 'Project. Marketing Analysis & Strategy',
        dates: 'Jun 29 – Jul 2, 2026',
        tags: ['#Marketing', '#Analysis', '#MarketingStrategy'],
        professor: 'Prof. Choi Hyun-sik',
        sessions: [
          {
            type: 'workshop',
            date: 'jun 29, Jul 1',
            title: 'Marketing Analysis & Strategy',
            desc: '',
          },
          {
            type: 'special',
            date: '',
            title: '벤처캐피털 심사 기준',
            guest: 'Ms. Kim Da-eun (Kakao Ventures)',
            desc: '벤처캐피털이 초기 스타트업을 평가하는 프레임워크와 DD 과정을 소개합니다.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '3개월 차 데모데이',
            location: '비엔티안 힐튼 호텔 컨퍼런스홀',
            desc: '외부 투자자 및 파트너를 초청한 중간 발표 행사.',
          },
        ],
      },
    ],
  },

  4: {
    topic: 'Market Strategy',
    weeks: [
      {
        week: 13,
        title: 'Chapter 10. Market Planning: Pricing',
        dates: 'Jul 6–09, 2026',
        tags: ['#PricingStrategy', '#MarketSensitivity', '#CompetitivePricing'],
        sessions: [
          {
            type: 'lecture',
            date: 'Jul 6, 8',
            instructor:'Prof. Byungchul Choi',
            title: 'Market Planning: Pricing',
            desc: 'This chapter focuses on evaluating market constraints and sensitivities to establish pricing strategies that effectively support and reinforce your overall marketing plan.',
          },
          {
            type: 'special',
            date: '',
            title: '피치덱 디자인 클리닉',
            guest: 'Ms. Park Soo-yeon (브랜드 디자이너)',
            desc: '각 팀의 피치덱을 전문 디자이너가 실시간으로 피드백하고 개선합니다.',
          },
          {
            type: 'culture',
            date: '',
            title: '탓 루앙 축제 참관',
            location: '탓 루앙 국립 사원, 비엔티안',
            desc: '라오스 최대 국가 축제를 참관하며 현지 문화의 깊이를 경험합니다.',
          },
        ],
      },
      {
        week: 14,
        title: 'Chapter 11. Financial Planning',
        dates: 'Jul 13–16, 2026',
        tags: ['#FinancialPlanning', '#CashFlowManagement', '#FinancialStatements'],
        sessions: [
          {
            type: 'lecture',
            date: 'Jul 13, 15',
            instructor: 'Prof. Kyungyun Lee',
            title: 'Financial Planning',
            desc: 'This section provides a comprehensive guide to financial planning, covering everything from start-up costs and operational expenses to managing cash flows and preparing professional financial statements.',
          },
          {
            type: 'special',
            date: '',
            title: '미디어 트레이닝',
            guest: 'Mr. Yoon Sung-jin (前 KBS 기자)',
            desc: '인터뷰 대응, 메시지 통일, 위기 커뮤니케이션 실전 훈련.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '소프트 런칭 & 베타 유저 미팅',
            location: 'BCEL One 핀테크 허브',
            desc: '선발된 베타 유저 20명을 초청하여 첫 서비스 론칭 이벤트를 진행합니다.',
          },
        ],
      },
      {
        week: 15,
        title: 'Chapter 12. Finalizing the Business Statements',
        dates: 'Jul 20–23, 2026',
        tags: ['#BusinessPlanFinalization', '#StrategicAction', '#EntrepreneurshipGoals'],
        sessions: [
          {
            type: 'lecture',
            date: 'Jul 20, 22',
            instructor:'Prof. Byungchul Choi',
            title: 'Finalizing the Business Statements',
            desc: 'This final chapter guides you through assembling your business plan, ensuring it is clear and professional, and defining the strategic next steps to turn your vision into reality.',
          },
          {
            type: 'special',
            date: '',
            title: '前 Demo Day 수상팀 특강',
            guest: '2025년 Demo Day 대상팀 CEO',
            desc: '작년 수상팀이 준비 과정에서 얻은 교훈과 현재 사업 현황을 공유합니다.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: 'Full 드레스 리허설',
            location: '라오스-한국 비즈니스 센터 대강당',
            desc: '실제 Demo Day 행사 장소에서 전체 리허설 및 무대/음향/조명 점검.',
          },
        ],
      },
      {
        week: 16,
        title: 'Grand Final Pitching Day 🎉',
        dates: 'Jul 27–30, 2026',
        tags: ['#Finilization', '#Presentation', '#BusinessStatement'],
        sessions: [
          {
            type: 'presentation',
            date: 'Jul 27',
            title: 'Grand Final Pitching',
            desc: 'Final Business Plan Presentation',
          },
        ],
      },
    ],
  },
};

/* ================================================================
   세션 타입 설정 (뱃지 색상 & 라벨)
   ================================================================ */
const SESSION_TYPE_CONFIG = {
  lecture:   { label: 'Lecture',        color: '#ffffff', bg: '#1a3a6b' },  /* 진한 네이비 + 흰 글씨 */
  special:   { label: 'Special Lecture', color: '#ffffff', bg: '#7c3aed' },  /* 보라 + 흰 글씨 */
  fieldtrip: { label: 'Field Trip',     color: '#ffffff', bg: '#16803c' },  /* 초록 + 흰 글씨 */
  culture:   { label: 'Cultural Trip',  color: '#ffffff', bg: '#ff8e60' },  /* 오렌지 + 흰 글씨 */
  workshop:     { label: 'Workshop',      color: '#ffffff', bg: '#d97706' },  /* 앰버 + 흰 글씨 */
  presentation: { label: 'Presentation', color: '#ffffff', bg: '#0891b2' },  /* 시안 + 흰 글씨 */
};

/* ================================================================
   렌더링 로직
   ================================================================ */
(function () {
  'use strict';

  const tabsEl  = document.getElementById('monthTabs');
  const topicEl = document.getElementById('currTopic');
  const listEl  = document.getElementById('currList');

  /* ── 날짜 기준 초기 월 자동 설정 ── */
  function getInitialMonth() {
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1; // 1~12
    var d  = now.getDate();

    if (y !== 2026) return 1;                                         // 2026년 외 기본값
    if (mo < 5 || (mo === 5 && d <= 10))           return 1;  // ~5/10
    if ((mo === 5 && d >= 11) || (mo === 6 && d <= 7))  return 2;  // 5/11~6/7
    if ((mo === 6 && d >= 8)  || (mo === 7 && d <= 5))  return 3;  // 6/8~7/5
    if (mo === 7 && d >= 6 && d <= 31)             return 4;  // 7/6~7/31
    return 1;                                                         // 기타 기본값
  }

  let activeMonth = getInitialMonth();

  /* ── 월 탭 렌더 ── */
  function renderTabs() {
    tabsEl.innerHTML = '';
    Object.keys(CURRICULUM_DATA).forEach(function (m) {
      var btn = document.createElement('button');
      btn.className = 'curr-month-btn' + (parseInt(m) === activeMonth ? ' active' : '');
      btn.textContent = 'Month ' + m;
      btn.addEventListener('click', function () {
        activeMonth = parseInt(m);
        renderTabs();
        renderList();
      });
      tabsEl.appendChild(btn);
    });
  }

  /* ── 세션 아이템 HTML 생성 ── */
  function buildSessionHTML(session) {
    var cfg = SESSION_TYPE_CONFIG[session.type] || SESSION_TYPE_CONFIG.lecture;
    var badge =
      '<span class="curr-session-badge" style="color:' + cfg.color + ';background:' + cfg.bg + ';">' +
        cfg.label +
      '</span>';

    /* Date → Instructor → Location 순서로 한 줄 배치 */
    var infoParts = [];
    if (session.date)       infoParts.push('<span class="curr-session-date">📅 ' + session.date + '</span>');
    if (session.instructor) infoParts.push('<span class="curr-session-instructor">👤 ' + session.instructor + '</span>');
    if (session.location) {
      var locations = Array.isArray(session.location) ? session.location : [session.location];
      locations.forEach(function (loc) {
        infoParts.push('<span class="curr-session-location">📍 ' + loc + '</span>');
      });
    }
    var infoLine = infoParts.length > 0
      ? '<div class="curr-session-info">' + infoParts.join('') + '</div>'
      : '';

    return (
      '<li class="curr-session-item">' +
        '<div class="curr-session-top">' +
          badge +
          '<span class="curr-session-title">' + session.title + '</span>' +
        '</div>' +
        infoLine +
        '<p class="curr-session-desc">' + session.desc + '</p>' +
      '</li>'
    );
  }

  /* ── 주차 카드 리스트 렌더 ── */
  function renderList() {
    var monthData = CURRICULUM_DATA[activeMonth];
    topicEl.textContent = 'TOPIC: ' + monthData.topic;
    listEl.innerHTML = '';

    monthData.weeks.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'curr-card';

      var tags = item.tags.map(function (t) {
        return '<span class="curr-tag">' + t + '</span>';
      }).join('');

      var sessionsHTML = (item.sessions || []).map(function (s) {
        return buildSessionHTML(s);
      }).join('');

      li.innerHTML =
        '<div class="curr-card-header">' +
          '<div class="curr-week-badge">W' + item.week + '</div>' +
          '<div class="curr-card-info">' +
            '<p class="curr-card-title">' + item.title + '</p>' +
            '<p class="curr-card-dates">' + item.dates + '</p>' +
            '<div class="curr-card-tags">' + tags + '</div>' +
          '</div>' +
          '<span class="curr-card-arrow">▼</span>' +
        '</div>' +
        '<div class="curr-card-detail">' +
          '<div class="curr-card-detail-inner">' +
            '<ul class="curr-session-list">' + sessionsHTML + '</ul>' +
          '</div>' +
        '</div>';

      /* 아코디언 토글 — 다른 카드 열면 기존 카드 닫기 */
      li.querySelector('.curr-card-header').addEventListener('click', function () {
        var detail = li.querySelector('.curr-card-detail');
        var isOpen = li.classList.contains('open');

        /* 현재 열려 있는 다른 카드 먼저 닫기 */
        listEl.querySelectorAll('.curr-card.open').forEach(function (openCard) {
          if (openCard === li) return;
          var openDetail = openCard.querySelector('.curr-card-detail');
          openDetail.style.maxHeight = openDetail.scrollHeight + 'px';
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              openDetail.style.maxHeight = '0px';
              openCard.classList.remove('open');
            });
          });
        });

        if (isOpen) {
          /* 닫기 */
          detail.style.maxHeight = detail.scrollHeight + 'px';
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              detail.style.maxHeight = '0px';
              li.classList.remove('open');
            });
          });
        } else {
          /* 열기 */
          li.classList.add('open');
          detail.style.maxHeight = '0px';
          requestAnimationFrame(function () {
            detail.style.maxHeight = detail.scrollHeight + 'px';
            detail.addEventListener('transitionend', function onEnd() {
              detail.style.maxHeight = 'none';
              detail.removeEventListener('transitionend', onEnd);
            });
          });
        }
      });

      listEl.appendChild(li);
    });
  }

  /* ── 초기 렌더 ── */
  renderTabs();
  renderList();

  /* ── 스크롤 헤더 축소 (모바일 전용) ── */
  var currHeader  = document.querySelector('.curr-header');
  var currContent = document.querySelector('.curr-content');

  function handleCurrScroll() {
    if (!currHeader) return;
    if (window.innerWidth <= 768) {
      if (currContent.scrollTop > 50) {
        currHeader.classList.add('shrink');
      } else {
        currHeader.classList.remove('shrink');
      }
    } else {
      currHeader.classList.remove('shrink');
    }
  }

  if (currContent) {
    currContent.addEventListener('scroll', handleCurrScroll);
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && currHeader) {
      currHeader.classList.remove('shrink');
    }
  });

})();
