/* ── 공지사항 렌더 + 모달 (announcements.js 데이터 사용) ── */
(function () {
  const list    = document.getElementById('announcementList');
  const backdrop = document.getElementById('annModalBackdrop');
  const closeBtn = document.getElementById('annModalClose');
  if (!list || !backdrop) return;

  const data = (typeof ANNOUNCEMENTS_DATA !== 'undefined') ? ANNOUNCEMENTS_DATA : [];
  const recent = data.slice(0, 3); /* 최근 3개만 표시 */

  /* 목록 렌더 */
  list.innerHTML = recent.map(a => `
    <li class="announcement-item" data-id="${a.id}" style="cursor:pointer;">
      <span class="announcement-icon"><img src="images/${a.icon || 'icon_announce.png'}" alt="icon" style="width:36px;height:36px;object-fit:contain;"></span>
      <div style="flex:1;">
        <p class="announcement-title">${a.title}</p>
        <p class="announcement-meta">${a.date} · ${a.author}</p>
      </div>
      <span class="ann-chevron">›</span>
    </li>
  `).join('');

  /* 모달 열기 */
  list.addEventListener('click', function (e) {
    const item = e.target.closest('.announcement-item');
    if (!item) return;
    const id = parseInt(item.dataset.id, 10);
    const a  = data.find(d => d.id === id);
    if (!a) return;

    document.getElementById('annModalIcon').textContent  = a.emoji || '📢';
    document.getElementById('annModalTitle').textContent = a.title;
    document.getElementById('annModalMeta').textContent  = `${a.date} · ${a.author}`;
    document.getElementById('annModalBody').innerHTML    =
      a.content.split('\n').map(line => line ? `<p>${line}</p>` : '<br>').join('');

    backdrop.classList.add('ann-modal-open');
  });

  /* 모달 닫기 */
  function closeModal() { backdrop.classList.remove('ann-modal-open'); }
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
})();

/* ── 타임테이블 렌더 (timetable.js 데이터 사용) ── */
(function () {
  const body = document.getElementById('timetableBody');
  if (!body) return;

  const DAYS = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  const MONS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const data = (typeof TIMETABLE_DATA !== 'undefined') ? TIMETABLE_DATA : [];

  function toDateStr(d) {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  function labelFor(d) {
    return `${DAYS[d.getDay()]}, ${MONS[d.getMonth()]} ${d.getDate()}`;
  }

  function renderSection(title, dateObj, isFirst) {
    const ds = toDateStr(dateObj);
    const entry = data.find(e => e.date === ds);
    const items = entry ? entry.items : [];

    const gap = isFirst ? '' : '<div style="height:40px;flex-shrink:0;"></div>';
    const dateSpan = isFirst
      ? `<span class="timetable-date">${labelFor(dateObj)}</span>`
      : '';
    const listHtml = items.length
      ? `<ul class="timetable-list">${items.map(i => `
          <li class="timetable-item">
            <span class="timetable-bar"></span>
            <div class="timetable-card">
              <span class="time">${i.time}</span>
              <span class="event">${i.event}</span>
            </div>
          </li>`).join('')}</ul>`
      : `<p class="timetable-empty">No events scheduled.</p>`;

    return `${gap}
      <p class="timetable-section-label" style="margin-top:0;">${title} ${dateSpan}</p>
      ${listHtml}`;
  }

  const now      = new Date();
  const tomorrow = new Date(now); tomorrow.setDate(now.getDate() + 1);

  body.innerHTML = renderSection('Today', now, true) + renderSection('Tomorrow', tomorrow, false);
})();

/* ── 캘린더 위젯 (2026년 3월~8월) ── */
(function () {
  const MONTHS = [
    { num: 3,  name: 'MARCH'  },
    { num: 4,  name: 'APRIL'  },
    { num: 5,  name: 'MAY'    },
    { num: 6,  name: 'JUNE'   },
    { num: 7,  name: 'JULY'   },
    { num: 8,  name: 'AUGUST' }
  ];
  const DAY_NAMES = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const YEAR = 2026;

  // 오늘 날짜가 4~8월 범위 안이면 해당 월로 초기화, 아니면 4월(0)
  const _today = new Date();
  const _todayMonth = _today.getFullYear() === YEAR ? _today.getMonth() + 1 : 0;
  let idx = Math.max(0, MONTHS.findIndex(m => m.num === _todayMonth));

  function daysInMonth(m) {
    return new Date(YEAR, m, 0).getDate();
  }

  function firstWeekday(m) {
    return new Date(YEAR, m - 1, 1).getDay();
  }

  function render() {
    const widget = document.getElementById('calendarWidget');
    if (!widget) return;

    const m = MONTHS[idx];
    const total = daysInMonth(m.num);
    const start = firstWeekday(m.num);

    const today = new Date();
    const isThisMonth = today.getFullYear() === YEAR && today.getMonth() + 1 === m.num;

    /* 셀 배열 생성 */
    let cells = [];
    for (let i = 0; i < start; i++) cells.push(null);
    for (let d = 1; d <= total; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);

    /* 날짜 → 'YYYY-MM-DD' 변환 */
    const pad = n => String(n).padStart(2, '0');
    const toStr = d => d ? `${YEAR}-${pad(m.num)}-${pad(d)}` : null;

    /* 이번 달 스케줄 필터 */
    const events = (typeof SCHEDULE_DATA !== 'undefined' ? SCHEDULE_DATA : []);
    const monthStr = `${YEAR}-${pad(m.num)}`;
    const fieldtripMap = {};
    events.filter(e => (e.type === 'fieldtrip' || e.type === 'culturaltour' || e.type === 'event') && e.date.startsWith(monthStr))
          .forEach(e => {
            const label = e.label || (e.type === 'culturaltour' ? 'Cultural Tour' : e.type === 'event' ? 'Event' : 'Field Trip');
            fieldtripMap[e.date] = { type: e.type, label };
          });

    /* 행 생성 — 모든 이벤트를 셀 내부에 쌓음 */
    let rows = '';
    for (let i = 0; i < cells.length; i += 7) {
      const week    = cells.slice(i, i + 7);
      const wDates  = week.map(toStr);

      /* 이 주(week)에 해당하는 모듈 이벤트 */
      const weekMod = events.find(e =>
        e.type === 'module' &&
        wDates.some(ds => ds && ds >= e.start && ds <= e.end)
      );
      /* 이 주에서 띠의 첫 번째 / 마지막 컬럼 인덱스 */
      const firstBandCol = weekMod
        ? wDates.findIndex(ds => ds && ds >= weekMod.start && ds <= weekMod.end)
        : -1;
      const lastBandCol = weekMod
        ? wDates.reduce((last, ds, j) =>
            (ds && ds >= weekMod.start && ds <= weekMod.end) ? j : last, -1)
        : -1;

      rows += '<tr>';
      for (let j = 0; j < 7; j++) {
        const d  = week[j];
        const ds = wDates[j];

        let cls = 'cal-cell';
        if (!d) cls += ' cal-cell-empty';
        else if (isThisMonth && d === today.getDate()) cls += ' cal-cell-today';

        const ft     = ds && fieldtripMap[ds];
        const inBand = weekMod && ds && ds >= weekMod.start && ds <= weekMod.end;
        const isFirst = inBand && j === firstBandCol;
        const isLast  = inBand && (j === 6 || !wDates[j + 1] || wDates[j + 1] > weekMod.end);

        let bandHtml = '';
        if (inBand) {
          let bCls = 'cal-band';
          if (isFirst && isLast) bCls += ' cal-band-solo';
          else if (isFirst)      bCls += ' cal-band-start';
          else if (isLast)       bCls += ' cal-band-end';
          else                   bCls += ' cal-band-cont';

          const bandColor = weekMod.color || (typeof MODULE_DEFAULT_COLOR !== 'undefined' ? MODULE_DEFAULT_COLOR : '');
          const bStyle = bandColor ? ` style="background:${bandColor}"` : '';
          /* 시작 셀: span 개수를 data 속성으로 저장, label 포함 */
          const spanCount = isFirst ? (lastBandCol - firstBandCol + 1) : 0;
          const label = isFirst
            ? `<span class="cal-band-label">${weekMod.label}</span>`
            : '';
          bandHtml = `<div class="${bCls}"${bStyle} data-span="${spanCount}">${label}</div>`;
        }

        /* 시작 셀에 z-index 클래스 추가 (label이 이웃 셀 위에 렌더되도록) */
        if (isFirst) cls += ' cal-cell-band-first';

        rows += `<td class="${cls}"><div class="cal-cell-inner">
          ${d != null ? `<span class="cal-date-num">${d}</span>` : ''}
          ${bandHtml}
          ${ft ? `<span class="cal-event-tag cal-event-${ft.type}">• ${ft.label}</span>` : ''}
        </div></td>`;
      }
      rows += '</tr>';
    }

    widget.innerHTML = `
      <div class="cal-header-new">
        <button class="cal-nav-new${idx === 0 ? ' cal-nav-disabled' : ''}" id="calPrev">&#8249;</button>
        <span class="cal-month-label"><em>${m.num}</em>${m.name}</span>
        <button class="cal-nav-new${idx === MONTHS.length - 1 ? ' cal-nav-disabled' : ''}" id="calNext">&#8250;</button>
      </div>
      <div class="cal-body-new">
        <table class="calendar-grid-new">
          <thead><tr>${DAY_NAMES.map(d => `<th class="cal-day-name">${d}</th>`).join('')}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;

    /* 렌더 후: 레이블 너비를 실제 span 픽셀로 설정 */
    function sizeBandLabels() {
      widget.querySelectorAll('.cal-band[data-span]').forEach(function (band) {
        const span = parseInt(band.dataset.span, 10);
        if (!span) return;
        const tdW = band.closest('td').offsetWidth;
        const label = band.querySelector('.cal-band-label');
        if (label) label.style.width = (span * tdW - 16) + 'px';
      });
    }
    sizeBandLabels();
    window.addEventListener('resize', sizeBandLabels);

    document.getElementById('calPrev').addEventListener('click', function () {
      if (idx > 0) { idx--; render(); }
    });
    document.getElementById('calNext').addEventListener('click', function () {
      if (idx < MONTHS.length - 1) { idx++; render(); }
    });
  }

  render();
})();

/* ── 슬라이드 + 스크롤 애니메이션 ── */
(function () {
  const PEEK_PX        = 120;  // hero peek 높이 (px)
  const HERO_VH        = 0.50; // hero 높이 비율 (데스크톱)
  const HERO_VH_MOBILE = 0.52; // hero 높이 비율 (모바일)
  const OVERLAP_PX        = 24;  // content-wrapper 겹침 (데스크톱)
  const OVERLAP_PX_MOBILE = 80;  // content-wrapper 겹침 (모바일 — 더 많이 가림)
  const LERP       = 0.12; // lerp 계수 (낮을수록 더 부드럽고 느림)

  const content  = document.querySelector('.content-wrapper');
  const scroller = document.querySelector('.content-scroll');
  const hero     = document.querySelector('.hero');
  const badge    = hero.querySelector('.hero-badge');
  const title    = hero.querySelector('.hero-title');
  const subtitle = hero.querySelector('.hero-subtitle');

  let heroH    = 0;
  let startTop = 0;
  let maxSlide = 0;

  function recalc() {
    const isMobile = window.innerWidth <= 768;
    heroH    = window.innerHeight * (isMobile ? HERO_VH_MOBILE : HERO_VH);
    startTop = isMobile ? heroH - OVERLAP_PX_MOBILE : 309;
    maxSlide = startTop - PEEK_PX;
    content.style.top = startTop + 'px';
  }

  /* ── UI 업데이트 ── */
  function applyProgress(progress) {
    progress = Math.max(0, Math.min(1, progress));
    content.style.top = (startTop - progress * maxSlide) + 'px';

    const fade = Math.max(0, 1 - progress / 0.4);
    badge.style.opacity    = fade;
    subtitle.style.opacity = fade;
    badge.style.display    = fade === 0 ? 'none' : '';
    subtitle.style.display = fade === 0 ? 'none' : '';

    title.style.fontSize = (40 - 12 * progress) + 'px';
  }

  /* ── 슬라이드 애니메이션 ── */
  let currentSlide = 0;
  let targetSlide  = 0;

  /* ── 내부 스크롤 애니메이션 ── */
  let currentScroll = 0;
  let targetScroll  = 0;

  let phase = 1; // 1: 슬라이드 업, 2: 내부 스크롤
  let rafId = null;

  function tick() {
    let stillMoving = false;

    /* 슬라이드 lerp */
    const slideDiff = targetSlide - currentSlide;
    if (Math.abs(slideDiff) > 0.3) {
      currentSlide += slideDiff * LERP;
      stillMoving = true;
    } else {
      currentSlide = targetSlide;
    }
    applyProgress(currentSlide / maxSlide);

    /* 페이즈 전환 */
    if (currentSlide >= maxSlide - 0.5) {
      phase = 2;
    } else if (phase === 2 && targetScroll <= 0 && currentScroll <= 0) {
      phase = 1;
    }

    /* 내부 스크롤 lerp */
    const scrollDiff = targetScroll - currentScroll;
    if (Math.abs(scrollDiff) > 0.3) {
      currentScroll += scrollDiff * LERP;
      stillMoving = true;
    } else {
      currentScroll = targetScroll;
    }
    /* 실제 scrollTop은 currentScroll이 아닌 scroller 자체 값과 맞춤 */
    scroller.scrollTop = currentScroll;

    if (stillMoving) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }

  function startTick() {
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  /* ── 휠 이벤트 ── */
  window.addEventListener('wheel', function (e) {
    if (e.target.closest('.sidebar')) return;
    e.preventDefault();

    const delta = e.deltaY * 0.8;

    if (phase === 1) {
      targetSlide = Math.max(0, Math.min(maxSlide, targetSlide + delta));
      startTick();
    } else {
      if (e.deltaY < 0 && targetScroll <= 0) {
        /* 내부 스크롤 맨 위에서 위로 → 슬라이드 다운 */
        targetScroll  = 0;
        currentScroll = 0;
        scroller.scrollTop = 0;
        phase = 1;
        targetSlide = Math.max(0, targetSlide + delta);
        startTick();
      } else {
        const maxScroll = scroller.scrollHeight - scroller.clientHeight;
        targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + delta));
        startTick();
      }
    }
  }, { passive: false });

  /* ── 초기화 ── */
  recalc();
  applyProgress(0);
  window.addEventListener('resize', () => {
    recalc();
    /* 리사이즈 시 스크롤 상태 초기화 */
    targetScroll = currentScroll = 0;
    scroller.scrollTop = 0;
  });
})();
