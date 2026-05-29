// Service worker — network-first pra HTML, cache-first pra assets
// Bump CACHE quando quiser forçar invalidação em todos os usuários.
const CACHE = 'milhas-pro-v4';

const PRECACHE = [
  '/',
  '/index.html',
  '/css/main.css',
  '/js/main.js',
  '/js/guias.js',
  '/manifest.webmanifest',
  '/assets/icon.svg',
  '/pages/programas.html',
  '/pages/estrategias.html',
  '/pages/termometro.html',
  '/pages/hospedagem.html',
  '/pages/sites-secretos.html',
  '/pages/viagens.html',
  '/pages/guia.html',
  '/pages/seats-aero-guia-br.html',
  '/pages/quinta-liberdade.html',
  '/pages/roadmap.html',
  '/pages/qual-moeda.html',
  '/pages/multiplicadores.html',
  '/pages/primeira-classe.html',
  '/pages/curso-completo.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Estratégia:
// - HTML/navegação: network-first (sempre busca a versão nova; cache só se offline)
// - Outros assets: cache-first (rápido; atualiza em segundo plano)
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const req = e.request;
  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // Assets estáticos: serve do cache, busca em paralelo pra atualizar (stale-while-revalidate)
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
