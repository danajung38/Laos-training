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
    title: 'Online Sessions for Initial Training Schedule',
    date: 'April 7, 2026',
    author: 'Program Coordinator',
    content:
      `
    Dear Participants,
    Due to a slight delay in the arrival schedule to Korea, the first three sessions of the training program will be conducted online via Zoom. Please check the updated schedule below carefully, noting the time difference between Korea and Laos.

    Date,Session Title,Korea Time (KST),Laos Time (ICT),Speaker
Apr 9 (Thu),Orientation,11:00 ~ 12:00,09:00 ~ 10:00,"Woojin Lee, Byung-chul Choi"
Apr 10 (Fri),Guest Lecture,12:00 ~ 13:30,10:00 ~ 11:30,Soohyun Na
Apr 17 (Fri),PEV,10:00 ~ 11:00,08:00 ~ 09:00,Woojin Lee

    `,
  },



];
