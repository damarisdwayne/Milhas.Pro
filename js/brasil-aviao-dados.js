const BR_AVIAO_TAGS = {
  cinema: { e: '🎬', l: 'Cenário de cinema' },
  ceu:    { e: '🌌', l: 'Céu estrelado' },
};

const BR_AVIAO_REGIOES = [
  {
    id: 'br-sertao-cariri',
    nome: 'Sertão & Cariri — o Nordeste de dentro',
    emoji: '🌵',
    resumo: 'O Nordeste que não é praia. Rocha, caatinga e céu limpo a duas horas do litoral que todo mundo já conhece — e onde a chuva quase não existe, o que muda tudo: o passeio não tem temporada ruim, só tem hora do dia certa.',
    paises: [
      {
        slug: 'pb-cabaceiras', nome: 'Cabaceiras & Lajedo de Pai Mateus', bandeira: '🌵',
        tags: ['natureza', 'cinema', 'ceu', 'historia', 'roadtrip'],
        resumo: 'Um campo de pedras redondas de tonelada cada, largadas em cima de uma laje de granito no meio da caatinga. É o município mais seco do Brasil — e foi justamente a chuva que não cai que transformou a cidade no maior set de cinema a céu aberto do Nordeste.',
        quando: 'Mai–ago · é quando o calor dá trégua e o céu fica mais limpo · não tem mês chuvoso pra evitar',
        transporte: { modo: '🚗', rotulo: 'Carro é obrigatório', texto: 'Cerca de 190 km de João Pessoa (2h30) ou 70 km de Campina Grande, pela BR-230 e depois PB-138, asfaltado. Pros lajedos, que são dentro de fazenda, é carro próprio ou guia local — não tem transporte público até lá.' },
        rotuloPortas: 'Portas de entrada',
        portas: [
          { c: 'JPA', n: 'João Pessoa · 2h30 de carro', t: 'porta' },
          { c: 'CPV', n: 'Campina Grande · 1h de carro', t: 'regional' },
        ],
        cidades: [
          { n: 'Lajedo de Pai Mateus', tags: ['natureza'], d: 'Centenas de matacões — blocos de granito arredondados de toneladas — espalhados em cima de uma laje aberta, alguns com pintura rupestre. A trilha é leve, cerca de 1,5 km com pouca inclinação, mas é sol de sertão sem sombra nenhuma: vá no fim da tarde. A Pedra do Capacete é o cartão-postal e o ponto do pôr do sol.' },
          { n: 'A lenda do Pai Mateus', tags: ['historia'], d: 'O nome vem de um eremita que, conta-se, viveu ali no século XVIII e atuava como curandeiro. É o tipo de história que explica por que o lugar tem nome de pessoa e não de acidente geográfico.' },
          { n: 'Roliúde Nordestina', tags: ['cinema'], d: 'A cidade virou set de cinema a céu aberto — "O Auto da Compadecida" é o mais conhecido dos filmes rodados ali. Tem letreiro estilo Hollywood na entrada e um Memorial Cinematográfico. A razão é econômica: com a chuva quase inexistente, a produção tem garantia de dias de sol e não estoura cronograma.' },
          { n: 'O céu', tags: ['ceu'], d: 'Mesma causa, outro efeito: ar seco e sem nuvem entrega um dos céus mais estrelados do país. Dormir no lajedo é metade do programa.' },
          { n: 'Centro histórico e a Saca de Lã', tags: ['historia'], d: 'O centrinho de Cabaceiras e a tradição do couro e da lã — a região é também a "capital do bode", e isso aparece no prato.' },
        ],
        hospedagem: 'O Hotel Fazenda Pai Mateus fica na fazenda privada de mais de 100 hectares onde estão os lajedos Pai Mateus e Manoel Souza, a cerca de 25 km de Cabaceiras. São 29 cabanas rústicas com ar-condicionado, minibar e varanda, e sem TV de propósito. Os passeios aos lajedos são contratados no próprio hotel, com guia local.',
        aviso: 'Sol de semiárido sem sombra: chapéu, protetor e muita água não são opcionais na trilha, e o horário importa mais que o mês — evite o miolo do dia o ano inteiro.',
      },
    ],
  },
];

window.DESTINOS = window.DESTINOS || { continentes: [], fotos: {}, tags: {} };
window.DESTINOS.continentes.push({
  id: 'brasil-aviao',
  nome: 'Brasil de avião',
  emoji: '✈️',
  resumo: 'Destino brasileiro que não dá pra fazer de carro num fim de semana — aqui a passagem entra na conta de novo. Lista em construção: entra o que eu quero fazer e não é Minas.',
  regioes: BR_AVIAO_REGIOES,
});
Object.assign(window.DESTINOS.tags, BR_AVIAO_TAGS);
