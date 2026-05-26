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
   * SIMULADOR de milhas — estimativa baseada em distância
   * ============================================================ */
  function initSimulator() {
    const form = document.getElementById('simForm');
    if (!form) return;

    // Distância aproximada (km) GRU → destino. Pra outros origens aplica fator.
    const DIST_FROM_GRU = {
      MIA: 6580, JFK: 7700, CDG: 9420, LIS: 7800, MAD: 8400,
      NRT: 18500, EZE: 1700, SCL: 2600
    };
    const ORIGIN_FACTOR = { GRU: 1, GIG: 1.02, BSB: 1.04, CNF: 1.03, POA: 1.05 };
    const CLASS_MULT    = { eco: 1, prem: 1.6, exe: 2.6, first: 4.2 };

    // Multiplicador por programa (Smiles, LATAM, TudoAzul são diferentes na real)
    const PROGRAMS = [
      { selector: 0, milesPerKm: 4.8, taxa: 0.026 }, // Smiles
      { selector: 1, milesPerKm: 5.2, taxa: 0.024 }, // LATAM Pass
      { selector: 2, milesPerKm: 4.5, taxa: 0.022 }, // TudoAzul
    ];

    const fmtMiles = (n) =>
      Math.round(n / 1000) * 1000;
    const fmtBRL = (n) =>
      n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const from   = document.getElementById('simFrom').value;
      const to     = document.getElementById('simTo').value;
      const klass  = document.getElementById('simClass').value;

      const baseKm   = DIST_FROM_GRU[to] || 5000;
      const factor   = ORIGIN_FACTOR[from] || 1;
      const classMul = CLASS_MULT[klass] || 1;

      const km = baseKm * factor;

      const results = document.getElementById('simResults');
      const cards   = results.querySelectorAll('.result-card');

      PROGRAMS.forEach((prog, i) => {
        const card  = cards[i];
        const miles = fmtMiles(km * prog.milesPerKm * classMul);
        // custo estimado = milhas * taxa de custo médio
        const price = miles * prog.taxa + 200; // + taxas fixas aproximadas

        card.querySelector('[data-miles]').textContent = miles.toLocaleString('pt-BR') + ' milhas';
        card.querySelector('[data-price]').textContent = fmtBRL(price);
      });

      results.hidden = false;
      results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  /* ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScrollReveal();
    initCounters();
    initSimulator();
  });
})();
