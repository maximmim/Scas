const CACHE_NAME = 'Yelt';

const STATIC_RESOURCES = [
  '/',
  '/html/index.html',
  '/html/menu.html',
  '/css/styles.css',
  '/js/script.js',
  '/img/logo.png',
  '/img/end.png',
  '/version.json',



  '/img/logdo.png',
  '/img/play.png',
  '/img/copy.png',
  '/img/exit.png',
  '/html/tables.html',
  '/html/createmap.html',
  '/img/stone.png',
  '/img/enemy.png',
  '/img/enemy_close.png',
  '/img/enemy_open.png',
  '/img/j.png',

  '/img/skins/skin_d1.png',
  '/img/skins/skin_d2.png',
  '/img/skins/skin_d3.png',
  '/img/skins/skin_d4.png',
  '/img/skins/skin_d5.png',
  '/img/skins/skin_d6.png',
  '/img/skins/playr_white.png',
  '/img/skins/skin.png',
  '/img/skins/benat_close.png',
  '/img/skins/benat_open.png',
  '/img/skins/kiril_d2.png',
  '/img/skins/kiril_d1.png',
  '/img/skins/alina_d2.png',
  '/img/skins/zayush.png',
  '/img/skins/zayush_d2.png',
  '/img/skins/REMEMBOR.png',
  "/img/custom/custom.png",
  "/img/custom/custom_d2.png",
  "/img/custom/custom_d3.png",
  "/img/custom/custom_d4.png",
  "/img/custom/custom_d5.png",
  "/img/custom/custom_d6.png",
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_RESOURCES);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'POST' || event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse.ok) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          return response;
        });
        
        return fetchPromise;
      });
    })
  );
});
