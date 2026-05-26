# Milhas.pro ✈

Site sobre milhas aéreas, do zero ao avançado. HTML + SCSS + JS puro, tema dark/neon glass.

## Estrutura

```
flight-plan/
├── index.html               Landing single-page com todas as seções
├── pages/
│   ├── comprar-milhas.html  Guia completo de compra
│   ├── sites-secretos.html  Catálogo de 18 ferramentas
│   └── blog.html            Lista de posts
├── scss/                    Source SCSS (organizado em parciais)
│   ├── main.scss            Entrypoint — importa todos os parciais
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _nav.scss
│   ├── _hero.scss
│   ├── _components.scss
│   ├── _animations.scss
│   └── _pages.scss
├── css/
│   └── main.css             CSS compilado (usado pelo browser)
└── js/
    └── main.js              Vanilla JS (nav, scroll-reveal, contadores, simulador)
```

## Rodando localmente

Como é HTML/CSS/JS puro, basta abrir `index.html` no browser. Ou:

```bash
# servidor simples (recomendado pra testar caminhos)
python3 -m http.server 8000
# abre http://localhost:8000
```

## Editando o SCSS

Pra editar estilos com SCSS e ver as mudanças, instale o sass e rode em watch:

```bash
npm install -g sass
sass --watch scss/main.scss css/main.css
```

Ou edite direto o `css/main.css` se preferir simplicidade.

## Features de JS

- **Nav sticky** com blur ao rolar + menu mobile
- **Scroll reveal** com IntersectionObserver
- **Contadores animados** no hero (easing cúbico)
- **Simulador de milhas** — calcula estimativas por programa baseado em distância + classe

## Personalização rápida

- Cores: `scss/_variables.scss` (ou `--primary`/`--accent` em `css/main.css`)
- Conteúdo dos programas: seção `#programas` em `index.html`
- Sites secretos: `pages/sites-secretos.html`
