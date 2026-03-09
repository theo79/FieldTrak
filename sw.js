const CACHE_NAME = 'fieldtrak-v1';
const ASSETS = [
  'index.html',
  'work_order.html',
  'station.html',
  'calendar.html',
  'history.html',
  'i18n.js',
  'style.css',
  'fieldtrak1.png',
  'manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(ASSETS.map((p) => new URL(p, self.registration.scope).href))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys
        .filter((k) => k.startsWith('fieldtrak-') && k !== CACHE_NAME)
        .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  const pathSegments = url.pathname.split('/').filter(Boolean);
  const pathNorm = pathSegments.length ? pathSegments[pathSegments.length - 1] : 'index.html';
  if (!ASSETS.includes(pathNorm)) return;

  const assetUrl = new URL(pathNorm, self.registration.scope).href;
  e.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(assetUrl).then((cached) => {
        const fetchAndUpdate = () =>
          fetch(assetUrl).then((res) => {
            if (res && res.status === 200) cache.put(assetUrl, res.clone());
            return res;
          });
        if (cached) {
          fetchAndUpdate();
          return cached;
        }
        return fetchAndUpdate();
      })
    )
  );
});
