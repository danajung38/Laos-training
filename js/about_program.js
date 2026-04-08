/* ================================================================
   about_program.js — 히어로 슬라이드 업 + 내부 스크롤 애니메이션
   index.js 방식과 동일한 구조
   ================================================================ */
(function () {
  const PEEK_PX        = 60;    // 히어로가 최대로 올라갔을 때 남는 높이(px)
  const HERO_VH        = 0.42;  // 히어로 높이 비율 (CSS와 동일)
  const HERO_VH_MOBILE = 0.38;
  const OVERLAP_PX        = 24; // content-wrapper가 히어로와 겹치는 초기 값
  const OVERLAP_PX_MOBILE = 60;
  const LERP = 0.12;            // 보간 계수 (낮을수록 부드럽게)

  const wrapper  = document.querySelector('.ap-content-wrapper');
  const scroller = document.querySelector('.ap-scroll');
  const heroEl   = document.querySelector('.ap-hero');
  const heroSub  = heroEl ? heroEl.querySelector('.ap-hero-sub') : null;
  const heroTitle = heroEl ? heroEl.querySelector('.ap-hero-title') : null;

  if (!wrapper || !scroller) return;

  let heroH    = 0;
  let startTop = 0;
  let maxSlide = 0;

  function recalc() {
    const isMobile = window.innerWidth <= 768;
    heroH    = window.innerHeight * (isMobile ? HERO_VH_MOBILE : HERO_VH);
    startTop = isMobile
      ? heroH - OVERLAP_PX_MOBILE
      : heroH - OVERLAP_PX;
    maxSlide = startTop - PEEK_PX;
    wrapper.style.top = startTop + 'px';
  }

  function applyProgress(progress) {
    progress = Math.max(0, Math.min(1, progress));
    wrapper.style.top = (startTop - progress * maxSlide) + 'px';

    // 히어로 sub 텍스트 페이드 아웃
    if (heroSub) {
      const fade = Math.max(0, 1 - progress / 0.35);
      heroSub.style.opacity = fade;
      heroSub.style.display = fade === 0 ? 'none' : '';
    }

    // 히어로 타이틀 폰트 크기 보간 (38px → 26px)
    if (heroTitle) {
      heroTitle.style.fontSize = (38 - 12 * progress) + 'px';
    }
  }

  /* ── 슬라이드 애니메이션 상태 ── */
  let currentSlide = 0;
  let targetSlide  = 0;
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
        /* 내부 맨 위에서 위로 스크롤 → 슬라이드 다운 */
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

  /* ── 터치 지원 ── */
  let touchStartY = 0;
  window.addEventListener('touchstart', function (e) {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', function (e) {
    if (e.target.closest('.sidebar')) return;
    const delta = (touchStartY - e.touches[0].clientY) * 1.2;
    touchStartY = e.touches[0].clientY;

    if (phase === 1) {
      targetSlide = Math.max(0, Math.min(maxSlide, targetSlide + delta));
      startTick();
    } else {
      if (delta < 0 && targetScroll <= 0) {
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
  }, { passive: true });

  /* ── 초기화 ── */
  recalc();
  applyProgress(0);

  window.addEventListener('resize', function () {
    recalc();
    targetScroll  = 0;
    currentScroll = 0;
    scroller.scrollTop = 0;
  });

})();
