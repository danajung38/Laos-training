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
        dates: 'Apr 9–17, 2026',
        tags: ['#Entrepreneurship', '#characteristic', '#Personal-Vision'],

        sessions: [
          {
            type: 'orientation',
            date: 'Apr 9',
            title: 'Online-Orientation',
            instructor: 'Prof. Woo Lee / Prof. Byungchul Choi',
            desc: 'Online pre-orientation for a successful start to the training program. We will provide guidance on the overall schedule, completion criteria, and how to use the learning platform.',
          },
          {
            type: 'special',
            date: 'Apr 10',
            title: 'Korea&apos;s Startup World: Culture, Companies, and What You Can Learn',
            instructor: 'Ms. Soohyun Na',
            desc: 'Why does a small country like Korea produce global companies like Kakao, Toss, and Coupang? In this session, we&apos;ll explore the culture, mindset, and support systems behind Korea&apos;s startup ecosystem &mdash; through real stories and honest insights. Whether you&apos;re an aspiring entrepreneur or simply curious, you&apos;ll leave with a fresh perspective on what it takes to build something from scratch.',
          },
          {
            type: 'lecture',
            date: 'Apr 17',
            title: 'Becoming an Entrepreneur',
            instructor: 'Prof. Woo Lee',
            desc: 'Understand the definition and key characteristics of entrepreneurship, and learn to establish a personal vision and structured planning process for business success.',
          },
        ],
      },
      {
        week: 2,
        title: 'Chapter 2. Recognizing Opportunities',
        dates: 'Apr 20–23, 2026',
        tags: ['#Opportunities', '#Business-Ideation', '#Personal-Vision'],
        sessions: [
          {
            type: 'lecture',
            date: 'Apr 21',
            instructor: 'Prof. Byungchul Choi',
            title: 'Recognizing Opportunities',
            desc: 'This chapter teaches how to identify market opportunities, generate creative business ideas, and evaluate them against your personal vision.',
          },
          {
            type: 'special',
            date: 'Apr 22',
            title: 'The Founder’s Roadmap: Leveraging Startup Ecosystems from Campus to Global Stages',
            instructor: 'Ms. Soohyun Na',
            desc: 'This session tracks the journey of a founder navigating the robust startup infrastructure. From the first steps in university incubators and campus clubs to securing support from South Korea’s specialized foundations (e.g., for pre-entrepreneurs and women founders), I will share how to strategically utilize the ecosystem. Additionally, we will explore global benchmarks through the MassChallenge (Global Accelerator & Competition) and KIC program, featuring a masterclass on the "1-minute Elevator Pitch" perfected by experts from Boston University.ator pitch" learned from Boston University experts.',
          },
        ],
      },
      {
        week: 3,
        title: 'Chapter 3. Defining a Business Concept',
        dates: 'Apr 27 – May 1, 2026',
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
            date: 'Apr 30',
            title: 'Business model and strategy development',
            instructor: 'Prof. Hyoungjin Lee',
            desc: 'This lecture introduces how entrepreneurs design viable business models and translate them into actionable strategies for growth. It covers key frameworks for defining value creation, capturing revenue, and building competitive advantage under uncertainty.',
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
            type: 'project',
            date: 'May 4, 6',
            title: 'Economic Environment of Laos, BM Development & MVP',
            instructor:' Prof. Woo Lee / Prof. Byungchul Choi', 
            desc: 'This project involves analyzing Laos&#39; current economic indicators to design localized Business Models (BM). Through Minimum Viable Product (MVP) planning, participants will materialize ideas and evaluate their feasibility in the real market.',
          },
          {
            type: 'culture',
            date: 'May 7',
            title: 'Gyeongbokgung Palace & Bukchon Hanok Village Tour',
            location: 'Gyeongbokgung Palace & Bukchon Hanok Village',
            desc: 'Explore Korea&apos;s living history with hands-on traditional activities in the heart of Bukchon Hanok Village.',
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
            date: 'May 11, May 15',
            instructor: 'Prof. Byungchul Choi',
            title: 'Model Feasibility checklist',
            desc: 'This chapter focuses on analyzing the feasibility of a business model by evaluating its product, market, and financial viability.',
          },
          {
            type: 'special',
            date: 'May 12',
            title: 'Korean SME Supporting Policy',
            instructor: 'Dr. Wooill Sim',
            desc: '',
          },
          {
            type: 'lecture',
            date: 'May 14',
            title: 'Project Worhshoop',
            instructor: 'Prof. Woo Lee',
            desc: '',
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
            date: 'May 18, 19, 20',
            instructor: 'Prof. Woo Lee',
            title: 'Product/Service Planning',
            desc: 'This chapter covers defining your product or service, ensuring its protection, and complying with government regulations to draft the product section of a business plan.',
          },
          {
            type: 'fieldtrip',
            date: 'May 21',
            title: 'Social Innovation Insight: MYSC',
            location: 'MYSC',
            desc: 'We will visit MYSC, an impact investment and startup accelerator, to explore strategies for solving social problems through startups and discuss pathways for global cooperation',
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
            date: 'May 28',
            instructor: 'Prof. Woo Lee',
            title: 'Management & Organization Planning',
            desc: 'This chapter covers selecting a legal structure, building a management team, and developing strategies for recruiting, retaining, and outsourcing talent.',
          },
          {
            type: 'special',
            date: 'May 27',
            title: 'South Korean Startup Ecosystem Analysis. ',
            instructor: 'Dongok Ahn',
            desc: 'The lecture will provide in-depth analytic view on how Korean Startup Ecosystem has evolved over the past decade. Analysis will convey multi dimensional views on Startup Ecosystem development, including training, funding, education, policy, macro-economic trends and others. At the end of lecture, we will discuss the future of Laos and review the pain points and possibilities we have in our own ecosystems',
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
            type: 'project',
            date: 'Jun 1, 3',
            title: 'Service Design & Market Analysis of Laos',
            instructor:' Prof. Woo Lee / Prof. Byungchul Choi', 
            desc: 'Participants will use Service Design methodologies to identify the real needs of the Lao people and market. By analyzing Laos’ market environment based on data, this session offers a hands-on experience in developing strategic service models applicable to the local context.',
          },
          {
            type: 'workshop',
            date: 'Jun 4 - 5',
            title: 'Global Benchmarking and Business Strategy for Laos',
            location: 'KMU Mallipo Education & Training Cente',
            desc: 'This intensive session focuses on analyzing global market trends to derive actionable insights for the Laotian startup ecosystem. Participants will collaborate to establish a robust business strategy tailored specifically to the unique opportunities and challenges of the Laos market.',
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
            date: 'Jun 8, 9, 10',
            instructor: 'Prof. Byungchul Choi',
            title: 'Market Planning: Industry & Competition',
            desc: 'This chapter focuses on analyzing the industry and competition to develop a strategic marketing plan that positions your business effectively',
          },
          {
            type: 'fieldtrip',
            date: 'Jun 11',
            title: 'Market Insight Tour: Seongsu-dong Case Study',
            location: 'Seongsu-dong Area, Seoul',
            desc: 'Participants will freely explore Seongsu-dong, a hub for Korea’s startup ecosystem and retail trends, to conduct market research. By observing local business models and innovative cases firsthand, each participant will develop an individual report reflecting their unique insights and analysis.',
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
            instructor: 'Prof. Hyejin Bang',
            title: 'Market Planning: Market Analysis',
            desc: 'This chapter focuses on conducting market research to identify a specific target market and building detailed customer profiles to guide business decisions.',
          },
          {
            type: 'special',
            date: 'Jun 19',
            title: 'US Startup Ecosystem',
            instructor: 'Prof. Yong-Seok Jang',
            desc: 'Designed to explore the driving forces behind global innovation, this lecture provides a comprehensive overview of the US startup ecosystem and its dynamic growth. Participants will look beyond the success stories of tech giants to understand the collaborative culture and foundational systems that turn creative ideas into thriving businesses.',
          },
          {
            type: 'workshop',
            date: 'Jun 18 - 20',
            title: 'Busan Workshop: Insights into Regional Entrepreneurship',
            location: 'Busan',
            desc: 'This workshop aims to empower trainees by delivering specialized knowledge through a marketing strategy session and an expert lecture, combined with local industry and cultural exploration.',
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
            instructor: 'Prof. Byungchul Choi',
            title: 'Market Planning: Penetration',
            desc: 'This chapter explores building a business brand and developing effective communication strategies to successfully reach and penetrate your target market.',
          },
          {
            type: 'special',
            date: '',
            title: '',
            guest: '',
            desc: '',
          },
          {
            type: 'fieldtrip',
            date: 'Jun 25',
            title: '',
            location: '',
            desc: '',
          },
        ],
      },
      {
        week: 12,
        title: 'Project. Marketing Analysis & Strategy',
        dates: 'Jun 29 – Jul 2, 2026',
        tags: ['#Marketing', '#Analysis', '#MarketingStrategy'],
        sessions: [
          {
            type: 'project',
            date: 'Jun 29, Jul 1',
            title: 'Marketing Analysis & Strategy',
            instructor:' Prof. Woo Lee / Prof. Byungchul Choi', 
            desc: 'This project involves identifying market gaps by analyzing opportunities and threats within the Lao market. By deriving marketing solutions that meet customer needs, participants will learn the practical process of establishing sustainable business growth strategies.',
          },
          {
            type: 'fieldtrip',
            date: 'Jul 2',
            title: '',
            location: '',
            desc: '',
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
            instructor: 'Prof. Byungchul Choi',
            title: 'Market Planning: Pricing',
            desc: 'This chapter focuses on evaluating market constraints and sensitivities to establish pricing strategies that effectively support and reinforce your overall marketing plan.',
          },
          {
            type: 'special',
            date: 'Jul 7',
            title: '',
            instructor: '',
            desc: '',
          },
          {
            type: 'fieldtrip',
            date: 'Jul 16',
            title: '',
            location: '',
            desc: '',
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
            date: 'Jul 14',
            title: '',
            instructor: '',
            desc: '',
          },
          {
            type: 'fieldtrip',
            date: 'Jul 16',
            title: '',
            location: '',
            desc: '',
          },
        ],
      },
      {
        week: 15,
        title: 'Chapter 12. Finalizing the Business Plan',
        dates: 'Jul 20–23, 2026',
        tags: ['#BusinessPlanFinalization', '#StrategicAction', '#EntrepreneurshipGoals'],
        sessions: [
          {
            type: 'lecture',
            date: 'Jul 20, 22',
            instructor: 'Prof. Byungchul Choi',
            title: 'Finalizing the Business Plan',
            desc: 'This final chapter guides you through assembling your business plan, ensuring it is clear and professional, and defining the strategic next steps to turn your vision into reality.',
          },
          {
            type: 'special',
            date: 'Jul 21',
            title: '',
            instructor: '',
            desc: '',
          },
          {
            type: 'fieldtrip',
            date: 'Jul 23',
            title: '',
            location: '',
            desc: '',
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
            location: 'Room 215, Business Administration building',
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
  lecture: { label: 'Lecture', color: '#ffffff', bg: '#1a3a6b' },  /* 진한 네이비 + 흰 글씨 */
  special: { label: 'Special Lecture', color: '#ffffff', bg: '#7c3aed' },  /* 보라 + 흰 글씨 */
  fieldtrip: { label: 'Field Trip', color: '#ffffff', bg: '#16803c' },  /* 초록 + 흰 글씨 */
  culture: { label: 'Cultural Trip', color: '#ffffff', bg: '#ff8e60' },  /* 오렌지 + 흰 글씨 */
  workshop: { label: 'Workshop', color: '#ffffff', bg: '#F13E93' },  /* 앰버 + 흰 글씨 */
  presentation: { label: 'Presentation', color: '#ffffff', bg: '#0891b2' },  /* 시안 + 흰 글씨 */
  orientation: { label: 'Orientation', color: '#ffffff', bg: '#03AED2' },
  project: { label: 'Project', color: '#fff', bg: '#d97706' },
};

/* ================================================================
   렌더링 로직
   ================================================================ */
(function () {
  'use strict';

  const tabsEl = document.getElementById('monthTabs');
  const topicEl = document.getElementById('currTopic');
  const listEl = document.getElementById('currList');

  /* ── 날짜 기준 초기 월 자동 설정 ── */
  function getInitialMonth() {
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth() + 1; // 1~12
    var d = now.getDate();

    if (y !== 2026) return 1;                                         // 2026년 외 기본값
    if (mo < 5 || (mo === 5 && d <= 10)) return 1;  // ~5/10
    if ((mo === 5 && d >= 11) || (mo === 6 && d <= 7)) return 2;  // 5/11~6/7
    if ((mo === 6 && d >= 8) || (mo === 7 && d <= 5)) return 3;  // 6/8~7/5
    if (mo === 7 && d >= 6 && d <= 31) return 4;  // 7/6~7/31
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
    if (session.date) infoParts.push('<span class="curr-session-date">📅 ' + session.date + '</span>');
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
  var currHeader = document.querySelector('.curr-header');
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
