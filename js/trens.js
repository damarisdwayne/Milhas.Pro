const TRENS_CORREDORES = [
  { paises: '🇮🇹🇦🇹🇩🇪', n: 'Roma, Dolomitas e Baviera',
    trecho: 'Roma → Florença → Veneza → Bolzano/Dolomitas → Innsbruck → Salzburgo → Munique',
    nota: 'Junta o corredor ferroviário italiano com o Tirol e a Baviera, que são geograficamente coladas. Sai por Munique em vez de voltar a Roma.' },
  { paises: '🇫🇷🇨🇭🇮🇹', n: 'Alpes de ponta a ponta',
    trecho: 'Paris → Genebra → Interlaken → Zurique → Milão → Veneza → Roma',
    nota: 'O trajeto é a atração: o trecho suíço atravessa os Alpes. O Paris–Milão direto voltou a funcionar em 31/03/2025, depois de quase dois anos fechado por deslizamento no vale da Maurienne.' },
  { paises: '🇫🇷🇧🇪🇳🇱🇩🇪', n: 'Benelux em alta velocidade',
    trecho: 'Paris → Bruxelas → Amsterdã → Colônia → Frankfurt',
    nota: 'Os trechos mais curtos e frequentes da Europa — Paris–Bruxelas leva ~1h20. Quatro países sem nenhum voo.' },
  { paises: '🇨🇿🇦🇹🇸🇰🇭🇺', n: 'Quatro capitais da Europa Central',
    trecho: 'Praga → Viena → Bratislava → Budapeste',
    nota: 'A rota mais eficiente do continente em países por quilômetro. Viena–Bratislava é uma das travessias internacionais mais fáceis que existem: cerca de 1h.' },
  { paises: '🇩🇪🇨🇿🇦🇹🇭🇺', n: 'Berlim ao Danúbio',
    trecho: 'Berlim → Praga → Viena → Budapeste',
    nota: 'Variação da anterior entrando pela Alemanha. Berlim–Praga é um dos trechos mais bonitos, acompanhando o vale do Elba.' },
  { paises: '🇮🇹🇸🇮🇭🇷', n: 'Adriático e Bálcãs',
    trecho: 'Veneza → Trieste → Ljubljana → Zagreb',
    nota: 'Forma barata de somar dois países novos ao nordeste italiano. Da Croácia pra baixo, porém, o trem acaba — a costa dálmata é de carro ou ônibus.' },
  { paises: '🇫🇷🇮🇹🇦🇹🇩🇪', n: 'Travessia oeste–leste',
    trecho: 'Paris → Milão → Veneza → Innsbruck → Salzburgo → Munique',
    nota: 'Quatro países, entrando por Paris e saindo por Munique. Open-jaw natural, sem repetir nenhum trecho.' },
  { paises: '🇪🇸🇫🇷🇮🇹', n: 'Mediterrâneo ocidental',
    trecho: 'Barcelona → Marselha/Lyon → Paris → Milão',
    nota: 'A Renfe reativou Barcelona–Lyon e Barcelona–Marselha em 2023, depois de a SNCF encerrar a parceria. Pra Paris, quem opera é a SNCF.' },
];

const TRENS_LIGACOES = [
  { p: '🇫🇷 França', itens: ['Paris → Londres 🇬🇧', 'Paris → Bruxelas 🇧🇪', 'Paris → Amsterdã 🇳🇱', 'Paris → Luxemburgo 🇱🇺', 'Paris → Frankfurt 🇩🇪', 'Paris → Stuttgart 🇩🇪', 'Paris → Genebra 🇨🇭', 'Paris → Zurique 🇨🇭', 'Paris → Barcelona 🇪🇸', 'Paris → Milão 🇮🇹', 'Lyon → Genebra 🇨🇭', 'Nice → Mônaco 🇲🇨', 'Nice → Ventimiglia 🇮🇹'] },
  { p: '🇮🇹 Itália', itens: ['Milão → Zurique 🇨🇭', 'Milão → Genebra 🇨🇭', 'Milão → Paris 🇫🇷', 'Milão → Viena 🇦🇹', 'Veneza → Viena 🇦🇹', 'Veneza → Ljubljana 🇸🇮', 'Trieste → Ljubljana 🇸🇮', 'Trieste → Villach 🇦🇹', 'Bolzano → Innsbruck 🇦🇹', 'Verona → Munique 🇩🇪', 'Roma → Munique 🇩🇪 🌙', 'Veneza → Zagreb 🇭🇷 ↔'] },
  { p: '🇨🇭 Suíça', itens: ['Genebra → Paris 🇫🇷', 'Genebra → Lyon 🇫🇷', 'Genebra → Milão 🇮🇹', 'Zurique → Milão 🇮🇹', 'Zurique → Paris 🇫🇷', 'Zurique → Munique 🇩🇪', 'Zurique → Viena 🇦🇹', 'Basileia → Paris 🇫🇷', 'Basileia → Frankfurt 🇩🇪'] },
  { p: '🇦🇹 Áustria', itens: ['Viena → Bratislava 🇸🇰', 'Viena → Budapeste 🇭🇺', 'Viena → Praga 🇨🇿', 'Viena → Munique 🇩🇪', 'Viena → Ljubljana 🇸🇮', 'Viena → Zagreb 🇭🇷', 'Viena → Zurique 🇨🇭', 'Innsbruck → Munique 🇩🇪', 'Innsbruck → Bolzano 🇮🇹', 'Salzburgo → Munique 🇩🇪'] },
  { p: '🇩🇪 Alemanha', itens: ['Munique → Salzburgo 🇦🇹', 'Munique → Innsbruck 🇦🇹', 'Munique → Viena 🇦🇹', 'Munique → Zurique 🇨🇭', 'Frankfurt → Paris 🇫🇷', 'Frankfurt → Bruxelas 🇧🇪', 'Frankfurt → Amsterdã 🇳🇱', 'Berlim → Praga 🇨🇿', 'Berlim → Varsóvia 🇵🇱', 'Berlim → Amsterdã 🇳🇱', 'Colônia → Bruxelas 🇧🇪', 'Colônia → Amsterdã 🇳🇱', 'Dresden → Praga 🇨🇿'] },
  { p: '🇨🇿 Rep. Tcheca', itens: ['Praga → Viena 🇦🇹', 'Praga → Bratislava 🇸🇰', 'Praga → Budapeste 🇭🇺', 'Praga → Berlim 🇩🇪', 'Praga → Dresden 🇩🇪', 'Praga → Varsóvia 🇵🇱'] },
  { p: '🇭🇺 Hungria', itens: ['Budapeste → Viena 🇦🇹', 'Budapeste → Bratislava 🇸🇰', 'Budapeste → Praga 🇨🇿', 'Budapeste → Zagreb 🇭🇷', 'Budapeste → Ljubljana 🇸🇮', 'Budapeste → Belgrado 🇷🇸 ⛔'] },
  { p: '🇸🇰 Eslováquia', itens: ['Bratislava → Viena 🇦🇹', 'Bratislava → Budapeste 🇭🇺', 'Bratislava → Praga 🇨🇿'] },
  { p: '🇸🇮 Eslovênia', itens: ['Ljubljana → Trieste 🇮🇹', 'Ljubljana → Veneza 🇮🇹', 'Ljubljana → Viena 🇦🇹', 'Ljubljana → Budapeste 🇭🇺', 'Ljubljana → Zagreb 🇭🇷'] },
  { p: '🇭🇷 Croácia', itens: ['Zagreb → Ljubljana 🇸🇮', 'Zagreb → Budapeste 🇭🇺', 'Zagreb → Viena 🇦🇹', 'Zagreb → Belgrado 🇷🇸'] },
  { p: '🇧🇪 Bélgica', itens: ['Bruxelas → Paris 🇫🇷', 'Bruxelas → Londres 🇬🇧', 'Bruxelas → Amsterdã 🇳🇱', 'Bruxelas → Colônia 🇩🇪', 'Bruxelas → Luxemburgo 🇱🇺', 'Bruxelas → Praga 🇨🇿 🌙'] },
  { p: '🇳🇱 Países Baixos', itens: ['Amsterdã → Bruxelas 🇧🇪', 'Amsterdã → Paris 🇫🇷', 'Amsterdã → Londres 🇬🇧', 'Amsterdã → Berlim 🇩🇪', 'Amsterdã → Frankfurt 🇩🇪', 'Amsterdã → Colônia 🇩🇪'] },
  { p: '🇪🇸 Espanha', itens: ['Barcelona → Paris 🇫🇷', 'Barcelona → Lyon 🇫🇷', 'Barcelona → Marselha 🇫🇷'] },
  { p: '🇬🇧 Reino Unido', itens: ['Londres → Paris 🇫🇷', 'Londres → Bruxelas 🇧🇪', 'Londres → Amsterdã 🇳🇱'] },
];

(() => {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const corr = document.getElementById('trensCorredores');
  if (corr) {
    corr.innerHTML = TRENS_CORREDORES.map((c) => `
      <article class="corr">
        <div class="corr__head"><span class="corr__flags">${c.paises}</span><h4>${esc(c.n)}</h4></div>
        <p class="corr__trecho">${esc(c.trecho)}</p>
        <p class="corr__nota">${esc(c.nota)}</p>
      </article>`).join('');
  }

  const lig = document.getElementById('trensLigacoes');
  if (lig) {
    lig.innerHTML = TRENS_LIGACOES.map((g) => `
      <div class="combo-group">
        <h4>${esc(g.p)}</h4>
        <ul>${g.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      </div>`).join('');
  }
})();
