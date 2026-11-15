// 小記帳 Service Worker - 讓 App 可以離線使用
const CACHE_NAME = 'expense-tracker-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './gmail-sync-script.txt',
  './guide.html',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // App 本身的檔案：先抓最新版，沒網路才用快取（這樣更新才會送到手機上）
  if (new URL(req.url).origin === self.location.origin) {
    event.respondWith(
      fetch(req).then((res) => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }))
    );
    return;
  }

  // 其他網站（例如自動同步用的 Google 程式）不經過快取，直接連線
  if (!req.url.startsWith('https://unpkg.com') && !req.url.startsWith('https://fonts.')) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // 快取 CDN 資源讓下次離線也能用
        if (res && res.status === 200 && (req.url.startsWith('https://unpkg.com') || req.url.startsWith('https://fonts.'))) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
