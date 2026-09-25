// Service Worker para EL ATALAYA TV
const CACHE_NAME = 'atalaya-tv-v1';
const CACHE_FILES = [
  '/streaming-tv-el-atalaya/',
  '/streaming-tv-el-atalaya/index.html',
  '/streaming-tv-el-atalaya/manifest.json'
];

// Instalación: cachear archivos básicos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting())
  );
});

// Activación: limpiar cachés viejas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if(key !== CACHE_NAME) return caches.delete(key);
      })
    )).then(() => self.clients.claim())
  );
});

// Fetch: responder desde caché si está disponible
self.addEventListener('fetch', (event) => {
  // No cachear streams ni listas M3U (siempre online)
  const url = event.request.url;
  if(url.endsWith('.m3u8') || url.endsWith('.m3u') || url.includes('iptv-org') || url.includes('raw.githubusercontent')){
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        // Solo cachear respuestas válidas de nuestro origen
        if(response.status === 200 && url.startsWith(self.location.origin)){
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => caches.match('/streaming-tv-el-atalaya/index.html'))
  );
});