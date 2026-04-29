/**
 * ================================================================
 *  ANNOUNCEMENTS DATA  —  공지사항 데이터 로더 (Notion 연동)
 * ================================================================
 *
 *  ※ 공지사항은 더 이상 이 파일에서 수정하지 않습니다.
 *    Notion 데이터베이스에서 추가/수정하면 GitHub Actions가
 *    data/announcements.json 파일을 자동으로 갱신합니다.
 *
 *  데이터 흐름:
 *    Notion DB
 *       ↓  (GitHub Actions: scripts/sync-announcements.js)
 *    data/announcements.json
 *       ↓  (이 파일이 fetch)
 *    window.ANNOUNCEMENTS_DATA  ← notifications.js / index.js 가 사용
 *
 *  Notion DB 속성:
 *    - Title       (Title)         : 공지 제목
 *    - Date        (Date)          : 공지 날짜
 *    - Author      (Rich text)     : 작성자 (비우면 'Program Coordinator')
 *    - Emoji       (Rich text)     : 모달 이모지 (비우면 '📢')
 *    - Status      (Select)        : 'New' 또는 'Read' (아이콘 결정)
 *    - Published   (Checkbox)      : 체크된 항목만 사이트에 노출
 *    - Order       (Number, 선택)  : 표시 순서 (없으면 Date 내림차순)
 *    본문 내용은 Notion 페이지 본문(블록)에 작성하세요.
 *
 *  최초 설정 가이드: NOTION_SETUP.md 참고
 * ================================================================
 */

(function () {
  'use strict';

  // 외부 코드(notifications.js, index.js)가 기다릴 수 있도록 Promise 노출
  // - 즉시 사용 가능한 빈 배열을 먼저 셋팅하고,
  // - fetch 가 끝나면 채워 넣은 뒤 'announcements:ready' 이벤트를 발행한다.
  window.ANNOUNCEMENTS_DATA = [];
  window.ANNOUNCEMENTS_READY = new Promise(function (resolve) {

    // GitHub Pages 환경에서 캐시 우회를 위해 쿼리 스트링을 붙인다.
    var url = 'data/announcements.json?t=' + Date.now();

    fetch(url, { cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load announcements.json: ' + res.status);
        return res.json();
      })
      .then(function (json) {
        var items = (json && Array.isArray(json.items)) ? json.items : [];
        // 안전장치: id 가 없으면 인덱스를 부여
        items.forEach(function (it, i) {
          if (typeof it.id === 'undefined' || it.id === null) it.id = i + 1;
          if (!it.icon)  it.icon  = 'icon_announce.png';
          if (!it.emoji) it.emoji = '📢';
        });
        window.ANNOUNCEMENTS_DATA = items;
        document.dispatchEvent(new CustomEvent('announcements:ready', { detail: items }));
        resolve(items);
      })
      .catch(function (err) {
        console.error('[announcements] load error:', err);
        window.ANNOUNCEMENTS_DATA = [];
        document.dispatchEvent(new CustomEvent('announcements:ready', { detail: [] }));
        resolve([]);
      });
  });
})();
