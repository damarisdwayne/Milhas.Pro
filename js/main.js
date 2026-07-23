// Milhas.pro — vanilla JS
// Tudo num arquivo só pra rodar direto em file:// sem servidor.

(() => {
  'use strict';

  /* ============================================================
   * NAV: blur ao rolar + toggle mobile
   * ============================================================ */
  function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('is-scrolled', globalThis.scrollY > 12);
    };
    globalThis.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // (o botão ☰ abre o drawer lateral — ver initDrawer)
  }

  /* ============================================================
   * DRAWER: menu lateral completo, gerado por JS (todas as páginas)
   * ============================================================ */
  function initDrawer() {
    const toggle = document.getElementById('navToggle');
    if (!toggle) return;

    // caminho relativo conforme a página esteja na raiz ou em /pages/
    const inPages = location.pathname.includes('/pages/');
    const P    = inPages ? '' : 'pages/';   // arquivos em pages/
    const ROOT = inPages ? '../' : '';      // arquivos na raiz (index)

    const SECTIONS = [
      { title: 'Comece aqui', links: [
        ['Visão geral', ROOT + 'index.html'],
        ['Curso completo (do zero)', P + 'curso-completo.html'],
        ['Roadmap de 12 meses', P + 'roadmap.html'],
      ]},
      { title: 'Programas & moedas', links: [
        ['Programas (todos)', P + 'programas.html'],
        ['Qual moeda transferir', P + 'qual-moeda.html'],
        ['Multiplicadores', P + 'multiplicadores.html'],
        ['Termômetro de preços', P + 'termometro.html'],
        ['Calculadora: emitir ou pagar', P + 'termometro.html#calculadora'],
      ]},
      { title: 'Achar a passagem', links: [
        ['Estratégias', P + 'estrategias.html'],
        ['Ferramentas (sites)', P + 'sites-secretos.html'],
        ['Guia do Seats.aero', P + 'seats-aero-guia-br.html'],
      ]},
      { title: 'Montar a viagem', links: [
        ['Achados (rotas)', P + 'achados.html'],
        ['Receitas — como chegar', P + 'como-chegar.html'],
        ['Quinta liberdade', P + 'quinta-liberdade.html'],
        ['Primeira classe', P + 'primeira-classe.html'],
        ['Hospedagem', P + 'hospedagem.html'],
        ['Lojas (moda praia & viagem)', P + 'lojas.html'],
        ['Cruzeiros', P + 'cruzeiros.html'],
        ['Tax Free', P + 'tax-free.html'],
      ]},
      { title: 'Na viagem', links: [
        ['Benefícios dos cartões (concierge)', P + 'cartoes.html'],
        ['Salas VIP & crédito em restaurantes', P + 'salas-vip.html'],
        ['Deu ruim na viagem (direitos)', P + 'imprevistos.html'],
      ]},
      { title: 'Pessoal', links: [
        ['Saúde (exames & check-up)', P + 'saude.html'],
      ]},
    ];

    const current = location.pathname.split('/').pop() || 'index.html';

    let body = '';
    SECTIONS.forEach(sec => {
      let groupActive = false;
      const linksHtml = sec.links.map(([label, href]) => {
        const file = (href.split('/').pop() || '').split('#')[0];
        const active = file === current;
        if (active) groupActive = true;
        return `<a href="${href}"${active ? ' class="is-active"' : ''}>${label}</a>`;
      }).join('');
      body += `<div class="drawer__group${groupActive ? ' is-open' : ''}">`
            + `<button class="drawer__grouphead">${sec.title}<span class="drawer__chev">›</span></button>`
            + `<div class="drawer__links">${linksHtml}</div></div>`;
    });

    const overlay = document.createElement('div');
    overlay.className = 'drawer-overlay';
    const drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = '<div class="drawer__head">'
      + '<span class="drawer__title"><span style="color:var(--accent)">✈</span> Navegar</span>'
      + '<button class="drawer__close" aria-label="Fechar menu">×</button></div>'
      + `<nav class="drawer__body">${body}</nav>`;
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    const open = () => {
      drawer.classList.add('is-open'); overlay.classList.add('is-open');
      toggle.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      drawer.classList.remove('is-open'); overlay.classList.remove('is-open');
      toggle.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', open);
    overlay.addEventListener('click', close);
    drawer.querySelector('.drawer__close').addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    drawer.querySelectorAll('.drawer__grouphead').forEach(btn => {
      btn.addEventListener('click', () => btn.parentElement.classList.toggle('is-open'));
    });
    // fecha ao clicar num link (útil pros links de âncora na mesma página)
    drawer.querySelectorAll('.drawer__links a').forEach(a => a.addEventListener('click', close));
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
    initDrawer();
    initScrollReveal();
    initCounters();
    initPWA();
  });
})();
