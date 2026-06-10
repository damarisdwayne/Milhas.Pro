# Milhas.pro

Site estático (HTML + SCSS/CSS + JS puro) sobre milhas aéreas, tema dark/neon glass. Conteúdo em pt-BR.

## Regras de conteúdo (IMPORTANTE)

- **Nunca invente.** Não chute fatos, números, rotas, custos em milhas, parcerias, regras de programa, datas ou dispositivos legais. Tudo que entra no site precisa ser verdadeiro e, de preferência, verificável.
- **Quando não tiver certeza, diga.** É melhor falar "não tenho certeza, posso verificar" do que afirmar algo incerto. Não preencha lacunas com suposições.
- **Verifique antes de escrever.** Informação de milhas/aviação muda rápido (rotas, parcerias, desvalorizações, regras). Prefira pesquisar o estado atual na web a confiar na memória. Se não der pra confirmar, sinalize explicitamente o que é incerto em vez de afirmar.

## Regras da aba "Achados" (rotas)

- **Só rotas internacionais.** Não incluir trechos domésticos — pra voo interno, low cost geralmente ganha de milha. O foco é viagem internacional saindo do Brasil.
- **Só programas acessíveis ao viajante brasileiro.** Liste apenas programas que dá pra acumular/usar do Brasil (ex: Smiles, TudoAzul, LATAM Pass, Avios/Iberia, Flying Blue, LifeMiles). Evitar programas difíceis de abastecer aqui (ex: AAdvantage, Aeroplan, United) a menos que sejam claramente a única/melhor via. **Nota: o brasileiro NÃO tem Amex Membership Rewards global** (o Amex Bradesco vai pra Livelo; o MR Santander não transfere pra Virgin). Virgin Atlantic não tem parceiro bancário direto no BR — só via compra de pontos (bônus até 70%) ou Livelo → IHG → Virgin; incluir só quando o sweet spot justificar (ex: ANA executiva).
- **Não encher de companhia.** Em cada card, mostrar só as melhores formas de emitir que façam sentido pra quem sai do Brasil — não listar todo programa que tecnicamente emite a rota.

## Estrutura

- `index.html` — landing single-page.
- `pages/` — páginas de conteúdo (programas, estrategias, achados, sites-secretos, termometro, etc.).
- `js/guias.js` — dados + renderer dos tutoriais por ferramenta (`guia.html?id=...`).
- `js/main.js` — nav, scroll-reveal, contadores.
- `css/main.css` — compilado de `scss/` (pode editar o CSS direto).
- A `<nav>` é duplicada em cada página (não há includes) — mudanças de nav precisam ser replicadas em todos os arquivos.
- A aba "Viagens" está oculta na nav (comentada), não apagada.
