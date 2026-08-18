const ROTEIROS_TAGS = {
  cidade:      { e: '🌆', l: 'Cidade' },
  historia:    { e: '🏛️', l: 'História & arte' },
  montanha:    { e: '🏔️', l: 'Montanha' },
  praia:       { e: '🏖️', l: 'Praia de banho' },
  costa:       { e: '🌊', l: 'Costa de contemplar' },
  natureza:    { e: '🌲', l: 'Natureza' },
  termas:      { e: '♨️', l: 'Termas' },
  gastronomia: { e: '🍷', l: 'Gastronomia & vinho' },
  roadtrip:    { e: '🚗', l: 'Road trip' },
};

const ROTEIROS_PAISES = {
  '🇦🇱': 'Albânia',
  '🇩🇪': 'Alemanha',
  '🇧🇪': 'Bélgica',
  '🇪🇬': 'Egito',
  '🇪🇸': 'Espanha',
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿': 'Escócia',
  '🇫🇷': 'França',
  '🇬🇷': 'Grécia',
  '🇳🇱': 'Holanda',
  '🇬🇧': 'Inglaterra',
  '🇮🇸': 'Islândia',
  '🇮🇹': 'Itália',
  '🇲🇦': 'Marrocos',
  '🇲🇪': 'Montenegro',
  '🇵🇱': 'Polônia',
  '🇵🇹': 'Portugal',
  '🇸🇬': 'Singapura',
  '🇹🇭': 'Tailândia',
  '🇹🇷': 'Turquia',
  '🇻🇳': 'Vietnã',
};

const ROTEIROS = [
  {
    id: 'paris-cairo',
    epoca: 'set–out',
    onde: 'Europa + Egito',
    paradas: [
      { n: 'Paris', p: '🇫🇷', tipo: 'porta', tags: ['cidade', 'historia'] },
      { n: 'Amsterdã', p: '🇳🇱', tipo: 'coringa', tags: ['cidade', 'historia'] },
      { n: 'Dolomitas', p: '🇮🇹', tipo: 'coringa', tags: ['montanha', 'natureza'] },
      { n: 'Sharm el-Sheikh & Dahab', p: '🇪🇬', tipo: 'coringa', tags: ['praia'] },
      { n: 'Cairo', p: '🇪🇬', tipo: 'porta', tags: ['historia'] },
    ],
  },
  {
    id: 'munique-berlim',
    epoca: 'jun–ago',
    onde: 'Alemanha + Grécia + Itália',
    paradas: [
      { n: 'Munique', p: '🇩🇪', tipo: 'porta', tags: ['cidade', 'gastronomia'] },
      { n: 'Corfu', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'historia'] },
      { n: 'Costa Amalfitana & Capri', p: '🇮🇹', tipo: 'coringa', tags: ['praia', 'costa'] },
      { n: 'Mykonos', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Puglia', p: '🇮🇹', tipo: 'coringa', tags: ['gastronomia', 'praia'] },
      { n: 'Berlim', p: '🇩🇪', tipo: 'porta', tags: ['cidade', 'historia'] },
    ],
  },
  {
    id: 'amsterda-milao',
    epoca: 'set–out',
    onde: 'Benelux + Polônia + Islândia + Itália',
    paradas: [
      { n: 'Amsterdã', p: '🇳🇱', tipo: 'porta', tags: ['cidade', 'historia'] },
      { n: 'Cracóvia', p: '🇵🇱', tipo: 'coringa', tags: ['historia', 'cidade'] },
      { n: 'Islândia', p: '🇮🇸', tipo: 'coringa', tags: ['natureza', 'termas', 'roadtrip'] },
      { n: 'Milão', p: '🇮🇹', tipo: 'porta', tags: ['cidade'] },
    ],
  },
  {
    id: 'lisboa-barcelona',
    epoca: 'jun–set',
    onde: 'Portugal + Itália + Grécia + Espanha',
    paradas: [
      { n: 'Lisboa', p: '🇵🇹', tipo: 'porta', tags: ['cidade', 'historia', 'gastronomia'] },
      { n: 'Cinque Terre', p: '🇮🇹', tipo: 'coringa', tags: ['costa', 'natureza'] },
      { n: 'Zakynthos', p: '🇬🇷', tipo: 'coringa', tags: ['praia'] },
      { n: 'Mykonos', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Barcelona', p: '🇪🇸', tipo: 'porta', tags: ['cidade', 'historia', 'praia'] },
    ],
  },
  {
    id: 'barcelona-madri',
    epoca: 'jun–set',
    onde: 'Espanha + Grécia + Bálcãs + Itália',
    paradas: [
      { n: 'Barcelona', p: '🇪🇸', tipo: 'porta', tags: ['cidade', 'historia', 'praia'] },
      { n: 'Mykonos', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Montenegro', p: '🇲🇪', tipo: 'coringa', tags: ['costa', 'montanha'] },
      { n: 'Sicília', p: '🇮🇹', tipo: 'coringa', tags: ['historia', 'praia', 'natureza'] },
      { n: 'Madri', p: '🇪🇸', tipo: 'porta', tags: ['cidade', 'historia', 'gastronomia'] },
    ],
  },
  {
    id: 'lisboa-lisboa',
    epoca: 'jun–set',
    onde: 'Portugal + Reino Unido + Grécia',
    paradas: [
      { n: 'Lisboa + Leiria de carro', p: '🇵🇹', tipo: 'porta', tags: ['cidade', 'historia', 'costa'], obs: 'Nazaré, Óbidos e Berlengas — carro alugado' },
      { n: 'Londres', p: '🇬🇧', tipo: 'coringa', tags: ['cidade', 'historia'] },
      { n: 'Mykonos', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Ios', p: '🇬🇷', tipo: 'coringa', tags: ['praia'] },
      { n: 'Atenas', p: '🇬🇷', tipo: 'coringa', tags: ['historia', 'cidade'], obs: 'chegou de ferry vindo de Ios' },
      { n: 'Lisboa', p: '🇵🇹', tipo: 'porta', tags: ['cidade'] },
    ],
  },
  {
    id: 'londres-espanha',
    epoca: 'jun–set',
    onde: 'Inglaterra + Escócia + Espanha',
    paradas: [
      { n: 'Londres', p: '🇬🇧', tipo: 'porta', tags: ['cidade', 'historia'] },
      { n: 'Inverness', p: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', tipo: 'coringa', tags: ['natureza', 'montanha', 'roadtrip'], obs: 'base mais perto das Highlands' },
      { n: 'Edimburgo', p: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', tipo: 'coringa', tags: ['cidade', 'historia'] },
      { n: 'Maiorca', p: '🇪🇸', tipo: 'coringa', tags: ['praia', 'costa'] },
      { n: 'Madri ou Barcelona', p: '🇪🇸', tipo: 'porta', tags: ['cidade', 'historia', 'gastronomia'] },
    ],
  },
  {
    id: 'eindhoven-amsterda',
    epoca: 'mai–set',
    onde: 'Holanda + Puglia + Albânia + Bélgica',
    paradas: [
      { n: 'Eindhoven', p: '🇳🇱', tipo: 'porta', tags: ['cidade'], obs: 'base de low cost e entrada mais barata que Schiphol — Ryanair voa direto pra Brindisi' },
      { n: 'Brindisi', p: '🇮🇹', tipo: 'coringa', tags: ['praia', 'costa'], obs: 'porta do Salento' },
      { n: 'Bari', p: '🇮🇹', tipo: 'coringa', tags: ['cidade', 'gastronomia'], obs: 'de trem desde Brindisi' },
      { n: 'Tirana', p: '🇦🇱', tipo: 'coringa', tags: ['cidade', 'gastronomia'], obs: 'Bari–Tirana em 55 min, cerca de 3 voos por dia' },
      { n: 'Bruxelas', p: '🇧🇪', tipo: 'coringa', tags: ['cidade', 'gastronomia'], obs: 'Tirana–Bruxelas em 2h50; taxa de embarque bem menor que a holandesa' },
      { n: 'Amsterdã', p: '🇳🇱', tipo: 'porta', tags: ['cidade', 'historia'], obs: 'de trem desde Bruxelas, cerca de 2h' },
    ],
  },
  {
    id: 'milao-madri',
    epoca: 'mar–mai · set–out',
    onde: 'Itália + Espanha + Marrocos',
    paradas: [
      { n: 'Milão', p: '🇮🇹', tipo: 'porta', tags: ['cidade'], obs: 'entrada na Europa e emenda com low cost pra Espanha' },
      { n: 'Málaga', p: '🇪🇸', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Andaluzia de carro', p: '🇪🇸', tipo: 'coringa', tags: ['historia', 'roadtrip'], obs: 'Granada, Córdoba e os povoados brancos' },
      { n: 'Marrakech', p: '🇲🇦', tipo: 'coringa', tags: ['cidade', 'historia'] },
      { n: 'Sevilha', p: '🇪🇸', tipo: 'coringa', tags: ['cidade', 'historia', 'gastronomia'] },
      { n: 'Madri', p: '🇪🇸', tipo: 'porta', tags: ['cidade', 'historia', 'gastronomia'] },
    ],
  },
  {
    id: 'roma-milao-litoral-turco',
    epoca: 'mai–out',
    onde: 'Itália + Turquia + ilhas gregas',
    paradas: [
      { n: 'Roma', p: '🇮🇹', tipo: 'porta', tags: ['cidade', 'historia'] },
      { n: 'Istambul', p: '🇹🇷', tipo: 'coringa', tags: ['cidade', 'historia', 'gastronomia'] },
      { n: 'Capadócia', p: '🇹🇷', tipo: 'coringa', tags: ['natureza', 'historia'], obs: 'aeroporto de Kayseri (ASR)' },
      { n: 'Esmirna + costa lícia de carro', p: '🇹🇷', tipo: 'coringa', tags: ['praia', 'costa', 'roadtrip'], obs: 'Fethiye, Ölüdeniz e Kaş' },
      { n: 'Rodes', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'historia'], obs: 'balsa de Fethiye em 1h30–2h, o ano todo, até 3 saídas por dia' },
      { n: 'Milão', p: '🇮🇹', tipo: 'porta', tags: ['cidade'], obs: 'Rodes–Milão direto na easyJet, Ryanair e Neos, cerca de 3h' },
    ],
  },
  {
    id: 'roma-milao-ilhas-gregas',
    epoca: 'jun–set',
    onde: 'Itália + ilhas gregas',
    paradas: [
      { n: 'Roma', p: '🇮🇹', tipo: 'porta', tags: ['cidade', 'historia'] },
      { n: 'Toscana ou Puglia ou Dolomitas', p: '🇮🇹', tipo: 'coringa', tags: ['gastronomia', 'praia', 'montanha'], obs: 'escolhe uma — Toscana e Puglia rendem gastronomia, Dolomitas rende montanha' },
      { n: 'Zakynthos ou Cefalônia ou Creta', p: '🇬🇷', tipo: 'coringa', tags: ['praia'], obs: 'só emenda no verão; fora de jun–set as ilhas esvaziam e Atenas rende mais' },
      { n: 'Veneza', p: '🇮🇹', tipo: 'coringa', tags: ['cidade', 'historia'] },
      { n: 'Milão', p: '🇮🇹', tipo: 'porta', tags: ['cidade'], obs: 'de trem desde Veneza, cerca de 2h30 no Frecciarossa' },
    ],
  },
  {
    id: 'asia-primeira-vez',
    epoca: 'nov–fev',
    onde: 'Tailândia + Vietnã',
    paradas: [
      { n: 'Bangkok', p: '🇹🇭', tipo: 'porta', tags: ['cidade', 'gastronomia'] },
      { n: 'Sukhothai', p: '🇹🇭', tipo: 'coringa', tags: ['historia'] },
      { n: 'Chiang Mai + Chiang Rai', p: '🇹🇭', tipo: 'coringa', tags: ['natureza', 'historia'] },
      { n: 'Krabi', p: '🇹🇭', tipo: 'coringa', tags: ['praia', 'natureza'] },
      { n: 'Phi Phi', p: '🇹🇭', tipo: 'coringa', tags: ['praia'] },
      { n: 'Phuket', p: '🇹🇭', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Hanói', p: '🇻🇳', tipo: 'coringa', tags: ['cidade', 'gastronomia'] },
      { n: 'Hoi An + Da Nang', p: '🇻🇳', tipo: 'coringa', tags: ['historia', 'praia'] },
      { n: 'Singapura ou Hong Kong', p: '🇸🇬', tipo: 'porta', tags: ['cidade'] },
    ],
  },
];

(() => {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const TIPO = { porta: { e: '🚪', l: 'Porta' }, coringa: { e: '🧩', l: 'Coringa' } };

  const tag = (k) => {
    const t = ROTEIROS_TAGS[k];
    return t ? `<span class="rot-tag" title="${t.l}">${t.e}</span>` : '';
  };

  const parada = (s) => `
    <li class="rot-stop is-${s.tipo}">
      <span class="rot-stop__tipo" title="${TIPO[s.tipo].l}">${TIPO[s.tipo].e}</span>
      <span class="rot-stop__nome">${s.p} ${esc(s.n)}</span>
      <span class="rot-stop__tags">${s.tags.map(tag).join('')}</span>
      ${s.obs ? `<span class="rot-stop__obs">${esc(s.obs)}</span>` : ''}
    </li>`;

  const roteiro = (r) => `
    <article class="rot" id="${r.id}">
      <header class="rot__head">
        <span class="rot__quando" title="Melhor época pra ir">${esc(r.epoca)}</span>
        <h3>${esc(r.onde)}</h3>
      </header>
      <ol class="rot__stops">${r.paradas.map(parada).join('')}</ol>
    </article>`;

  const root = document.getElementById('rotRoot');
  if (root) root.innerHTML = ROTEIROS.map(roteiro).join('');

  const legenda = document.getElementById('rotLegenda');
  if (legenda) {
    legenda.innerHTML = Object.values(ROTEIROS_TAGS)
      .map((t) => `<span class="rot-legenda__item">${t.e} ${t.l}</span>`).join('');
  }

  const input = document.getElementById('rotBusca');
  const lista = document.getElementById('rotPaises');
  const vazio = document.getElementById('rotVazio');
  if (!input || !root) return;

  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const indice = new Map(ROTEIROS.map((r) => [
    r.id,
    norm(r.onde + ' ' + r.paradas.map((s) => (ROTEIROS_PAISES[s.p] || '') + ' ' + s.n).join(' ')),
  ]));

  const paises = [...new Set(ROTEIROS.flatMap((r) => r.paradas.map((s) => ROTEIROS_PAISES[s.p]).filter(Boolean)))]
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));
  if (lista) lista.innerHTML = paises.map((p) => `<option value="${esc(p)}"></option>`).join('');

  const aplicar = () => {
    const termo = norm(input.value.trim());
    let visiveis = 0;
    ROTEIROS.forEach((r) => {
      const el = root.querySelector(`#${r.id}`);
      if (!el) return;
      const bate = !termo || indice.get(r.id).includes(termo);
      el.hidden = !bate;
      if (bate) visiveis += 1;
    });
    if (vazio) vazio.hidden = visiveis > 0;
  };

  input.addEventListener('input', aplicar);
  input.addEventListener('search', aplicar);
})();
