const cacheName = 'v1';
const assets = [
    'hw4index.html',
    'hw4style.css',
    'hw4app.js',
    'images/lions.jpg',
    'images/lionswidth400.jpg',
    'images/icon-192x192.png',
    'images/icon-512x512.png',
    'manifest.json'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
