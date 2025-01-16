const mySiteName= "saurav's smart thing pwa"
const assets = ["/", "/index.html", "/index.css", "/index.js", "/assets/favicon.webp"]

self.addEventListener("install", installEvent =>{
    installEvent.waitUntil(
        caches.open(mySiteName).then(cache => {
            cache.addAll(assets)
        })
    )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.request) 
        }))
})