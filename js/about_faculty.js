/* ================================================================
   about_faculty.js — 히어로 슬라이드 업 + 내부 스크롤 애니메이션
   about_program.js와 동일한 구조
   ================================================================ */
(function () {
  const PEEK_PX        = 60;
  const HERO_VH        = 0.42;
  const HERO_VH_MOBILE = 0.38;
  const OVERLAP_PX        = 24;
  const OVERLAP_PX_MOBILE = 60;
  const LERP = 0.12;

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

    if (heroSub) {
      const fade = Math.max(0, 1 - progress / 0.35);
      heroSub.style.opacity = fade;
      heroSub.style.display = fade === 0 ? 'none' : '';
    }

    if (heroTitle) {
      heroTitle.style.fontSize = (38 - 12 * progress) + 'px';
    }
  }

  let currentSlide = 0;
  let targetSlide  = 0;
  let currentScroll = 0;
  let targetScroll  = 0;
  let phase = 1;
  let rafId = null;

  function tick() {
    let stillMoving = false;

    const slideDiff = targetSlide - currentSlide;
    if (Math.abs(slideDiff) > 0.3) {
      currentSlide += slideDiff * LERP;
      stillMoving = true;
    } else {
      currentSlide = targetSlide;
    }
    applyProgress(currentSlide / maxSlide);

    if (currentSlide >= maxSlide - 0.5) {
      phase = 2;
    } else if (phase === 2 && targetScroll <= 0 && currentScroll <= 0) {
      phase = 1;
    }

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

  window.addEventListener('wheel', function (e) {
    if (e.target.closest('.sidebar')) return;
    e.preventDefault();

    const delta = e.deltaY * 0.8;

    if (phase === 1) {
      targetSlide = Math.max(0, Math.min(maxSlide, targetSlide + delta));
      startTick();
    } else {
      if (e.deltaY < 0 && targetScroll <= 0) {
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

  recalc();
  applyProgress(0);

  window.addEventListener('resize', function () {
    recalc();
    targetScroll  = 0;
    currentScroll = 0;
    scroller.scrollTop = 0;
  });

})();
