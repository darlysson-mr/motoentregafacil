self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("motoentrega-cache").then(function(cache) {
      return cache.addAll(["./", "./manifest.json", "./icon.png"]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
