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
  { type: 'module', start: '2026-04-13', end: '2026-04-17', label: 'Week 1: 기회발견' },
  { type: 'event', date: '2026-04-14', label: 'Orientation' },
  { type: 'culturaltour', date: '2026-04-17', label: 'Cultural Tour' },

  /* 3째주 */
  { type: 'module', start: '2026-04-20', end: '2026-04-23', label: 'Week 2: 기회발견' },
  { type: 'fieldtrip', date: '2026-04-23', label: 'Field Trip' },

  /* 4째주 */
  { type: 'module', start: '2026-04-27', end: '2026-04-30', label: 'Week 3: 기회발견' },
  { type: 'fieldtrip', date: '2026-04-23', label: 'Field Trip' },

  // ── 5월 ──────────────────────────────────────────────────────
  /* 1째주 */
  { type: 'module', start: '2026-05-04', end: '2026-05-07', label: 'Week 4: 모듈명' },
  { type: 'fieldtrip', date: '2026-05-07', label: 'Field Trip' },

  /* 2째주 */
  { type: 'module', start: '2026-05-11', end: '2026-05-14', label: 'Week 5: 모듈명', color: '#FFD9B1' },
  { type: 'fieldtrip', date: '2026-05-14', label: 'Field Trip' },
  /* 3째주 */
    { type: 'module', start: '2026-05-18', end: '2026-05-21', label: 'Week 6: 모듈명', color: '#FFD9B1' },
  { type: 'fieldtrip', date: '2026-05-14', label: 'Field Trip' },
  /* 4째주 */
      { type: 'module', start: '2026-05-25', end: '2026-05-28', label: 'Week 7: 모듈명', color: '#FFD9B1' },
  { type: 'fieldtrip', date: '2026-05-14', label: 'Field Trip' },

  // ── 6월 ──────────────────────────────────────────────────────
  /* 1째주 */
  { type: 'module', start: '2026-06-01', end: '2026-06-04', label: 'Week 8: 모듈명', color: '#FFD9B1' },
  { type: 'fieldtrip', date: '2026-06-04', label: 'Field Trip' },

  /* 2째주 */
  { type: 'module', start: '2026-06-08', end: '2026-06-11', label: 'Week 9: 모듈명', color:'#EADBFF' },
  { type: 'fieldtrip', date: '2026-06-11', label: 'Field Trip' },

  /* 3째주 */
    { type: 'module', start: '2026-06-15', end: '2026-06-18', label: 'Week 10: 모듈명', color:'#EADBFF' },
  { type: 'fieldtrip', date: '2026-06-11', label: 'Field Trip' },

  /* 4째주 */
    { type: 'module', start: '2026-06-22', end: '2026-06-25', label: 'Week 11: 모듈명', color:'#EADBFF' },
  { type: 'fieldtrip', date: '2026-06-11', label: 'Field Trip' },

  /* 5째주 */
    { type: 'module', start: '2026-06-29', end: '2026-07-02', label: 'Week 12: 모듈명' , color:'#EADBFF'},
  { type: 'fieldtrip', date: '2026-06-11', label: 'Field Trip' },

  // ── 7월 ──────────────────────────────────────────────────────

  /* 2째주 */
  { type: 'module', start: '2026-07-06', end: '2026-07-09', label: 'Week 13: 모듈명' },
  { type: 'fieldtrip', date: '2026-07-16', label: 'Field Trip'},

  /* 3째주 */
    { type: 'module', start: '2026-07-13', end: '2026-07-16', label: 'Week 14: 모듈명' },
  { type: 'fieldtrip', date: '2026-07-16', label: 'Field Trip'},
  
  /* 4째주 */
    { type: 'module', start: '2026-07-20', end: '2026-07-23', label: 'Week 15: 모듈명' },
  { type: 'fieldtrip', date: '2026-07-16', label: 'Field Trip'},

   /* 5째주 */
    { type: 'module', start: '2026-07-27', end: '2026-07-30', label: 'Week 16: Final Presentation' },

  // ── 8월 ──────────────────────────────────────────────────────


];
