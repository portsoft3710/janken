// service-worker.js
var CACHE_NAME = 'janken-cache-2020060302';
var urlsToCache = [
    'index.html',
    'ok.html',
    'kokan_thankyou.html',
    './css/style.css',
    './css/messageBox.css'
];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
      })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {});
