# Milhas.pro

Site estático (HTML + SCSS/CSS + JS puro) sobre milhas aéreas, tema dark/neon glass. Conteúdo em pt-BR.

## Regras de conteúdo (IMPORTANTE)

- **Nunca invente.** Não chute fatos, números, rotas, custos em milhas, parcerias, regras de programa, datas ou dispositivos legais. Tudo que entra no site precisa ser verdadeiro e, de preferência, verificável.
- **Quando não tiver certeza, diga.** É melhor falar "não tenho certeza, posso verificar" do que afirmar algo incerto. Não preencha lacunas com suposições.
- **Verifique antes de escrever.** Informação de milhas/aviação muda rápido (rotas, parcerias, desvalorizações, regras). Prefira pesquisar o estado atual na web a confiar na memória. Se não der pra confirmar, sinalize explicitamente o que é incerto em vez de afirmar.

## Estrutura

- `index.html` — landing single-page.
- `pages/` — páginas de conteúdo (programas, estrategias, achados, sites-secretos, termometro, etc.).
- `js/guias.js` — dados + renderer dos tutoriais por ferramenta (`guia.html?id=...`).
- `js/main.js` — nav, scroll-reveal, contadores.
- `css/main.css` — compilado de `scss/` (pode editar o CSS direto).
- A `<nav>` é duplicada em cada página (não há includes) — mudanças de nav precisam ser replicadas em todos os arquivos.
- A aba "Viagens" está oculta na nav (comentada), não apagada.
