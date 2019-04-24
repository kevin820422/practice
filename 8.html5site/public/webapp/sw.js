var cachename = "v1";
var urlsToCache = ["/webapp/", "/webapp/index.html", "/webapp/site.css", "/webapp/sw.js"];
//會將靜態的檔案存到cache storage
self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(cachename).then(function (cache) {
        return cache.addAll(urlsToCache)
    }))
})

self.addEventListener('fetch', function (event) {
    // console.log(event.request)
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response
            } else {
                fetch(event.request)
            }
        })
    )
})

//刪除舊的cache storage
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (names) {
            Promise.all(names.map(function (name) {
                if (name != cachename) {
                    return caches.delete(name);
                }
            }))
        })
    )
})