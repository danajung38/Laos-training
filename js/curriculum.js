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
 *  - sessions   : 세션 배열 (강의 / 특강 / 필드트립 / 문화체험)
 *      - type       : 'lecture' | 'special' | 'fieldtrip' | 'culture'
 *      - title      : 세션 제목
 *      - desc       : 간단한 설명
 *      - date       : (선택) 세션 날짜, 예: 'Apr 13, 2026'
 *      - instructor : (선택) 이 세션의 강사 이름 (없으면 week의 professor 표시)
 *      - guest      : (선택) 특강 초청 강사명
 *      - location   : (선택) 필드트립/문화체험 장소
 * ================================================================
 */

const CURRICULUM_DATA = {
  1: {
    topic: '기회발견 (Opportunity Discovery)',
    weeks: [
      {
        week: 1,
        title: 'Chapter 1. 기업가정신 및 시장의 기회발굴',
        dates: 'Apr 13–17, 2026',
        tags: ['#Entrepreneurship', '#MarketResearch', '#Opportunity'],

        sessions: [
          {
            type: 'lecture',
            date: 'Apr 14',
            title: '기업가정신의 이해',
            instructor: 'Prof. Woojin Lee',
            desc: '기업가정신의 핵심 개념과 라오스-한국 창업 생태계 현황을 살펴봅니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: '시장 기회 발굴 프레임워크',
            desc: 'Jobs-to-be-Done 이론과 Pain Point 분석 방법론을 실습합니다.',
          },
          {
            type: 'special',
            date: '',
            title: '라오스 스타트업 생태계 현황',
            instructor: 'Ms. Suhyun Na',
            desc: '라오스 스타트업 생태계의 최신 동향과 지원 프로그램을 소개합니다.',
          },
          {
            type: 'culture',
            date: '',
            title: '비엔티안 전통 시장 탐방',
            location: 'Talat Sao Morning Market, Vientiane',
            desc: '현지 시장을 방문하여 소비자 행동을 직접 관찰하고 인사이트를 도출합니다.',
          },
        ],
      },
      {
        week: 2,
        title: 'Chapter 2. 고객 인터뷰 및 문제 정의',
        dates: 'Apr 20–24, 2026',
        tags: ['#CustomerInterview', '#ProblemStatement', '#Empathy'],
        professor: 'Prof. Lee Ji-hyun',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '고객 발굴 인터뷰 기법',
            desc: 'Mom Test 방법론을 활용한 구조화된 인터뷰 설계 및 실습.',
          },
          {
            type: 'lecture',
            date: '',
            title: '공감 지도(Empathy Map) 작성',
            desc: '인터뷰 결과를 공감 지도로 정리하고 핵심 문제를 정의합니다.',
          },
          {
            type: 'special',
            date: '',
            title: '디자인 씽킹 워크숍',
            guest: 'Ms. Choi Yeon-ji (IDEO 출신)',
            desc: '디자인 씽킹 5단계 프로세스를 팀 프로젝트에 적용하는 집중 워크숍.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '현지 소비자 인터뷰 실습',
            location: '비엔티안 대학교 캠퍼스 일대',
            desc: '팀별 5명 이상의 타깃 고객 인터뷰를 직접 수행하고 결과를 공유합니다.',
          },
        ],
      },
      {
        week: 3,
        title: 'Chapter 3. 비즈니스 모델 캔버스',
        dates: 'Apr 27 – May 1, 2026',
        tags: ['#BMC', '#BusinessModel', '#ValueProposition'],
        professor: 'Prof. Park Dong-hyun',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: 'Business Model Canvas 9블록 이해',
            desc: 'BMC의 9가지 구성요소를 사례 분석을 통해 심층적으로 이해합니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: '가치 제안 설계 (Value Proposition Design)',
            desc: '고객 프로필과 가치 맵을 작성하여 제품-시장 적합성을 검증합니다.',
          },
          {
            type: 'special',
            date: '',
            title: '성공한 라오스 창업가 토크',
            guest: 'Mr. Khampheng Inthavong (Lao Farmer)',
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
        title: 'Chapter 4. MVP 설계 및 프로토타입',
        dates: 'May 4–8, 2026',
        tags: ['#MVP', '#Prototype', '#LeanStartup'],
        professor: 'Prof. Kim Soo-jin',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: 'Lean Startup과 MVP 개념',
            desc: '최소기능제품(MVP)의 개념과 빠른 검증 사이클(Build-Measure-Learn)을 배웁니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: '프로토타입 제작 실습',
            desc: 'Figma 또는 종이 프로토타입을 활용한 빠른 UI 설계 실습.',
          },
          {
            type: 'special',
            date: '',
            title: '투자자 관점의 MVP 평가',
            guest: 'Mr. Song Hyun-woo (KDB 산업은행 벤처캐피털)',
            desc: '투자자가 초기 스타트업 MVP를 평가하는 기준과 관점을 공유합니다.',
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
    topic: '시장 검증 (Market Validation)',
    weeks: [
      {
        week: 5,
        title: 'Chapter 5. 사용자 테스트 및 피드백 수집',
        dates: 'May 11–15, 2026',
        tags: ['#UserTesting', '#Feedback', '#Iteration'],
        professor: 'Prof. Lee Ji-hyun',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '사용자 테스트 방법론',
            desc: '사용성 테스트 설계, 관찰 기록, Think-Aloud 기법을 실습합니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: '피드백 분류 및 우선순위 설정',
            desc: '수집된 피드백을 Affinity Diagram으로 분류하고 다음 이터레이션을 계획합니다.',
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
        title: 'Chapter 6. 경쟁 분석 및 포지셔닝',
        dates: 'May 18–22, 2026',
        tags: ['#Competitive', '#Positioning', '#Differentiation'],
        professor: 'Prof. Park Dong-hyun',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '경쟁 환경 분석 (Porter의 5 Forces)',
            desc: '산업 구조 분석 프레임워크를 라오스 시장에 적용하는 실습.',
          },
          {
            type: 'lecture',
            date: '',
            title: '포지셔닝 맵 작성',
            desc: '핵심 속성을 기반으로 경쟁자 대비 자사 포지셔닝 맵을 그립니다.',
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
        title: 'Chapter 7. 재무 계획 기초',
        dates: 'May 25–29, 2026',
        tags: ['#Finance', '#CostStructure', '#Revenue'],
        professor: 'Prof. Jung Min-ho',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '스타트업 재무 기초',
            desc: '손익계산서, 현금흐름표, 재무상태표의 기본 개념과 스타트업 적용법.',
          },
          {
            type: 'lecture',
            date: '',
            title: '가격 전략과 수익 모델 설계',
            desc: '고객 지불 의향(WTP) 조사를 기반으로 최적 가격 전략을 도출합니다.',
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
        title: 'Chapter 8. 월간 피칭 & 피드백',
        dates: 'Jun 1–5, 2026',
        tags: ['#Pitching', '#PublicSpeaking', '#Mentorship'],
        professor: 'Prof. Lee Ji-hyun',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '투자 유치 피치덱 구성법',
            desc: '문제-해결책-시장-팀-재무 5가지 핵심 스토리라인으로 피치덱을 작성합니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: '발표 스킬 & 스토리텔링',
            desc: '효과적인 청중 설득을 위한 발표 구조와 비언어 커뮤니케이션 훈련.',
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
    topic: '성장 전략 (Growth Strategy)',
    weeks: [
      {
        week: 9,
        title: 'Chapter 9. 마케팅 및 고객 획득 전략',
        dates: 'Jun 8–12, 2026',
        tags: ['#Marketing', '#CAC', '#GrowthHacking'],
        professor: 'Prof. Choi Hyun-sik',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '디지털 마케팅 채널 전략',
            desc: 'SNS, SEO, 콘텐츠 마케팅을 라오스 디지털 환경에 맞게 설계합니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: 'Growth Hacking 실험 설계',
            desc: 'A/B 테스트, 바이럴 루프, 리텐션 개선 실험을 직접 설계하고 실행합니다.',
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
        title: 'Chapter 10. 파트너십 및 네트워킹',
        dates: 'Jun 15–19, 2026',
        tags: ['#Partnership', '#Networking', '#EcosystemBuilding'],
        professor: 'Prof. Park Dong-hyun',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '전략적 파트너십 설계',
            desc: '파트너십의 유형(기술/유통/자본)과 계약 구조 기초를 배웁니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: '네트워킹 스킬과 관계 구축',
            desc: '엘리베이터 피치, 비즈니스 명함 문화, 후속 연락 전략을 실습합니다.',
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
        title: 'Chapter 11. 스케일업 전략',
        dates: 'Jun 22–26, 2026',
        tags: ['#ScaleUp', '#Operations', '#SystemsThinking'],
        professor: 'Prof. Jung Min-ho',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '운영 프로세스 설계와 자동화',
            desc: '핵심 운영 프로세스를 매핑하고 자동화 가능한 부분을 식별합니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: '팀 빌딩과 조직 문화',
            desc: '성장 단계별 채용 전략과 스타트업 조직 문화 구축 방법론.',
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
        title: 'Chapter 12. 투자자 관계 및 펀딩 전략',
        dates: 'Jun 29 – Jul 3, 2026',
        tags: ['#Investment', '#Funding', '#InvestorRelations'],
        professor: 'Prof. Choi Hyun-sik',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '스타트업 펀딩 라이프사이클',
            desc: 'Pre-seed부터 Series A까지 단계별 펀딩 전략과 투자자 유형을 이해합니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: 'Term Sheet 읽기와 협상',
            desc: '투자 계약서의 핵심 조항(Valuation, Dilution, Liquidation Preference)을 해석합니다.',
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
    topic: '최종 발표 및 런칭 (Demo Day & Launch)',
    weeks: [
      {
        week: 13,
        title: 'Chapter 13. 최종 피치덱 준비',
        dates: 'Jul 6–10, 2026',
        tags: ['#PitchDeck', '#Storytelling', '#Design'],
        professor: 'Prof. Lee Ji-hyun',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '최종 피치덱 10슬라이드 구성',
            desc: '투자자용 10슬라이드 피치덱의 구조, 디자인 원칙, 핵심 메시지 작성법.',
          },
          {
            type: 'lecture',
            date: '',
            title: '스토리텔링으로 숫자 전달하기',
            desc: '재무 데이터와 트랙션 지표를 설득력 있는 이야기로 풀어내는 기술.',
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
        title: 'Chapter 14. 런칭 준비 및 Go-to-Market',
        dates: 'Jul 13–17, 2026',
        tags: ['#GoToMarket', '#Launch', '#PR'],
        professor: 'Prof. Choi Hyun-sik',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: 'Go-to-Market 플랜 작성',
            desc: '런칭 타임라인, 채널 전략, 초기 고객 확보 계획을 구체화합니다.',
          },
          {
            type: 'lecture',
            date: '',
            title: 'PR & 미디어 전략',
            desc: '보도자료 작성, 미디어 리스트 관리, 소셜미디어 런칭 콘텐츠 기획.',
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
        title: 'Chapter 15. Demo Day 리허설',
        dates: 'Jul 20–24, 2026',
        tags: ['#DemoDay', '#Rehearsal', '#PublicPresentation'],
        professor: 'Prof. Kim Soo-jin',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '무대 발표 & 라이브 데모 기술',
            desc: '7분 피치 구성과 라이브 제품 시연 시 주의사항 및 백업 플랜 준비.',
          },
          {
            type: 'lecture',
            date: '',
            title: '심사위원 Q&A 대비',
            desc: '예상 질문 리스트 작성 및 팀 전원이 답변 가능하도록 롤플레이 훈련.',
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
        title: 'Chapter 16. 최종 Demo Day 🎉',
        dates: 'Jul 27–31, 2026',
        tags: ['#DemoDay', '#Graduation', '#Celebration'],
        professor: '전체 교수진',
        sessions: [
          {
            type: 'lecture',
            date: '',
            title: '최종 발표 오리엔테이션',
            desc: '당일 행사 일정 안내, 최종 Q&A, 발표 순서 추첨.',
          },
          {
            type: 'fieldtrip',
            date: '',
            title: '최종 Demo Day 본행사',
            location: '비엔티안 힐튼 호텔 그랜드볼룸',
            desc: '투자자, 정부 관계자, 미디어 앞에서 최종 벤처 피칭 및 시상식.',
          },
          {
            type: 'culture',
            date: '',
            title: '수료식 & 갈라 디너',
            location: '비엔티안 힐튼 호텔',
            desc: '프로그램 수료를 축하하는 공식 만찬. 한국-라오스 전통 공연 포함.',
          },
          {
            type: 'culture',
            date: '',
            title: '졸업 기념 메콩강 선셋 크루즈',
            location: '메콩강, 비엔티안',
            desc: '프로그램의 마지막을 메콩강 선셋 크루즈로 마무리하며 팀 및 멘토와 석별의 시간.',
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
  lecture:   { label: 'Lecture',    color: '#ffffff', bg: '#1a3a6b' },  /* 진한 네이비 + 흰 글씨 */
  special:   { label: 'Special Lecture',    color: '#ffffff', bg: '#7c3aed' },  /* 보라 + 흰 글씨 */
  fieldtrip: { label: 'Field Trip', color: '#ffffff', bg: '#16803c' },  /* 초록 + 흰 글씨 */
  culture:   { label: 'Cultural Trip', color: '#ffffff', bg: '#ff8e60' },  /* 오렌지 + 흰 글씨 */
};

/* ================================================================
   렌더링 로직
   ================================================================ */
(function () {
  'use strict';

  const tabsEl  = document.getElementById('monthTabs');
  const topicEl = document.getElementById('currTopic');
  const listEl  = document.getElementById('currList');

  let activeMonth = 1;

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
  function buildSessionHTML(session, professor) {
    var cfg = SESSION_TYPE_CONFIG[session.type] || SESSION_TYPE_CONFIG.lecture;
    var badge =
      '<span class="curr-session-badge" style="color:' + cfg.color + ';background:' + cfg.bg + ';">' +
        cfg.label +
      '</span>';
    var instructorName = session.instructor || professor || '';
    var sub = '';
    if (session.location) sub = '<span class="curr-session-sub">📍 ' + session.location + '</span>';

return (
      '<li class="curr-session-item">' +
        '<div class="curr-session-top">' +
          badge +
          '<span class="curr-session-title">' + session.title + '</span>' +
          (instructorName ? '<span class="curr-session-instructor">👤 ' + instructorName + '</span>' : '') +
        '</div>' +
        (session.date ? '<div class="curr-session-date">📅 ' + session.date + '</div>' : '') +
        (sub ? '<div>' + sub + '</div>' : '') +
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
        return buildSessionHTML(s, item.professor);
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

})();
