// Milhas.pro — vanilla JS
// Tudo num arquivo só pra rodar direto em file:// sem servidor.

(() => {
  'use strict';

  /* ============================================================
   * NAV: blur ao rolar + toggle mobile
   * ============================================================ */
  function initNav() {
    const nav      = document.getElementById('nav');
    const toggle   = document.getElementById('navToggle');
    const links    = document.getElementById('navLinks');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('is-scrolled', globalThis.scrollY > 12);
    };
    globalThis.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toggle && links) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('is-open');
        links.classList.toggle('is-open');
      });
      // fecha ao clicar num link
      links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          toggle.classList.remove('is-open');
          links.classList.remove('is-open');
        });
      });
    }

    // marca a aba ativa pela página atual
    if (links) {
      const current = location.pathname.split('/').pop() || 'index.html';
      links.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        const target = (href.split('/').pop() || 'index.html').split('#')[0];
        if (target === current) a.classList.add('is-active');
      });
    }
  }

  /* ============================================================
   * SCROLL REVEAL com IntersectionObserver
   * ============================================================ */
  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length || !('IntersectionObserver' in globalThis)) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => io.observe(el));
  }

  /* ============================================================
   * CONTADORES animados (stats do hero)
   * ============================================================ */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length || !('IntersectionObserver' in globalThis)) return;

    const animate = (el) => {
      const target   = Number.parseInt(el.dataset.count, 10) || 0;
      const duration = 1400;
      const start    = performance.now();

      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => io.observe(c));
  }

  /* ============================================================
   * PWA: registra o service worker (só em http/https, não em file://)
   * ============================================================ */
  function initPWA() {
    if (!('serviceWorker' in navigator)) return;
    if (!location.protocol.startsWith('http')) return;
    globalThis.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  /* ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScrollReveal();
    initCounters();
    initPWA();
  });
})();
