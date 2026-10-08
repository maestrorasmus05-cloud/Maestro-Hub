/* Coding Hub service worker.
   Goal: the installed app is ALWAYS the same as the website.
   - Pages (navigations): network-first, cached copy only when offline.
   - Static assets: stale-while-revalidate (fast, refreshed in the background).
   - Never touches cross-origin requests (Supabase auth/API, fonts, Gemini) or non-GET requests,
     so passwords, tokens and user data are never cached here.
   Bump CACHE_NAME whenever you deploy changes (see README). */
const CACHE_NAME = 'coding-hub-v8';
const APP_SHELL = ['./', './index.html', './manifest.json', './favicon.svg',
  './icon-192.png', './icon-512.png', './icon-maskable-192.png', './icon-maskable-512.png',
  './certificate-template.jpg'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(APP_SHELL.map(url => cache.add(url).catch(() => {}))))
      .then(() => self.skipWaiting())            // activate the newest worker immediately
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;           // Supabase, fonts, Gemini stay live & uncached

  if (req.mode === 'navigate') {                             // network-first for pages
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE_NAME).then(c => c.put('./index.html', copy)); }
        return res;
      }).catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  event.respondWith(                                         // stale-while-revalidate for assets
    caches.open(CACHE_NAME).then(cache =>
      cache.match(req).then(cached => {
        const network = fetch(req).then(res => {
          if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    )
  );
});
