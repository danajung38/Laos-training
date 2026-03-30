/**
 * ================================================================
 *  ANNOUNCEMENTS DATA  —  공지사항은 이 파일만 수정하세요
 * ================================================================
 *
 *  각 공지사항 항목:
 *    id      : 고유 번호 (겹치지 않게 순서대로)
 *    icon    : 아이콘 이미지 파일명 (images/ 폴더 기준)
 *              새 공지 →  'icon_announce.png'
 *              읽은/과거 공지 → 'icon_announced.png'
 *    emoji   : 모달 상단에 표시되는 이모지 (예: '📢', '📌', '🎉')
 *    title   : 공지 제목
 *    date    : 날짜 (예: 'March 27, 2026')
 *    author  : 작성자
 *    content : 본문 내용 (클릭 시 모달에 표시됨)
 *              줄바꿈은 \n 사용
 *
 *  ※ 목록에서 위에 있는 항목이 먼저 표시됩니다.
 * ================================================================
 */

const ANNOUNCEMENTS_DATA = [

  {
    id: 1,
    icon: 'icon_announce.png',
    emoji: '📢',
    title: 'Welcome to the Lao-Korea Entrepreneurship Bridge!',
    date: 'March 25, 2026',
    author: 'Program Administrator',
    content: `Welcome to the Lao-Korea Entrepreneurship Bridge Program!\n\nWe are thrilled to have you join us for this exciting journey. Over the coming weeks, you will engage in hands-on modules, field trips, and collaborative workshops designed to strengthen your entrepreneurial skills.\n\nPlease make sure to review the program schedule and contact your coordinator if you have any questions. We look forward to an inspiring and productive program together.`,
  },

  {
    id: 2,
    icon: 'icon_announce.png',
    emoji: '📢',
    title: 'Pre-Program Reading Material Available',
    date: 'March 25, 2026',
    author: 'Program Administrator',
    content: `Pre-program reading materials are now available for download on the student portal.\n\nPlease review the following materials before the first session:\n- Introduction to Social Entrepreneurship\n- Lao Business Environment Overview\n- Korea-Lao Economic Relations Report\n\nCompleting the readings will help you get the most out of the upcoming lectures and discussions.`,
  },

  {
    id: 3,
    icon: 'icon_announced.png',
    emoji: '📢',
    title: 'Full Program Calendar Published',
    date: 'March 25, 2026',
    author: 'Program Administrator',
    content: `The full program calendar for April through August 2026 has been published.\n\nKey dates to note:\n- April 13–16: Module 1, Week 1 — 기회발견 (Opportunity Discovery)\n- April 20–23: Module 1, Week 2 — 기회발견\n- Field trips are scheduled every Thursday during module weeks.\n\nPlease check the calendar on the dashboard regularly for any updates or changes.`,
  },

];
