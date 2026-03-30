/**
 * ================================================================
 *  notifications.js — Notifications 페이지 렌더링 로직
 * ================================================================
 *
 *  데이터 소스: announcements.js 의 ANNOUNCEMENTS_DATA
 *  페이지당 표시 개수: ITEMS_PER_PAGE
 * ================================================================
 */

(function () {
  'use strict';

  const ITEMS_PER_PAGE = 4;
  let currentPage = 1;

  const listEl       = document.getElementById('notifList');
  const paginationEl = document.getElementById('notifPagination');
  const countEl      = document.getElementById('notifCount');

  /* ── 모달 요소 ── */
  const backdrop = document.getElementById('annModalBackdrop');
  const modalIcon  = document.getElementById('annModalIcon');
  const modalTitle = document.getElementById('annModalTitle');
  const modalMeta  = document.getElementById('annModalMeta');
  const modalBody  = document.getElementById('annModalBody');
  const modalClose = document.getElementById('annModalClose');

  /* ── 모달 열기 ── */
  function openModal(item) {
    modalIcon.textContent  = item.emoji || '📢';
    modalTitle.textContent = item.title;
    modalMeta.textContent  = item.date + (item.author ? '  ·  ' + item.author : '');
    modalBody.innerHTML = item.content
      .split('\n')
      .map(function (line) { return '<p>' + (line || '&nbsp;') + '</p>'; })
      .join('');
    backdrop.classList.add('ann-modal-open');
  }

  /* ── 모달 닫기 ── */
  function closeModal() {
    backdrop.classList.remove('ann-modal-open');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (backdrop)   backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ── 카드 목록 렌더링 ── */
  function renderList(page) {
    const data  = ANNOUNCEMENTS_DATA;
    const total = data.length;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const items = data.slice(start, start + ITEMS_PER_PAGE);

    /* 총 개수 텍스트 */
    if (countEl) countEl.textContent = total + ' announcement' + (total !== 1 ? 's' : '');

    /* 카드 목록 */
    listEl.innerHTML = '';
    items.forEach(function (item) {
      const li = document.createElement('li');
      li.className = 'notif-card';
      var iconFile = item.icon || 'icon_announce.png';
      li.innerHTML =
        '<div class="notif-icon-box">' +
          '<img src="images/' + iconFile + '" alt="announcement icon">' +
        '</div>' +
        '<div class="notif-card-body">' +
          '<p class="notif-card-title">' + item.title + '</p>' +
          '<p class="notif-card-meta">' + item.date +
            (item.author ? '  ·  ' + item.author : '') + '</p>' +
        '</div>';
      li.addEventListener('click', function () { openModal(item); });
      listEl.appendChild(li);
    });

    /* 페이지네이션 */
    renderPagination(page, Math.ceil(total / ITEMS_PER_PAGE));
  }

  /* ── 페이지네이션 버튼 렌더링 ── */
  function renderPagination(current, totalPages) {
    paginationEl.innerHTML = '';
    if (totalPages <= 1) return;

    for (var p = 1; p <= totalPages; p++) {
      (function (pageNum) {
        var btn = document.createElement('button');
        btn.className = 'notif-page-btn' + (pageNum === current ? ' active' : '');
        btn.textContent = pageNum;
        btn.addEventListener('click', function () {
          currentPage = pageNum;
          renderList(currentPage);
          /* 스크롤 상단으로 */
          var content = document.querySelector('.notif-content');
          if (content) content.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationEl.appendChild(btn);
      })(p);
    }
  }

  /* ── 초기 렌더 ── */
  renderList(currentPage);

})();
