/* ============================================================
 * GUIAS de ferramentas — dados + renderer (1 template pra todos)
 * Editar um tutorial = editar o objeto abaixo.
 * ============================================================ */
const GUIAS = {
  'seats-aero': {
    nome: 'Seats.aero', cat: 'Busca de award', badge: 'Freemium', url: 'https://seats.aero', idioma: 'Em inglês',
    oque: 'Cada programa mostra só a própria disponibilidade. O Seats.aero junta <strong>dezenas de programas numa busca só</strong> e te diz onde tem assento award — em segundos. É a ferramenta central do workflow profissional.',
    passos: [
      { t: 'Crie uma conta grátis', d: 'A versão grátis já mostra disponibilidade (com dados em cache e limite de buscas). A Pro libera busca ao vivo, alertas ilimitados e mais programas.' },
      { t: 'Decida: Search ou Explore?', d: '<strong>Search</strong> = você já sabe a rota (ex: GRU → MAD ±7 dias). <strong>Explore</strong> = você é flexível e quer descobrir oportunidades por região.<br><br><strong>Iniciante:</strong> ignore o Explore por enquanto. Use só Search com rotas que te interessam (GRU → CDG, GRU → JFK) e observe quais programas aparecem repetidamente. Em 1-2 semanas você internaliza qual programa domina cada nicho — aí o Explore passa a fazer sentido.' },
      { t: 'SEARCH — rota específica', d: 'Use quando tem destino e datas em mente. Preenche origem, destino, janela (recomendo 30–60 dias) e cabine. Aceita códigos IATA (GRU, CDG) ou nome do aeroporto. Resultado: lista de datas com assento award + qual programa cobra quanto.' },
      { t: 'EXPLORE — radar por região', d: 'Use quando você está flexível. Escolhe <strong>continente de origem + continente de destino + cabine + UM programa de milhas</strong>. Ele varre TUDO que aquele programa consegue emitir entre as duas regiões. Vira um mapa de oportunidades.' },
      { t: 'Qual programa colocar no Explore?', d: 'Esse é o passo que trava 90% das pessoas. Veja na próxima caixa (dicas) a recomendação por perfil — mas a regra geral é: comece pelos programas que você consegue acumular fácil no Brasil (Iberia/Avios, Flying Blue) e os que cobram barato (Aeroplan, LifeMiles, AAdvantage).' },
      { t: 'Compare a MESMA rota em 3 programas', d: 'O mesmo voo da Lufthansa pode custar <strong>55k via LifeMiles</strong>, <strong>70k via Aeroplan</strong> e <strong>110k via United</strong>. Mesmo assento. Sempre cruze 2–3 programas antes de decidir onde emitir.' },
      { t: 'Filtre e leia o resultado', d: 'Filtros úteis: cabine, classe (Saver/Standard), cias, duração máxima, número de paradas. O resultado mostra a data, o operador (quem voa) e o programa emissor (onde você gasta milhas) — esses dois quase sempre são diferentes.' },
      { t: 'Confirme no site do programa', d: 'Antes de transferir qualquer ponto, abre o site do programa emissor e cruza a data. O cache do seats.aero pode mostrar assento que já sumiu, ou esconder assento que existe.' },
      { t: 'Configure ALERTAS pra rotas-alvo', d: 'Esse é o recurso mais subutilizado da ferramenta. Crie alerta com rota + cabine + teto de milhas + janela. Quando aparecer assento batendo o filtro, ele te avisa por email/push. Premium award some em horas — sem alerta você depende de sorte.' },
      { t: 'Transfira pontos e EMITE NA HORA', d: 'Sequência sagrada: achou no seats.aero → confirmou no programa → transferiu Livelo/Esfera → emitiu. Não dorme com o assento "guardado" — ele não existe até estar no seu nome.' }
    ],
    dicas: [
      { i: '🎯', t: 'Programas top pra brasileiros (Explore)', d: '<strong>Iberia / Avios</strong> (Esfera + Livelo transferem; ótimo pra Europa e pro hack LATAM). <strong>Flying Blue</strong> (SkyTeam, Promo Rewards). <strong>Aeroplan</strong> (Star Alliance inteira, taxas baixas). <strong>LifeMiles</strong> (Star Alliance, promo de compra agressiva). <strong>AAdvantage</strong> (Qatar Qsuite barata, oneworld). <a href="seats-aero-guia-br.html" style="color:var(--accent)">→ Veja o guia visual completo, com prints anotados e tabela-ponte BR</a>' },
      { i: '🇧🇷', t: 'Achou no seats.aero — mas consegue emitir?', d: 'Encontrar disponibilidade NÃO garante emissão. Existem 3 camadas: (1) o assento existe, (2) qual programa emite, e (3) <strong>você consegue chegar nesse programa pelo Brasil</strong>. A camada 3 é onde a maioria trava — programas como Virgin Atlantic, United e Alaska são quase inacessíveis daqui. Veja a <a href="estrategias.html#estrategia-br" style="color:var(--accent)">tabela de acessibilidade BR completa →</a>' },
      { i: '🧭', t: 'O grande conceito: operadora ≠ emissora', d: 'A cia que voa NÃO precisa ser onde você emite. Voo da Lufthansa pode ser emitido em TAP, Smiles, Azul, Aeroplan, LifeMiles, United — cada um cobra diferente. O seats.aero existe pra te mostrar isso. Estude esse conceito em <a href="estrategias.html#aliancas" style="color:var(--accent)">Estratégias → Alianças</a>.' },
      { i: '🚫', t: 'NÃO cobre LATAM Pass', d: 'O seats.aero não indexa LATAM Pass diretamente. Pra emitir voos LATAM com Avios, selecione <strong>Alaska Mileage Plan</strong> nele (mostra LATAM Premium Business barato) e cruze datas no site da Iberia — o famoso <a href="programas.html#iberia" style="color:var(--accent)">hack Iberia</a>. Pra LATAM Pass puro, use <strong>AwardFares</strong> ou <strong>PointsYeah</strong>.' },
      { i: '⚠️', t: 'O cache mente — sempre confirme', d: 'A ferramenta indexa parceiros em ciclos. O que ela mostra pode já não existir mais, ou existir e não aparecer ainda. Regra de ouro: <strong>achou → confirma no programa → SÓ ENTÃO transfere</strong>. Pontos transferidos não voltam.' },
      { i: '🔒', t: 'Pontos parados desvalorizam', d: 'Livelo/Esfera = cofre seguro (vencem em 2 anos mas você renova; razão muda com bônus). Programa aéreo = pontos congelados. Se a tabela sobe ou o programa desvaloriza, você perde. Por isso nunca transfere ANTES de ter assento na mão.' },
      { i: '🗺️', t: 'Pense em continente, não cidade', d: 'No Explore, "Europe" abre todas as capitais. Combine com voo low-cost intra-continente (Ryanair, Vueling) pra chegar ao destino final. Ver <a href="estrategias.html#portas" style="color:var(--accent)">Portas de entrada</a>.' },
      { i: '📅', t: 'Janela ampla é mandatório', d: 'Datas rígidas matam 90% das chances. Sempre busque com 30–60 dias de flexibilidade. Award não funciona com "quero exatamente dia X".' },
      { i: '💸', t: 'Vale a pena pagar Pro?', d: 'Grátis: dados em cache, alertas limitados. Pro: busca ao vivo, alertas ilimitados, mais programas indexados. Se você caça executiva 1x por ano, uma emissão paga vários meses de assinatura.' }
    ]
  },
  'pointsyeah': {
    nome: 'PointsYeah', cat: 'Busca de award', badge: 'Freemium', url: 'https://pointsyeah.com', idioma: 'Em inglês',
    oque: 'Motor de busca award concorrente direto do seats.aero. Captura disponibilidade que o outro perde — vale como <strong>segunda fonte</strong> antes de transferir pontos.',
    passos: [
      { t: 'Crie conta grátis', d: 'Plano grátis libera buscas básicas; pago expande alertas e programas.' },
      { t: 'Preencha rota e cabine', d: 'Origem, destino, janela de datas e classe (econômica/executiva/primeira).' },
      { t: 'Compare com seats.aero', d: 'Use os dois lado a lado. Quando ambos mostram disponibilidade, a confiança aumenta.' },
      { t: 'Filtre por programa', d: 'Cobre programas que o seats.aero não cobre bem (inclusive alguns latino-americanos).' },
      { t: 'Confirme no site do programa', d: 'Mesma regra: achou aqui → confirma na cia → só então transfere.' }
    ],
    dicas: [
      { i: '🔁', t: 'Segunda fonte é regra', d: 'Antes de transferir pontos, cheque seats.aero E PointsYeah. Se os dois mostram, é mais seguro.' },
      { i: '🇧🇷', t: 'Cobre mais coisa BR', d: 'Tem indexação melhor pra alguns programas relevantes pro Brasil que o seats.aero ignora.' }
    ]
  },
  'awardfares': {
    nome: 'AwardFares', cat: 'Busca de award', badge: 'Freemium', url: 'https://awardfares.com', idioma: 'Em inglês',
    oque: 'Cobre o <strong>gap mais doloroso</strong> do seats.aero: pesquisa disponibilidade direta em <strong>LATAM Pass, Smiles, Flying Blue</strong> e outros. Essencial pra brasileiro.',
    passos: [
      { t: 'Crie conta', d: 'Grátis pra começar; planos pagos liberam mais buscas e alertas.' },
      { t: 'Selecione o programa', d: 'A grande sacada: tem LATAM Pass como filtro. Também Smiles, Flying Blue, Avios e dezenas de outros.' },
      { t: 'Preencha rota + datas amplas', d: 'Origem, destino, janela. Igual aos outros, sem janela ampla não vale a pena.' },
      { t: 'Veja a tabela por dia', d: 'Mostra um calendário com o custo em milhas e taxas dia a dia — ótimo pra achar dia mais barato.' },
      { t: 'Confirme e emita', d: 'Cruze no site oficial e emita.' }
    ],
    dicas: [
      { i: '🔴', t: 'A ferramenta pra LATAM Pass', d: 'Se você usa LATAM, AwardFares é tão essencial quanto seats.aero é pros parceiros internacionais.' },
      { i: '📊', t: 'Calendário é o forte', d: 'A visão de calendário com preço dia a dia é melhor que a do seats.aero pra programas BR.' }
    ]
  },
  'roame': {
    nome: 'Roame', cat: 'Busca de award', badge: 'Freemium', url: 'https://roame.travel', idioma: 'Em inglês',
    oque: 'Motor de award search com <strong>filtro forte por aliança</strong> e cabine. Complementa seats.aero e PointsYeah pra ter uma terceira leitura.',
    passos: [
      { t: 'Crie conta', d: 'Plano grátis com limitações; pago libera alertas e mais.' },
      { t: 'Busque por rota ou aliança', d: 'Você pode filtrar tipo "tudo que Star Alliance tem disponível entre América do Sul e Europa".' },
      { t: 'Combine com Explore do seats.aero', d: 'Roame é forte na visão por aliança; seats.aero na visão por programa. Os dois juntos cobrem mais.' },
      { t: 'Confirme antes de emitir', d: 'Mesma regra sagrada — site oficial sempre.' }
    ],
    dicas: [
      { i: '🤝', t: 'Visão por aliança', d: 'Quando você quer "qualquer Star Alliance" sem se importar com qual cia, Roame entrega isso rápido.' },
      { i: '🔁', t: 'Terceira fonte', d: 'Cruzar 3 motores (seats.aero + PointsYeah + Roame) eleva muito a confiabilidade antes de transferir.' }
    ]
  },
  'awardwallet': {
    nome: 'AwardWallet', cat: 'Gestão de saldos', badge: 'Freemium', url: 'https://awardwallet.com', idioma: 'Em inglês',
    oque: 'Agrega <strong>saldos de TODOS</strong> seus programas de milhas/pontos num lugar só. Te avisa quando milha vai vencer. Indispensável pra quem joga em 5+ programas.',
    passos: [
      { t: 'Crie conta', d: 'Grátis com a maioria dos programas. Plano Plus libera os programas "premium" (alguns aéreos que travam scraping).' },
      { t: 'Conecte seus programas', d: 'Adicione logins de Smiles, LATAM, Azul, TAP, Iberia, Flying Blue, Livelo, Esfera etc. Ele puxa o saldo automaticamente.' },
      { t: 'Veja tudo num painel', d: 'Total de pontos por programa, histórico de mudanças, datas de expiração.' },
      { t: 'Ative os alertas de vencimento', d: 'Te avisa X dias antes de uma milha vencer — você renova ou usa a tempo.' },
      { t: 'Use o calculador de valor', d: 'Ele estima o valor em dinheiro do seu portfólio de pontos. Bom pra dimensionar o "patrimônio".' }
    ],
    dicas: [
      { i: '⏰', t: 'Evita milhas vencendo', d: 'O alerta de expiração já vale a ferramenta sozinho. Milha vencida é dinheiro perdido.' },
      { i: '🔐', t: 'Segurança dos logins', d: 'Use senha forte e 2FA na conta do AwardWallet — você tá centralizando muitos logins.' },
      { i: '🇧🇷', t: 'Programas BR', d: 'Suporta Smiles, LATAM, Azul, Livelo, Esfera. Cobertura BR melhorou bastante nos últimos anos.' }
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
  'nu-viagens': {
    nome: 'Nu Viagens', cat: 'Reserva e acúmulo', badge: 'Grátis (exige Ultravioleta)', url: 'https://nubank.com.br/ultravioleta/nu-viagens',
    oque: 'É a plataforma de viagens do <strong>Nubank</strong>, dentro do próprio app — exclusiva pra quem tem o cartão <strong>Ultravioleta</strong>. O grande atrativo pra hospedagem: reservas de hotel rendem <strong>9 pontos por dólar (ou 5% de cashback)</strong>, contra ~2,2 pts/US$ (ou 1,25%) de uma compra comum. Você ainda parcela em até 8x sem juros e ganha seguro viagem, eSIM e proteção de preço de brinde.',
    passos: [
      { t: 'Tenha o cartão Ultravioleta', d: 'O Nu Viagens NÃO aparece pra qualquer conta Nubank — é benefício exclusivo do Ultravioleta (o cartão black, com anuidade isentável conforme o gasto mensal). Sem ele, pule esta ferramenta.' },
      { t: 'Decida: pontos OU cashback', d: 'Essa escolha é uma configuração da conta e vale pra tudo. <strong>Pra quem joga o jogo das milhas, pontos quase sempre ganham</strong>: 9 pts/US$ no Nu Viagens viram passagem com valor por ponto bem maior que os 5% de cashback. Cashback só compensa se você não pretende usar os pontos.' },
      { t: 'Abra o Nu Viagens no app', d: 'No app do Nubank, vá em Nu Viagens → Hotéis. Tudo é resolvido ali dentro, sem site externo nem outro login.' },
      { t: 'Busque a hospedagem', d: 'Informe a cidade e as datas de check-in e check-out. Ele lista as ofertas com preço e localização.' },
      { t: 'Escolha o quarto e a política de cancelamento', d: 'Abra o hotel, confira as fotos e — importante — a <strong>política de cancelamento</strong>. Prefira tarifa com cancelamento grátis quando a diferença de preço for pequena; viagem muda.' },
      { t: 'Pague via NuPay e parcele', d: 'O pagamento usa o NuPay no limite do Ultravioleta. Dá pra <strong>parcelar em até 8x sem juros</strong> — vale pra hotéis e voos.' },
      { t: 'Confira o acúmulo turbinado', d: 'A compra acumula <strong>9 pontos por dólar gasto ou 5% de cashback</strong>. Como é calculado em dólar, hospedagem internacional rende especialmente bem.' },
      { t: 'Aproveite os benefícios que vêm junto', d: 'Seguro viagem grátis em passagens internacionais, proteção contra variação de preço (alerta do melhor momento de compra com reembolso automático de até R$ 500) e eSIM de viagem com 10GB válido por 365 dias em 150+ países.' }
    ],
    dicas: [
      { i: '🚀', t: 'Acúmulo 4x maior', d: 'Compra normal rende a partir de 2,2 pts/US$ (1,25%). Voo e hotel no Nu Viagens rendem <strong>9 pts/US$ (5%)</strong>. Concentre as reservas de viagem aqui — a diferença é enorme.' },
      { i: '🗓️', t: 'Black Friday turbinada', d: 'Em campanhas sazonais o acúmulo já subiu pra 14 pts/US$ ou 8% de cashback. Se a viagem não é urgente, vale segurar a reserva pra essas janelas.' },
      { i: '♾️', t: 'Pontos Ultravioleta não vencem', d: 'Enquanto a conta estiver ativa, os pontos não expiram — dá pra acumular com calma até ter o resgate certo, sem a pressão de vencimento dos programas aéreos.' },
      { i: '⚖️', t: 'Compare antes de fechar', d: 'O acúmulo é ótimo, mas confira o preço-base do quarto em Google Hotéis / Booking / Hi Chee. Não adianta 5% de volta num quarto 15% mais caro que em outro site.' },
      { i: '💳', t: 'A anuidade é o filtro', d: 'Só compensa se você já tem (ou vai ter) o Ultravioleta. A anuidade é isentável conforme o gasto, então faça a conta com o seu perfil de uso antes.' }
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
