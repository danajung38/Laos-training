/**
 * ================================================================
 *  SCHEDULE DATA  —  캘린더 일정은 이 파일만 수정하세요
 * ================================================================
 *
 *  [ 모듈 띠 (module) ]
 *    type  : 'module'
 *    start : 시작일 'YYYY-MM-DD'  (보통 월요일)
 *    end   : 종료일 'YYYY-MM-DD'  (보통 목요일)
 *    label : 캘린더에 표시될 텍스트
 *    color : (선택) 띠 색상, 기본값 '#bdd7f5'
 *
 *  [ 필드트립 (fieldtrip) ]
 *    type  : 'fieldtrip'
 *    date  : 날짜 'YYYY-MM-DD'
 *    label : 표시될 텍스트 (기본값 'Field Trip')
 *
 * ================================================================
 */

const SCHEDULE_DATA = [

  // ── 3월 ──────────────────────────────────────────────────────
  { type: 'module',    start: '2026-03-23', end: '2026-03-26', label: 'Orientation' },

  // ── 4월 ──────────────────────────────────────────────────────
  /* 2째주 */
  { type: 'module',    start: '2026-04-13', end: '2026-04-16', label: 'M1(Week1): 기회발견' },
  { type: 'fieldtrip', date:  '2026-04-16', label: 'Field Trip' },
   
  /* 3째주 */
  { type: 'module',    start: '2026-04-20', end: '2026-04-23', label: 'M1(Week2): 기회발견' },
  { type: 'fieldtrip', date:  '2026-04-23', label: 'Field Trip' },

  /* 4째주 */

  // ── 5월 ──────────────────────────────────────────────────────
  /* 1째주 */
  { type: 'module',    start: '2026-05-04', end: '2026-05-07', label: 'M2(Week1): 모듈명' },
  { type: 'fieldtrip', date:  '2026-05-07', label: 'Field Trip' },

  /* 2째주 */
  { type: 'module',    start: '2026-05-11', end: '2026-05-14', label: 'M2(Week2): 모듈명' },
  { type: 'fieldtrip', date:  '2026-05-14', label: 'Field Trip' },
  /* 3째주 */
  /* 4째주 */
  /* 5째주 */

  // ── 6월 ──────────────────────────────────────────────────────
  /* 1째주 */
  { type: 'module',    start: '2026-06-01', end: '2026-06-04', label: 'M3(Week1): 모듈명' },
  { type: 'fieldtrip', date:  '2026-06-04', label: 'Field Trip' },

  /* 2째주 */
  { type: 'module',    start: '2026-06-08', end: '2026-06-11', label: 'M3(Week2): 모듈명' },
  { type: 'fieldtrip', date:  '2026-06-11', label: 'Field Trip' },

  /* 3째주 */
  /* 4째주 */

  // ── 7월 ──────────────────────────────────────────────────────
  { type: 'module',    start: '2026-07-06', end: '2026-07-09', label: 'M4(Week1): 모듈명' },
  { type: 'fieldtrip', date:  '2026-07-09', label: 'Field Trip' },

  { type: 'module',    start: '2026-07-13', end: '2026-07-16', label: 'M4(Week2): 모듈명' },
  { type: 'fieldtrip', date:  '2026-07-16', label: 'Field Trip' },

    /* 3째주 */
  /* 4째주 */
  // ── 8월 ──────────────────────────────────────────────────────


];
