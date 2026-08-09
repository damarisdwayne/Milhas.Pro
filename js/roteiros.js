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

const ROTEIROS = [
  {
    id: 'paris-cairo',
    quando: 'out/24',
    onde: 'Europa + Egito',
    paradas: [
      { n: 'Paris', p: '🇫🇷', tipo: 'porta', tags: ['cidade', 'historia'] },
      { n: 'Amsterdã', p: '🇳🇱', tipo: 'coringa', tags: ['cidade', 'historia'] },
      { n: 'Dolomitas', p: '🇮🇹', tipo: 'coringa', tags: ['montanha', 'natureza'] },
      { n: 'Sharm el-Sheikh & Dahab', p: '🇪🇬', tipo: 'coringa', tags: ['praia'] },
      { n: 'Cairo', p: '🇪🇬', tipo: 'porta', tags: ['historia'] },
    ],
    porque: 'Duas capitais de museu no começo, montanha alta no meio, mergulho no Mar Vermelho e Antiguidade no fim. Nenhum trecho repete a sensação do anterior, e sair pelo Cairo evita voltar refazendo caminho.',
  },
  {
    id: 'munique-berlim',
    quando: 'jun–jul/25',
    onde: 'Alemanha + Grécia + Itália',
    paradas: [
      { n: 'Munique', p: '🇩🇪', tipo: 'porta', tags: ['cidade', 'gastronomia'] },
      { n: 'Corfu', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'historia'] },
      { n: 'Costa Amalfitana & Capri', p: '🇮🇹', tipo: 'coringa', tags: ['praia', 'costa'] },
      { n: 'Mykonos', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Puglia', p: '🇮🇹', tipo: 'coringa', tags: ['gastronomia', 'praia'] },
      { n: 'Berlim', p: '🇩🇪', tipo: 'porta', tags: ['cidade', 'historia'] },
    ],
    porque: 'Roteiro de verão puxado pra mar, mas com duas cidades alemãs muito diferentes entre si abrindo e fechando. Corfu (jônica, verde) e Mykonos (cicládica, seca) não se parecem, e a Puglia entra como o lado de comida e vila branca sem multidão.',
  },
  {
    id: 'amsterda-milao',
    quando: 'out/25',
    onde: 'Benelux + Polônia + Islândia + Itália',
    paradas: [
      { n: 'Amsterdã', p: '🇳🇱', tipo: 'porta', tags: ['cidade', 'historia'] },
      { n: 'Cracóvia', p: '🇵🇱', tipo: 'coringa', tags: ['historia', 'cidade'] },
      { n: 'Islândia', p: '🇮🇸', tipo: 'coringa', tags: ['natureza', 'termas', 'roadtrip'] },
      { n: 'Milão', p: '🇮🇹', tipo: 'porta', tags: ['cidade'] },
    ],
    porque: 'O contraste mais forte da lista: canal, memória do século XX, natureza vulcânica e moda italiana. A Islândia no meio é o que faz o roteiro — outubro ainda tem estrada aberta e já pega aurora.',
  },
  {
    id: 'lisboa-barcelona',
    quando: 'jun/26',
    onde: 'Portugal + Itália + Grécia + Espanha',
    paradas: [
      { n: 'Lisboa', p: '🇵🇹', tipo: 'porta', tags: ['cidade', 'historia', 'gastronomia'] },
      { n: 'Cinque Terre', p: '🇮🇹', tipo: 'coringa', tags: ['costa', 'natureza'] },
      { n: 'Zakynthos', p: '🇬🇷', tipo: 'coringa', tags: ['praia'] },
      { n: 'Mykonos', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Barcelona', p: '🇪🇸', tipo: 'porta', tags: ['cidade', 'historia', 'praia'] },
    ],
    porque: 'Entra e sai por duas das portas mais baratas do Brasil, e o miolo é todo Mediterrâneo. Cinque Terre é litoral de contemplar (trilha e trem), as duas gregas são de banho — a alternância evita o cansaço de praia atrás de praia.',
  },
  {
    id: 'barcelona-madri',
    quando: 'próxima',
    onde: 'Espanha + Grécia + Bálcãs + Itália',
    paradas: [
      { n: 'Barcelona', p: '🇪🇸', tipo: 'porta', tags: ['cidade', 'historia', 'praia'] },
      { n: 'Mykonos', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Montenegro', p: '🇲🇪', tipo: 'coringa', tags: ['costa', 'montanha'] },
      { n: 'Sicília', p: '🇮🇹', tipo: 'coringa', tags: ['historia', 'praia', 'natureza'] },
      { n: 'Madri', p: '🇪🇸', tipo: 'porta', tags: ['cidade', 'historia', 'gastronomia'] },
    ],
    porque: 'Abre e fecha na Espanha por duas cidades distintas, sem repetir. Montenegro entra como o bloco de baía e montanha entre duas ilhas mediterrâneas, e a Sicília soma vulcão e templo grego ao que já era praia.',
  },
  {
    id: 'lisboa-lisboa',
    quando: 'aplicado por uma aluna',
    onde: 'Portugal + Reino Unido + Grécia',
    paradas: [
      { n: 'Lisboa + Leiria de carro', p: '🇵🇹', tipo: 'porta', tags: ['cidade', 'historia', 'costa'], obs: 'Nazaré, Óbidos e Berlengas — carro alugado no aeroporto e devolvido lá mesmo' },
      { n: 'Londres', p: '🇬🇧', tipo: 'coringa', tags: ['cidade', 'historia'] },
      { n: 'Mykonos', p: '🇬🇷', tipo: 'coringa', tags: ['praia', 'cidade'] },
      { n: 'Ios', p: '🇬🇷', tipo: 'coringa', tags: ['praia'] },
      { n: 'Atenas', p: '🇬🇷', tipo: 'coringa', tags: ['historia', 'cidade'], obs: 'chegou de ferry vindo de Ios' },
      { n: 'Lisboa', p: '🇵🇹', tipo: 'porta', tags: ['cidade'] },
    ],
    porque: 'Prova de que porta barata não obriga a ficar no país da porta. A passagem foi pra Lisboa ida e volta, mas em vez de virar "viagem a Portugal", Lisboa virou só a porta: road trip curto de dois dias na região de Leiria enquanto ainda estava lá, e o resto do tempo em outros três destinos. Ferry entre as ilhas gregas em vez de voo.',
  },
  {
    id: 'asia-primeira-vez',
    quando: 'quem nunca foi à Ásia',
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
    porque: 'Roteiro de primeira viagem à Ásia: começa pela cidade grande, sobe pro norte de templo e natureza, desce pro sul de praia e ilha, e só então cruza pro Vietnã. Sair por Singapura ou Hong Kong em vez de voltar a Bangkok economiza um trecho inteiro.',
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

  const roteiro = (r) => {
    const portas = r.paradas.filter((s) => s.tipo === 'porta');
    const entrada = portas[0];
    const saida = portas[portas.length - 1];
    const openJaw = entrada && saida && entrada.n !== saida.n;
    return `
    <article class="rot" id="${r.id}">
      <header class="rot__head">
        <span class="rot__quando">${esc(r.quando)}</span>
        <h3>${esc(r.onde)}</h3>
      </header>
      <ol class="rot__stops">${r.paradas.map(parada).join('')}</ol>
      <dl class="rot__meta">
        <div><dt>Entra por</dt><dd>${entrada ? entrada.p + ' ' + esc(entrada.n) : '—'}</dd></div>
        <div><dt>Sai por</dt><dd>${saida ? saida.p + ' ' + esc(saida.n) : '—'}${openJaw ? ' <span class="rot-oj">open-jaw</span>' : ''}</dd></div>
      </dl>
      <p class="rot__porque"><strong>Funciona porque:</strong> ${esc(r.porque)}</p>
    </article>`;
  };

  const root = document.getElementById('rotRoot');
  if (root) root.innerHTML = ROTEIROS.map(roteiro).join('');

  const legenda = document.getElementById('rotLegenda');
  if (legenda) {
    legenda.innerHTML = Object.values(ROTEIROS_TAGS)
      .map((t) => `<span class="rot-legenda__item">${t.e} ${t.l}</span>`).join('');
  }
})();
