/* Portfolio v2 — small enhancements (vanilla JS, no dependencies) */
(function () {
  'use strict';

  /* 1. Project filter chips ------------------------------------------------ */
  var toolbar = document.querySelector('[data-filter-toolbar]');
  if (toolbar) {
    var chips = toolbar.querySelectorAll('.chip');
    var cards = document.querySelectorAll('.project-grid .project-card');
    var apply = function (tag) {
      cards.forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split('|');
        var show = tag === 'all' || tags.indexOf(tag) !== -1;
        card.classList.toggle('is-hidden', !show);
      });
      chips.forEach(function (c) { c.classList.toggle('is-active', c.getAttribute('data-filter') === tag); });
      if (history.replaceState) {
        history.replaceState(null, '', tag === 'all' ? location.pathname : location.pathname + '#' + encodeURIComponent(tag));
      }
    };
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () { apply(chip.getAttribute('data-filter')); });
    });
    var initial = decodeURIComponent((location.hash || '').replace('#', ''));
    if (initial && toolbar.querySelector('[data-filter="' + initial + '"]')) { apply(initial); }
  }

  /* 2. Hover-to-play video on project cards -------------------------------- */
  var hoverVideos = document.querySelectorAll('video[data-hover-video]');
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  hoverVideos.forEach(function (v) {
    var card = v.closest('.project-card');
    if (!card || !canHover) { return; }
    card.addEventListener('mouseenter', function () {
      if (v.preload === 'none') { v.preload = 'auto'; v.load(); }
      var p = v.play();
      if (p && p.then) { p.then(function () { v.classList.add('is-ready'); }).catch(function () {}); }
      else { v.classList.add('is-ready'); }
    });
    card.addEventListener('mouseleave', function () {
      v.pause(); v.currentTime = 0; v.classList.remove('is-ready');
    });
  });

  /* 3. Back to top ---------------------------------------------------------- */
  var toTop = document.createElement('a');
  toTop.href = '#';
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
  document.body.appendChild(toTop);
  var onScroll = function () { toTop.classList.toggle('is-visible', window.scrollY > 600); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* 4. Copy e-mail buttons -------------------------------------------------- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var text = btn.getAttribute('data-copy');
      var done = function () {
        var old = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Copied';
        setTimeout(function () { btn.innerHTML = old; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { window.location.href = 'mailto:' + text; });
      } else {
        window.location.href = 'mailto:' + text;
      }
    });
  });

  /* 5. Pause looping videos that are off-screen (saves battery) ------------ */
  if ('IntersectionObserver' in window) {
    var loops = document.querySelectorAll('video[autoplay][loop]');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) { var p = v.play(); if (p && p.catch) { p.catch(function () {}); } }
        else { v.pause(); }
      });
    }, { threshold: 0.1 });
    loops.forEach(function (v) { io.observe(v); });
  }
})();
