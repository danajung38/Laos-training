/**
 * ================================================================
 *  SCHEDULE DATA  —  캘린더 일정은 이 파일만 수정하세요
 * ================================================================
 *
 *  [ 모듈 띠 기본 색상 ]
 *    MODULE_DEFAULT_COLOR : 모든 모듈 띠에 공통 적용되는 색상
 *                           개별 항목에 color를 지정하면 그 값이 우선 적용됩니다.
 *
 *  [ 모듈 띠 (module) ]
 *    type  : 'module'
 *    start : 시작일 'YYYY-MM-DD'  (보통 월요일)
 *    end   : 종료일 'YYYY-MM-DD'  (보통 목요일)
 *    label : 캘린더에 표시될 텍스트
 *    color : (선택) 이 항목만 다른 색상으로 표시할 때 지정
 *
 *  [ 필드트립 (fieldtrip) ]
 *    type  : 'fieldtrip'
 *    date  : 날짜 'YYYY-MM-DD'
 *    label : 표시될 텍스트 (기본값 'Field Trip')
 *
 * [ 문화체험 (culturaltour) ]
 *    type  : 'culturaltour'
 *    date  : 날짜 'YYYY-MM-DD'
 *    label : 표시될 텍스트 (기본값 'Cultural Tour')
 *
 * [ 그 외 이벤트 (event) ]
 *    type  : 'event'
 *    date  : 날짜 'YYYY-MM-DD'
 *    label : 표시될 텍스트 (기본값 '___')
 * ================================================================
 */

/* ── 모듈 띠 기본 색상 (여기서 변경하세요) ── */
const MODULE_DEFAULT_COLOR = '#bdd7f5';

const SCHEDULE_DATA = [

  // ── 4월 ──────────────────────────────────────────────────────
  /* 2째주 */
  { type: 'module', start: '2026-04-10', end: '2026-04-17', label: 'Week 1: Becoming an Entrepreneur' },
  { type: 'event', date: '2026-04-09', label: 'Orientation' },


  /* 3째주 */
  { type: 'module', start: '2026-04-20', end: '2026-04-23', label: 'Week 2: Recognizing Opportunities' },

  /* 4째주 */
  { type: 'module', start: '2026-04-27', end: '2026-04-30', label: 'Week 3: Defining a Business Concept' },
   { type: 'event', date: '2026-04-28', label: 'Arrived in Korea🛬' },


  // ── 5월 ──────────────────────────────────────────────────────
  /* 1째주 */
  { type: 'module', start: '2026-05-04', end: '2026-05-07', label: 'Week 4: Project' },
  { type: 'culturaltour', date: '2026-05-07', label: 'Cultural Tour' },

  /* 2째주 */
  { type: 'module', start: '2026-05-11', end: '2026-05-14', label: 'Week 5: Model Feasibility checklist', color: '#FFD9B1' },
  // { type: 'fieldtrip', date: '2026-05-14', label: 'Field Trip' },

  /* 3째주 */
    { type: 'module', start: '2026-05-18', end: '2026-05-21', label: 'Week 6: Product/Service Planning', color: '#FFD9B1' },
  { type: 'fieldtrip', date: '2026-05-21', label: 'Field Trip' },

  /* 4째주 */
      { type: 'module', start: '2026-05-25', end: '2026-05-28', label: 'Week 7: Management & Organization Planning', color: '#FFD9B1' },
  { type: 'fieldtrip', date: '2026-05-28', label: 'Field Trip' },

  // ── 6월 ──────────────────────────────────────────────────────
  /* 1째주 */
  { type: 'module', start: '2026-06-01', end: '2026-06-04', label: 'Week 8: Project', color: '#FFD9B1' },
  { type: 'event', date: '2026-06-04', label: 'Workshop' },
  { type: 'event', date: '2026-06-05', label: 'Workshop' },

  /* 2째주 */
  { type: 'module', start: '2026-06-08', end: '2026-06-11', label: 'Week 9: Market Planning: Industry & Competition', color:'#EADBFF' },
  { type: 'fieldtrip', date: '2026-06-11', label: 'Field Trip' },

  /* 3째주 */
    { type: 'module', start: '2026-06-15', end: '2026-06-18', label: 'Week 10: Market Planning: Market Analysis', color:'#EADBFF' },
  { type: 'event', date: '2026-06-18', label: 'Workshop' },
  { type: 'event', date: '2026-06-19', label: 'Workshop' },
  { type: 'event', date: '2026-06-20', label: 'Workshop' },

  /* 4째주 */
    { type: 'module', start: '2026-06-22', end: '2026-06-25', label: 'Week 11: Market Planning: Penetration', color:'#EADBFF' },
  { type: 'fieldtrip', date: '2026-06-25', label: 'Field Trip' },

  /* 5째주 */
    { type: 'module', start: '2026-06-29', end: '2026-07-03', label: 'Week 12: Project' , color:'#EADBFF'},
  { type: 'fieldtrip', date: '2026-07-03', label: 'Field Trip' },

  // ── 7월 ──────────────────────────────────────────────────────

  /* 2째주 */
  { type: 'module', start: '2026-07-06', end: '2026-07-09', label: 'Week 13: Market Planning: Pricing ' },
  { type: 'fieldtrip', date: '2026-07-07', label: 'Field Trip'},

  /* 3째주 */
    { type: 'module', start: '2026-07-13', end: '2026-07-16', label: 'Week 14: Financial Planning' },
  { type: 'fieldtrip', date: '2026-07-13', label: 'Field Trip'},
  
  /* 4째주 */
    { type: 'module', start: '2026-07-20', end: '2026-07-23', label: 'Week 15: Finalizing the Business Plan' },

   /* 5째주 */
    { type: 'module', start: '2026-07-27', end: '2026-07-30', label: 'Week 16: Final Presentation' },

  // ── 8월 ──────────────────────────────────────────────────────


];
