(() => {
  const BASE = location.pathname.includes('/pages/') ? '../' : '';
  const P = window.POSES || { categorias: [] };

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const porId = new Map();
  P.categorias.forEach((c) => c.poses.forEach((p) => porId.set(`${c.id}/${p.img}`, p)));

  const item = (cat, p) => {
    const id = `${cat.id}/${p.img}`;
    return `
    <figure class="po-item">
      <button type="button" class="po-item__img" data-zoom="${esc(id)}" aria-label="Abrir ${esc(p.nome)}">
        <img src="${esc(BASE)}assets/poses/${esc(id)}" alt="${esc(p.nome)}" loading="lazy" decoding="async" />
      </button>
    </figure>`;
  };

  const li = (i) => `<li>${esc(i)}</li>`;
  const remate = (t) => `<p class="po-dica__remate">${esc(t)}</p>`;

  const dica = (d) => `
    <aside class="po-dica">
      <strong>${esc(d.titulo)}</strong>
      <p>${esc(d.texto)}</p>
      ${d.itens ? `<ul>${d.itens.map(li).join('')}</ul>` : ''}
      ${d.remate ? remate(d.remate) : ''}
    </aside>`;

  const secao = (c) => `
    <section class="po-cat" id="cat-${c.id}" data-cat="${c.id}">
      <div class="po-cat__head">
        <h2><span class="po-cat__emoji">${c.emoji}</span> ${esc(c.nome)} <span class="po-cat__n">${c.poses.length}</span></h2>
        <p>${esc(c.resumo)}</p>
      </div>
      ${c.dica ? dica(c.dica) : ''}
      ${c.poses.length
        ? `<div class="po-grid">${c.poses.map((p) => item(c, p)).join('')}</div>`
        : `<div class="po-vazio">Sem referências ainda. Salve as fotos em <code>assets/poses/${c.id}/</code> e elas entram aqui.</div>`}
    </section>`;

  const root = document.getElementById('poRoot');
  if (!root) return;
  root.innerHTML = P.categorias.map(secao).join('');

  const abas = document.getElementById('poAbas');
  if (abas) {
    abas.innerHTML = '<button type="button" class="po-aba is-on" data-cat="">Todas</button>'
      + P.categorias
        .filter((c) => c.poses.length)
        .map((c) => `<button type="button" class="po-aba" data-cat="${c.id}">${c.emoji} ${esc(c.nome)}</button>`)
        .join('');
  }

  const contador = document.getElementById('poContador');
  let atual = '';

  const aplicar = () => {
    let visiveis = 0;
    document.querySelectorAll('.po-cat').forEach((el) => {
      const mostra = !atual || el.dataset.cat === atual;
      el.hidden = !mostra;
      if (mostra) visiveis += el.querySelectorAll('.po-item').length;
    });
    if (contador) contador.textContent = `${visiveis} poses`;
  };

  abas?.addEventListener('click', (e) => {
    const btn = e.target.closest('.po-aba');
    if (!btn) return;
    atual = btn.dataset.cat;
    abas.querySelectorAll('.po-aba').forEach((b) => b.classList.toggle('is-on', b === btn));
    aplicar();
  });

  const lightbox = document.getElementById('poLightbox');
  const alvo = document.getElementById('poLightboxConteudo');
  const fechar = () => {
    lightbox?.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  const abrir = (id) => {
    const p = porId.get(id);
    if (!p || !lightbox || !alvo) return;
    alvo.innerHTML = `<img src="${esc(BASE)}assets/poses/${esc(id)}" alt="${esc(p.nome)}" />`;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  root.addEventListener('click', (e) => {
    const zoom = e.target.closest('[data-zoom]');
    if (zoom) abrir(zoom.dataset.zoom);
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.closest('.po-lightbox__x')) fechar();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fechar(); });

  aplicar();
})();
