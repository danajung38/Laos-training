/**
 * ================================================================
 *  TIMETABLE DATA  —  타임테이블 일정은 이 파일만 수정하세요
 * ================================================================
 *
 *  date  : 'YYYY-MM-DD' 형식의 날짜
 *  items : 해당 날의 일정 배열
 *    - time  : 시간대 (예: '09:30 - 10:30')
 *    - event : 일정명 (예: 'PEV Lecture')
 *
 *  ※ 오늘/내일 날짜와 일치하는 항목이 자동으로 표시됩니다.
 *    일치하는 날짜가 없으면 해당 섹션은 빈 상태로 표시됩니다.
 * ================================================================
 */

const TIMETABLE_DATA = [

  {
    date: '2026-04-09',
    items: [
      { time: '09:00 - 10:00', event: 'Orientation' },
    ]
  },
  {
    date: '2026-04-10',
    items: [
      { time: '10:00 - 11:30', event: 'Guest Lecture' },
    ]
  },
  {
    date: '2026-04-28',
    items: [
      { time: '08:00', event: 'Arrive in Korea🛬' },
    ]
  },
  {
    date: '2026-04-29',
    items: [
      { time: '10:30', event: 'PEV Lecture' },
      { time: '12:00', event: 'Welcome Lunch' },
      { time: '13:00', event: 'Campus Tour' }
    ]
  },
    {
    date: '2026-04-30',
    items: [
      { time: '10:45', event: 'Guest Lecture' },
      { time: '14:00', event: 'Project' }
    ]
  },
      {
    date: '2026-05-04',
    items: [
      { time: '10:00', event: 'Project Worshop' },
      { time: '13:30', event: 'Project Workshop' }
    ]
  },
      {
    date: '2026-05-06',
    items: [
      { time: '10:00', event: 'Project Worshop' },
      { time: '13:30', event: 'Project Workshop' }
    ]
  },
   {
    date: '2026-05-07',
    items: [
      { time: '09:40', event: 'Cultural Trip' },
    ]
  },
   {
    date: '2026-05-11',
    items: [
      { time: '14:00', event: 'PEV Lecture' },
    ]
  },
     {
    date: '2026-05-12',
    items: [
      { time: '10:00', event: 'Guest Lecture' },
    ]
  },
    {
    date: '2026-05-14',
    items: [
      { time: '10:00', event: 'Project' },
    ]
  },
  {
    date: '2026-05-15',
    items: [
      { time: '10:00', event: 'PEV Lecture' },
    ]
  },

  // 날짜를 추가하려면 아래처럼 항목을 복사해서 붙여넣으세요:
  // {
  //   date: 'YYYY-MM-DD',
  //   items: [
  //     { time: '09:00 - 10:00', event: '일정명' },
  //   ]
  // },

];
