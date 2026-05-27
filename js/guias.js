/* ============================================================
 * GUIAS de ferramentas — dados + renderer (1 template pra todos)
 * Editar um tutorial = editar o objeto abaixo.
 * ============================================================ */
const GUIAS = {
  'seats-aero': {
    nome: 'Seats.aero', cat: 'Busca de award', badge: 'Freemium', url: 'https://seats.aero', idioma: 'Em inglês',
    oque: 'Cada programa mostra só a própria disponibilidade. O Seats.aero junta <strong>dezenas de programas numa busca só</strong> e te diz onde tem assento award — em segundos.',
    passos: [
      { t: 'Crie uma conta grátis', d: 'A versão grátis já mostra disponibilidade (com dados em cache e limite de buscas). A Pro libera busca ao vivo e alertas.' },
      { t: 'Abra a busca de disponibilidade', d: 'Preencha origem, destino, período e cabine.' },
      { t: 'Origem e destino', d: 'Use códigos IATA (ex: GRU → CDG). Dá pra buscar por região/aeroportos próximos pra ampliar.' },
      { t: 'Intervalo de datas amplo', d: 'Não fixe um dia só — use 30 a 60 dias. Disponibilidade award é escassa.' },
      { t: 'Filtre cabine e programa', d: 'Econômica/Executiva/Primeira, e por programa (Smiles, United pra Azul, Air France/KLM).' },
      { t: 'Leia o resultado', d: 'Mostra datas com assento, quantos lugares e qual programa cobra quanto. Clique pra ver detalhes do voo.' },
      { t: 'Confirme na cia e emita', d: 'Confirme no site do programa que o assento existe e emita na hora — award some em horas.' }
    ],
    dicas: [
      { i: '🔔', t: 'Alertas (Pro)', d: 'Crie alerta pra uma rota/cabine e seja avisado quando abrir assento.' },
      { i: '🗺️', t: 'Portas de entrada', d: 'Busque o continente (várias capitais) e complete com low-cost. Mais opções de award.' },
      { i: '✅', t: 'Confirme na fonte', d: 'É o radar, não a emissão. O dado pode estar em cache — confirme no programa.' }
    ]
  },
  'google-flights': {
    nome: 'Google Flights', cat: 'Busca em dinheiro', badge: 'Grátis', url: 'https://www.google.com/travel/flights',
    oque: 'Não busca tarifa award. Use pra <strong>descobrir</strong> rotas/datas baratas e <strong>comparar</strong> — se a passagem em dinheiro estiver barata, às vezes não vale gastar milha.',
    passos: [
      { t: 'Abra e preencha a rota', d: 'Origem e destino, ida e volta ou só ida.' },
      { t: 'Calendário de preços', d: 'Ao clicar nas datas, mostra o preço de cada dia. Flexibilidade economiza muito.' },
      { t: 'Gráfico de preços', d: 'Mostra a tendência e diz se o preço atual está alto, típico ou baixo.' },
      { t: 'Mapa "explorar"', d: 'Deixe o destino em branco e abra o mapa pra ver preços de vários lugares.' },
      { t: 'Acompanhar preço', d: 'Ligue o acompanhamento — o Google te avisa por email quando subir/cair.' },
      { t: 'Multi-cidade', d: 'Monte rotas com escala estratégica (porta de entrada + low-cost).' },
      { t: 'Compare com milhas', d: 'Anote o preço e compare com milhas × milheiro + taxas no termômetro.' }
    ],
    dicas: [
      { i: '🗺️', t: 'Mapa explorar', d: 'Jeito mais rápido de achar o destino internacional mais barato num mês inteiro.' },
      { i: '🔔', t: 'Acompanhe várias rotas', d: 'O email do Google vira seu radar de promoção em dinheiro.' },
      { i: '⚖️', t: 'Dinheiro nem sempre perde', d: 'Em rotas curtas/nacionais o dinheiro costuma ganhar da milha.' }
    ]
  },
  'awardhacker': {
    nome: 'AwardHacker', cat: 'Comparação', badge: 'Grátis', url: 'https://www.awardhacker.com', idioma: 'Em inglês',
    oque: 'Pra uma mesma rota, lista <strong>quantas milhas cada programa cobra</strong>. É um ponto de partida pra escolher a moeda mais barata — não confirma disponibilidade.',
    passos: [
      { t: 'Abra o site', d: 'Não precisa de cadastro pra busca básica.' },
      { t: 'Origem e destino', d: 'Códigos IATA (ex: GRU → MAD).' },
      { t: 'Escolha a cabine', d: 'Econômica, executiva ou primeira — os custos mudam bastante.' },
      { t: 'Leia a lista de programas', d: 'Mostra quanto cada programa cobra, do mais barato ao mais caro.' },
      { t: 'Cruze com o que você consegue', d: 'O mais barato só vale se você consegue aquele programa (transferência/bônus).' },
      { t: 'Confirme custo e disponibilidade', d: 'Dados podem estar desatualizados — confirme no programa e no Seats.aero.' }
    ],
    dicas: [
      { i: '⚠️', t: 'Dados envelhecem', d: 'Trate o número como estimativa, não verdade final.' },
      { i: '🔍', t: 'Não mostra disponibilidade', d: 'Diz quanto custaria, não se tem assento. Isso é no Seats.aero.' },
      { i: '🇧🇷', t: 'Foco internacional', d: 'Pros brasileiros (Smiles, LATAM, Azul), confirme direto no programa.' }
    ]
  },
  'seat-spy': {
    nome: 'Seat Spy', cat: 'Busca de award', badge: 'Freemium', url: 'https://seatspy.com', idioma: 'Em inglês',
    oque: 'Ótimo pra <strong>monitorar cias específicas</strong> num calendário. No Brasil brilha pra achar executiva da Air France/KLM (Smiles) e da United (Azul).',
    passos: [
      { t: 'Escolha a companhia', d: 'Ex: Air France/KLM (pra Smiles) ou United (pra Azul).' },
      { t: 'Informe a rota', d: 'Origem e destino (ex: GRU → CDG, GIG → AMS).' },
      { t: 'Filtre cabine: Executiva', d: 'É aqui que entrega valor — achar business aberta, o resgate mais difícil.' },
      { t: 'Calendário de disponibilidade', d: 'Marca os dias com assento executiva aberto.' },
      { t: 'Configure alerta (pago)', d: 'Executiva some rápido — o alerta te avisa quando abrir.' },
      { t: 'Emita pela Smiles/Azul', d: 'Air France/KLM via Smiles, United via Azul. Confirme e emita na hora.' }
    ],
    dicas: [
      { i: '🔔', t: 'Alerta é o pulo do gato', d: 'O real valor está no alerta pago, que pega o assento quando abre.' },
      { i: '🔄', t: 'Combine com Seats.aero', d: 'Seats.aero pra varredura ampla, Seat Spy pra monitorar a cia específica.' },
      { i: '✅', t: 'Confirme no programa', d: 'A emissão é na Smiles/Azul. Confirme lá antes de transferir.' }
    ]
  },
  'ita-matrix': {
    nome: 'ITA Matrix', cat: 'Busca avançada', badge: 'Grátis', url: 'https://matrix.itasoftware.com', idioma: 'Em inglês',
    oque: 'O motor de busca por trás do Google Flights, com <strong>filtros avançados</strong> que o Google esconde. Não vende passagem — você acha aqui e emite em outro lugar.',
    passos: [
      { t: 'Abra o Matrix', d: 'Não precisa de login pra buscar.' },
      { t: 'Origem e destino', d: 'Aceita múltiplos aeroportos separados por vírgula (ex: GRU, VCP, GIG).' },
      { t: 'Datas ou calendário flexível', d: 'Use o modo de calendário pra ver o mês inteiro por preço.' },
      { t: 'Use os filtros avançados', d: 'Filtre por cias, número de escalas, duração, e até por rotas/códigos específicos.' },
      { t: 'Analise as opções', d: 'Ele mostra combinações que o Google Flights não exibe — ótimo pra rotas criativas.' },
      { t: 'Emita no site da cia', d: 'O Matrix não vende. Copie a rota/datas e emita no site da companhia ou agência.' }
    ],
    dicas: [
      { i: '🧩', t: 'Rotas criativas', d: 'Bom pra montar conexões e portas de entrada que outros buscadores não acham.' },
      { i: '💱', t: 'Moeda de venda', d: 'Dá pra mudar o país/moeda de emissão pra achar tarifas mais baratas.' },
      { i: '🎓', t: 'Curva de aprendizado', d: 'É mais técnico — vale assistir um tutorial em vídeo na primeira vez.' }
    ]
  },
  'expertflyer': {
    nome: 'ExpertFlyer', cat: 'Busca avançada', badge: 'Pago', url: 'https://www.expertflyer.com', idioma: 'Em inglês',
    oque: 'Mostra o <strong>inventário real de assentos por classe tarifária</strong> — dá pra ver se a classe award (X, U, I, O) está aberta antes de ligar pra cia.',
    passos: [
      { t: 'Assine o plano', d: 'É pago. Faz mais sentido pra quem emite com parceiros via call center.' },
      { t: 'Vá em "Award & Upgrade"', d: 'Use a busca de disponibilidade award/upgrade.' },
      { t: 'Informe rota, data e cia', d: 'Específico — uma cia, uma rota, uma data por vez.' },
      { t: 'Escolha a classe tarifária', d: 'Consulte a classe award da cia (ex: X, U, I, O). Ele diz quantos assentos têm.' },
      { t: 'Confirme antes de ligar', d: 'Sabendo que a classe está aberta, você liga na cia/programa com segurança.' }
    ],
    dicas: [
      { i: '🎯', t: 'Pra emissão com parceiro', d: 'Útil quando o site do programa não mostra a disponibilidade do parceiro.' },
      { i: '🔔', t: 'Alertas de assento', d: 'Crie alerta pra ser avisado quando abrir a classe que você quer.' },
      { i: '💰', t: 'Só se compensa', d: 'Pra uso casual, Seats.aero/Seat Spy resolvem. ExpertFlyer é pra quem usa muito.' }
    ]
  },
  'point-me': {
    nome: 'Point.me', cat: 'Análise', badge: 'Pago', url: 'https://point.me', idioma: 'Em inglês',
    oque: 'Busca e compara resgates award com interface amigável. Foco em programas dos <strong>EUA</strong>, mas cobre muitos parceiros globais.',
    passos: [
      { t: 'Assine o serviço', d: 'É por assinatura — vale mais pra quem tem pontos de bancos americanos (Amex, Chase).' },
      { t: 'Busque a rota', d: 'Origem, destino, datas e cabine.' },
      { t: 'Veja as melhores opções', d: 'Ele lista os resgates ordenados por custo e mostra qual programa usar.' },
      { t: 'Siga o passo a passo de emissão', d: 'Indica em qual programa transferir e como emitir.' }
    ],
    dicas: [
      { i: '🇺🇸', t: 'Brilha com pontos dos EUA', d: 'Se você não tem Amex/Chase, o ganho é menor que o custo da assinatura.' },
      { i: '🔄', t: 'Compare com o Seats.aero', d: 'Pra varredura grátis, Seats.aero já entrega muito.' }
    ]
  },
  'melhores-destinos': {
    nome: 'Melhores Destinos', cat: 'Alertas (Brasil)', badge: 'Grátis', url: 'https://www.melhoresdestinos.com.br',
    oque: 'O maior caçador de promoções e erros de tarifa do Brasil. Quando some uma passagem barata, costuma aparecer aqui <strong>primeiro</strong>.',
    passos: [
      { t: 'Acesse e cadastre o email', d: 'Assine a newsletter pra receber as promoções.' },
      { t: 'Ative as notificações', d: 'Siga nas redes / ative push pra ser avisado em tempo real.' },
      { t: 'Filtre pela sua origem', d: 'Procure promoções saindo do seu aeroporto ou de um hub próximo.' },
      { t: 'Aja rápido', d: 'Erro de tarifa some em horas. Quando aparecer, emita antes de pesquisar demais.' }
    ],
    dicas: [
      { i: '⚡', t: 'Velocidade ganha', d: 'Em erro de tarifa, quem hesita perde. Tenha cadastro/cartão prontos.' },
      { i: '📍', t: 'Considere portas de entrada', d: 'Promoção pode ser de outro aeroporto — vale um voo doméstico pra alcançar.' }
    ]
  },
  'passageiro-de-primeira': {
    nome: 'Passageiro de Primeira', cat: 'Notícias (Brasil)', badge: 'Grátis', url: 'https://passageirodeprimeira.com',
    oque: 'Notícias e análises do mundo de milhas — e o mais importante, acompanha os <strong>bônus de transferência</strong>, que é o gatilho do workflow.',
    passos: [
      { t: 'Acesse diariamente', d: 'O conteúdo é de notícia — o hábito de checar é o que vale.' },
      { t: 'Procure "bônus de transferência"', d: 'Veja os bônus ativos (Livelo→Smiles, etc.) e os percentuais.' },
      { t: 'Aja no gatilho certo', d: 'Quando aparecer 80%+ Livelo→Smiles (ou 30%+ LATAM), é hora de transferir.' },
      { t: 'Leia as análises de promo', d: 'Eles avaliam se compra de pontos/clube vale a pena no momento.' }
    ],
    dicas: [
      { i: '🔔', t: 'Acompanhe o gatilho', d: 'É a fonte pra saber QUANDO transferir — combine com o termômetro pra saber o custo.' },
      { i: '📰', t: 'É leitura, não ferramenta', d: 'Não tem busca — o valor está em estar informado antes dos outros.' }
    ]
  },
  'comparemania': {
    nome: 'Comparemania', cat: 'Comparador (Brasil)', badge: 'Grátis', url: 'https://www.comparemania.com.br',
    oque: 'Compara <strong>cashback, bônus de transferência e gift cards</strong> entre várias plataformas num lugar só.',
    passos: [
      { t: 'Acesse antes de comprar', d: 'Use como checagem antes de comprar pontos ou reservar hotel.' },
      { t: 'Busque a loja/serviço', d: 'Veja qual plataforma de cashback paga mais pra aquela compra.' },
      { t: 'Cheque bônus de transferência', d: 'Veja se há bônus ativo entre programas.' },
      { t: 'Escolha o melhor caminho', d: 'Some cashback + bônus pra reduzir o custo real da compra.' }
    ],
    dicas: [
      { i: '🏨', t: 'Bom pra hospedagem', d: 'Antes de reservar hotel, veja o cashback ativo aqui.' },
      { i: '🔁', t: 'Empilhe benefícios', d: 'Cashback + gift card + pontos no cartão na mesma compra.' }
    ]
  },
  'livelo': {
    nome: 'Livelo', cat: 'Hub de pontos', badge: 'Grátis', url: 'https://www.livelo.com.br',
    oque: 'O maior hub de pontos do Brasil (Bradesco, BB, Santander). É daqui que saem as <strong>transferências bonificadas</strong> pra Smiles, Azul e LATAM.',
    passos: [
      { t: 'Acumule pontos', d: 'Use cartões que pontuam Livelo e compre via Shopping Livelo (pontos extras).' },
      { t: 'NÃO transfira no impulso', d: 'Pontos parados valem mais esperando — segure até o bônus.' },
      { t: 'Espere o bônus de transferência', d: 'Mín 30% pra LATAM, 80% pra Smiles/Azul. Acompanhe no Passageiro de Primeira.' },
      { t: 'Transfira em lote', d: 'Quando o bônus rolar, transfira de uma vez pro programa escolhido.' },
      { t: 'Emita no programa', d: 'Nunca emita pela Livelo — sempre transfira e emita no programa aéreo.' }
    ],
    dicas: [
      { i: '🛒', t: 'Shopping Livelo', d: 'Compre via Shopping Livelo antes da loja pra ganhar pontos extras (5-30x).' },
      { i: '📅', t: 'Timing é tudo', d: 'O bônus de 80% quase dobra o valor dos pontos — espere por ele.' },
      { i: '✈️', t: 'Flying Blue', d: 'Também transfere pra Flying Blue (3,5:1) — só com bônus, senão é caro.' }
    ]
  },
  'esfera': {
    nome: 'Esfera', cat: 'Hub de pontos', badge: 'Grátis', url: 'https://www.esfera.com.vc',
    oque: 'Hub de pontos do Santander. Transfere pra Smiles e LATAM, e é a principal porta pra <strong>Iberia (Avios)</strong> e American no Brasil.',
    passos: [
      { t: 'Acumule com cartões Santander', d: 'E compre via Shopping Esfera (parceiros chegam a 30x).' },
      { t: 'Espere o bônus', d: 'Igual à Livelo — segure os pontos até um bônus de transferência bom.' },
      { t: 'Escolha o destino', d: 'Smiles, LATAM, Iberia (Avios) ou American conforme seu objetivo.' },
      { t: 'Transfira e emita', d: 'Transfira no bônus e emita no programa de destino.' }
    ],
    dicas: [
      { i: '🇪🇸', t: 'Porta pra Iberia', d: 'É o caminho mais comum pra juntar Avios e emitir Europa em executiva.' },
      { i: '🇺🇸', t: 'American em promo', d: 'Transferência Esfera → AAdvantage rola só em promoções raras — fique de olho.' }
    ]
  },
  'pagol': {
    nome: 'Pagol', cat: 'Compra de milhas', badge: 'Pago', url: 'https://www.pagol.com.br',
    oque: 'Plataforma pra <strong>comprar milhas Smiles</strong> com condições/parcelamento melhores que a compra direta no programa.',
    passos: [
      { t: 'Veja o custo do milheiro', d: 'Calcule quanto você está pagando por 1.000 milhas na oferta.' },
      { t: 'Compare com a promo da Smiles', d: 'Às vezes a compra direta com bônus da Smiles é melhor.' },
      { t: 'Cheque o "preço justo"', d: 'Só compre se o milheiro Smiles ficar dentro de R$ 14–16 (ver termômetro).' },
      { t: 'Finalize a compra', d: 'As milhas caem na sua conta Smiles pra você emitir.' }
    ],
    dicas: [
      { i: '🧮', t: 'Faça a conta sempre', d: 'Comprar milha só vale se sair mais barato que a passagem em dinheiro.' },
      { i: '🎯', t: 'Tenha rota em mente', d: 'Não compre sem saber onde vai usar — milhas vencem.' }
    ]
  },
  'hotmilhas': {
    nome: 'HotMilhas', cat: 'Compra/venda', badge: 'Marketplace', url: 'https://www.hotmilhas.com.br',
    oque: 'Marketplace pra <strong>vender</strong> milhas que vão vencer ou <strong>comprar</strong> de quem está vendendo.',
    passos: [
      { t: 'Pra vender milhas paradas', d: 'Cadastre a venda das milhas que iriam expirar — vira dinheiro.' },
      { t: 'Pra comprar', d: 'Compare o custo com transferir/comprar direto no programa.' },
      { t: 'Confira a reputação', d: 'Em qualquer marketplace de milhas, veja avaliações antes de fechar.' },
      { t: 'Feche e acompanhe', d: 'Acompanhe a emissão/transferência até concluir.' }
    ],
    dicas: [
      { i: '⏰', t: 'Salva milhas que vencem', d: 'Melhor vender por algo do que perder tudo no vencimento.' },
      { i: '⚖️', t: 'Compare antes de comprar', d: 'Comprar aqui só vale se for mais barato que transferir com bônus.' }
    ]
  },
  'flyertalk': {
    nome: 'FlyerTalk', cat: 'Comunidade', badge: 'Grátis', url: 'https://www.flyertalk.com', idioma: 'Em inglês',
    oque: 'Fórum internacional gigante. Os tópicos por programa têm informação que aparece <strong>antes de virar notícia</strong>.',
    passos: [
      { t: 'Encontre o tópico do programa', d: 'Busque o fórum da cia/programa que te interessa.' },
      { t: 'Leia os tópicos fixados', d: 'Os "sticky" no topo costumam ter as regras e dicas mais úteis.' },
      { t: 'Acompanhe em silêncio', d: 'Dá pra aprender muito só lendo — sweet spots, mudanças de regra.' },
      { t: 'Pergunte se travar', d: 'Crie conta e pergunte num tópico específico se precisar.' }
    ],
    dicas: [
      { i: '🔎', t: 'Use a busca interna', d: 'Quase tudo já foi perguntado — busque antes de postar.' },
      { i: '🇬🇧', t: 'Em inglês', d: 'O conteúdo é global, então é em inglês — vale o esforço.' }
    ]
  },
  'reddit-awardtravel': {
    nome: 'r/awardtravel', cat: 'Comunidade', badge: 'Grátis', url: 'https://www.reddit.com/r/awardtravel', idioma: 'Em inglês',
    oque: 'Comunidade do Reddit que ajuda a planejar resgates específicos. Você posta sua situação e a galera sugere o melhor caminho.',
    passos: [
      { t: 'Leia as regras e o wiki', d: 'Tem guias fixados e um formato pra pedir ajuda.' },
      { t: 'Monte seu post', d: 'Descreva origem, destino, datas, pontos que você tem e cabine desejada.' },
      { t: 'Receba sugestões', d: 'Pessoas experientes apontam o programa e a rota mais eficiente.' },
      { t: 'Confirme e emita', d: 'Valide a disponibilidade no Seats.aero e emita.' }
    ],
    dicas: [
      { i: '📝', t: 'Quanto mais detalhe, melhor', d: 'Posts vagos recebem respostas vagas. Dê os números.' },
      { i: '🇬🇧', t: 'Em inglês', d: 'A comunidade é global — escreva em inglês pra ter mais respostas.' }
    ]
  },
  'one-mile-at-a-time': {
    nome: 'One Mile at a Time', cat: 'Blog', badge: 'Grátis', url: 'https://onemileatatime.com', idioma: 'Em inglês',
    oque: 'Referência mundial em milhas e cabines premium. Os <strong>reviews de executiva/primeira</strong> ajudam a decidir o que vale resgatar.',
    passos: [
      { t: 'Procure o review da cabine', d: 'Antes de gastar muitas milhas, leia o review da executiva/primeira da cia.' },
      { t: 'Veja os guias de programa', d: 'Tem guias detalhados de sweet spots de cada programa.' },
      { t: 'Acompanhe as notícias', d: 'Mudanças de regra e promoções aparecem cedo por lá.' }
    ],
    dicas: [
      { i: '⭐', t: 'Vale o resgate?', d: 'Use os reviews pra não gastar 200k milhas numa cabine medíocre.' },
      { i: '🇺🇸', t: 'Foco EUA, em inglês', d: 'Conteúdo global com viés americano — mas os reviews são universais.' }
    ]
  }
};

/* ----- renderer ----- */
(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const g = GUIAS[id];
  const root = document.getElementById('guia-root');
  if (!root) return;

  if (!g) {
    root.innerHTML = '<p class="v-empty-msg" style="text-align:center;color:var(--text-mute);padding:3rem">Guia não encontrado. <a href="sites-secretos.html" class="grad-text">Voltar pras ferramentas</a></p>';
    return;
  }

  document.title = `Como usar ${g.nome} — Milhas.pro`;

  const metaTags = [
    `💵 ${g.badge}`,
    `🌐 ${g.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}`,
    g.idioma ? `🇬🇧 ${g.idioma}` : null
  ].filter(Boolean).map(m => `<span>${m}</span>`).join('');

  const passos = g.passos.map((p, i) => `
    <div class="timeline__item reveal">
      <div class="timeline__dot">${i + 1}</div>
      <div class="timeline__body"><h3>${p.t}</h3><p>${p.d}</p></div>
    </div>`).join('');

  const dicas = g.dicas.map(d => `
    <article class="card reveal">
      <div class="card__icon">${d.i}</div>
      <h3>${d.t}</h3>
      <p>${d.d}</p>
    </article>`).join('');

  root.innerHTML = `
    <section class="page-hero">
      <span class="kicker">📖 Tutorial · ${g.cat}</span>
      <h1>Como usar o <span class="grad-text">${g.nome}</span></h1>
      <p>${g.oque}</p>
      <div class="guia-meta">${metaTags}</div>
    </section>

    <section class="section">
      <a href="sites-secretos.html" class="guia-back">← voltar pras ferramentas</a>

      <div class="section__head reveal" style="margin:1rem 0 1.5rem; text-align:left; max-width:none">
        <span class="kicker">Passo a passo</span>
        <h2>Como usar na prática</h2>
      </div>
      <div class="timeline">${passos}</div>

      <div class="section__head reveal" style="margin:3rem 0 1.5rem; text-align:left; max-width:none">
        <span class="kicker">Dicas</span>
        <h2>Pra extrair o máximo</h2>
      </div>
      <div class="cards">${dicas}</div>

      <div class="cta-row reveal" style="margin-top:3rem">
        <a href="${g.url}" target="_blank" rel="noopener" class="btn btn--primary">Abrir ${g.nome} ↗</a>
        <a href="estrategias.html#workflow" class="btn btn--ghost">Ver o workflow completo</a>
      </div>
    </section>
  `;

  // dispara o scroll-reveal pros elementos recém-inseridos
  if (window.MilhasPro && typeof window.MilhasPro.refreshReveal === 'function') {
    window.MilhasPro.refreshReveal();
  } else {
    root.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }
})();
