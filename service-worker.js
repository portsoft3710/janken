// service-worker.js
var CACHE_NAME = 'pwa-janken-2020060301';
var urlsToCache = [
    'index.html',
    'ok.html',
    'kokan_thankyou.html',    
    '/css/style.css',
    '/css/messageBox.css'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
});


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                if(response){
                    return response;
                }
                return fetch(event.request);
            })
    );
});
