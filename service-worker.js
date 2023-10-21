const CACHE_NAME = 'dash';

const STATIC_RESOURCES = [
  '/',
  
  "/web/html/ofline.html",
  "/web/html/menu.html",
  "/web/css/fonts/Arsenal-Regular.ttf",
  "/web/css/fonts/Arsenal-Regular.woff",
  "/web/css/fonts/Arsenal-Regular.woff2",
  "/web/css/fonts.css",
  "/web/css/style.css",
  "/web/js/menu.js",
  "/web/js/script.js"
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
