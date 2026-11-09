/* Service worker de «Oposiciones · Banco de preguntas».
   - La aplicación (index.html, iconos, manifiesto): primero la red, para que las versiones nuevas lleguen solas; sin conexión, la copia guardada.
   - Librerías de CDN con versión fija (PDF.js, Tesseract): primero la copia guardada.
   - La API de Claude nunca se guarda en caché. */
const VERSION = 'oposiciones-v1';
const APP = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname === 'api.anthropic.com') return;

  // Archivos de la propia aplicación: red primero
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(m => m || caches.match('./index.html')))
    );
    return;
  }

  // Librerías con versión fija: caché primero
  if (url.hostname === 'cdnjs.cloudflare.com' || url.hostname === 'cdn.jsdelivr.net') {
    e.respondWith(
      caches.match(req).then(m => m || fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }))
    );
  }
});
