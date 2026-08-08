(() => {
  const BASE = location.pathname.includes('/pages/') ? '../' : '';
  const foto = (wv) => {
    const p = (typeof EUROPA_FOTOS !== 'undefined' && EUROPA_FOTOS[wv]) || '';
    return p && !/^https?:/.test(p) ? BASE + p : p;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const chip = (k) => {
    const t = EUROPA_TAGS[k];
    if (!t) return '';
    return `<span class="eu-chip" data-tag="${k}">${t.e} ${t.l}</span>`;
  };

  const imgBox = (wv, alt, cls, vazio = '') => {
    const src = foto(wv);
    if (!src) return `<div class="${cls} is-empty" aria-hidden="true">${vazio}</div>`;
    return `<div class="${cls}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" /></div>`;
  };

  const porta = (p) => {
    const cls = p.t === 'porta' ? 'eu-apt is-porta' : 'eu-apt';
    return `<span class="${cls}"><b>${esc(p.c)}</b> ${esc(p.n)}</span>`;
  };

  const cidade = (c) => `
    <article class="eu-city" data-tags="${c.tags.join(' ')}" data-busca="${esc((c.n + ' ' + c.d).toLowerCase())}">
      ${imgBox(c.wv, c.n, 'eu-city__img')}
      <div class="eu-city__body">
        <h4>${esc(c.n)}</h4>
        <div class="eu-city__tags">${c.tags.map(chip).join('')}</div>
        <p>${esc(c.d)}</p>
      </div>
    </article>`;

  const heroWv = (p) => {
    if (foto(p.wv)) return p.wv;
    const meio = p.cidades[Math.floor(p.cidades.length / 2)];
    return (meio && foto(meio.wv) ? meio.wv : p.cidades.find((c) => foto(c.wv))?.wv) || p.wv;
  };

  const pais = (p) => {
    const busca = [p.nome, p.resumo, p.termas || '', ...p.cidades.map((c) => c.n + ' ' + c.d)].join(' ').toLowerCase();
    const tagsPais = new Set(p.tags);
    p.cidades.forEach((c) => c.tags.forEach((t) => tagsPais.add(t)));
    return `
    <section class="eu-country" id="${p.slug}" data-tags="${[...tagsPais].join(' ')}" data-busca="${esc(busca)}">
      <header class="eu-country__head">
        ${imgBox(heroWv(p), p.nome, 'eu-country__img', p.bandeira)}
        <div class="eu-country__intro">
          <h3><span class="eu-flag">${p.bandeira}</span> ${esc(p.nome)}</h3>
          <div class="eu-country__tags">${p.tags.map(chip).join('')}</div>
          <p>${esc(p.resumo)}</p>
          <dl class="eu-meta">
            <div><dt>Portas de entrada</dt><dd>${p.portas.map(porta).join('')}</dd></div>
            <div><dt>Melhor época</dt><dd>${esc(p.quando)}</dd></div>
          </dl>
        </div>
      </header>
      ${p.termas ? `<div class="eu-termas"><span class="eu-termas__icon">♨️</span><div><strong>Termas</strong>${esc(p.termas)}</div></div>` : ''}
      ${p.aviso ? `<div class="eu-aviso"><strong>⚠️ Antes de montar o trecho</strong>${esc(p.aviso)}</div>` : ''}
      <div class="eu-cities">${p.cidades.map(cidade).join('')}</div>
    </section>`;
  };

  const regiao = (r) => `
    <section class="eu-region" id="reg-${r.id}" data-region="${r.id}">
      <div class="eu-region__head">
        <span class="eu-region__emoji">${r.emoji}</span>
        <h2>${esc(r.nome)}</h2>
        <p>${esc(r.resumo)}</p>
      </div>
      ${r.paises.map(pais).join('')}
    </section>`;

  const root = document.getElementById('euRoot');
  if (!root) return;
  root.innerHTML = EUROPA_REGIOES.map(regiao).join('');

  const legenda = document.getElementById('euLegenda');
  if (legenda) {
    legenda.innerHTML = Object.entries(EUROPA_TAGS)
      .map(([k, t]) => `<button type="button" class="eu-filter" data-filter="${k}">${t.e} ${t.l}</button>`)
      .join('');
  }

  const indice = document.getElementById('euIndice');
  if (indice) {
    indice.innerHTML = EUROPA_REGIOES
      .map((r) => `<div class="eu-idx__group"><span class="eu-idx__title">${r.emoji} ${esc(r.nome)}</span>`
        + r.paises.map((p) => `<a href="#${p.slug}" data-slug="${p.slug}">${p.bandeira} ${esc(p.nome)}</a>`).join('')
        + '</div>')
      .join('');
  }

  const fora = document.getElementById('euFora');
  if (fora && typeof EUROPA_FORA !== 'undefined') {
    fora.innerHTML = `<h3>${esc(EUROPA_FORA.titulo)}</h3>`
      + `<div class="eu-fora__flags">${EUROPA_FORA.paises.map((p) => `<span>${p.bandeira} ${esc(p.nome)}</span>`).join('')}</div>`
      + `<p>${esc(EUROPA_FORA.texto)}</p>`;
  }

  const ativos = new Set();
  const busca = document.getElementById('euBusca');
  const contador = document.getElementById('euContador');

  const aplicar = () => {
    const termo = (busca?.value || '').trim().toLowerCase();
    const tags = [...ativos];
    let visiveis = 0;

    document.querySelectorAll('.eu-country').forEach((el) => {
      const elTags = (el.dataset.tags || '').split(' ');
      const casaTag = tags.every((t) => elTags.includes(t));
      const casaBusca = !termo || (el.dataset.busca || '').includes(termo);
      const mostra = casaTag && casaBusca;
      el.hidden = !mostra;
      if (mostra) visiveis++;

      el.querySelectorAll('.eu-city').forEach((c) => {
        const cTags = (c.dataset.tags || '').split(' ');
        c.classList.toggle('is-dim', tags.length > 0 && !tags.some((t) => cTags.includes(t)));
      });
    });

    document.querySelectorAll('.eu-region').forEach((r) => {
      r.hidden = !r.querySelector('.eu-country:not([hidden])');
    });

    const filtrando = tags.length > 0 || !!termo;
    indice?.classList.toggle('is-filtrando', filtrando);
    indice?.querySelectorAll('a[data-slug]').forEach((a) => {
      const pais = document.getElementById(a.dataset.slug);
      a.classList.toggle('is-match', filtrando && pais && !pais.hidden);
    });
    indice?.querySelectorAll('.eu-idx__group').forEach((g) => {
      g.hidden = filtrando && !g.querySelector('a.is-match');
    });

    if (contador) {
      contador.textContent = tags.length || termo
        ? `${visiveis} ${visiveis === 1 ? 'país' : 'países'} com esse filtro`
        : '';
    }
  };

  legenda?.addEventListener('click', (e) => {
    const btn = e.target.closest('.eu-filter');
    if (!btn) return;
    const k = btn.dataset.filter;
    if (ativos.has(k)) ativos.delete(k); else ativos.add(k);
    btn.classList.toggle('is-on', ativos.has(k));
    aplicar();
  });

  root.addEventListener('click', (e) => {
    const c = e.target.closest('.eu-chip');
    if (!c) return;
    const btn = legenda?.querySelector(`[data-filter="${c.dataset.tag}"]`);
    btn?.click();
    document.getElementById('euControles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  busca?.addEventListener('input', aplicar);

  document.getElementById('euLimpar')?.addEventListener('click', () => {
    ativos.clear();
    legenda?.querySelectorAll('.is-on').forEach((b) => b.classList.remove('is-on'));
    if (busca) busca.value = '';
    aplicar();
  });
})();
