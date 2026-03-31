// TradeOS Service Worker
// Caches the app shell for offline use

var CACHE_NAME = 'tradeos-v1';
var ASSETS = [
  '/tradeos/',
  '/tradeos/index.html',
  '/tradeos/manifest.json',
  '/tradeos/icon-192.png',
  '/tradeos/icon-512.png',
  '/tradeos/apple-touch-icon.png'
];

// Install — cache all core assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', function(e) {
  // Don't intercept Whoop API calls or external requests
  if (e.request.url.indexOf('whoop.com') !== -1) return;
  if (e.request.url.indexOf('api.anthropic.com') !== -1) return;
  if (e.request.url.indexOf('fonts.googleapis.com') !== -1) return;
  if (e.request.url.indexOf('cdnjs.cloudflare.com') !== -1) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        // Cache successful same-origin GET responses
        if (
          response.status === 200 &&
          e.request.method === 'GET' &&
          e.request.url.indexOf(self.location.origin) !== -1
        ) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      });
    }).catch(function() {
      // Offline fallback — return cached index
      return caches.match('/tradeos/index.html');
    })
  );
});
