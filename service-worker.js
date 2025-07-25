self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("shockmaster-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/script.js",
        "/manifest.json",
        "/icon.png",
        "/icon-large.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});