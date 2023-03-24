'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0715c3d05bcb9ebe34ae152db9e4ee51",
"assets/assets/images/1.jpeg": "4644df01401edf87e68a97f21170c75b",
"assets/assets/images/10.png": "fbd076236af13749c4970a620e3641f7",
"assets/assets/images/11.png": "ed1845030a6de1b99e060b07e7bf338b",
"assets/assets/images/12.png": "460c08c70588f154d7f0061d964deb2a",
"assets/assets/images/2.jpg": "069f6fe2a722fc56fd077564ba3dd3a7",
"assets/assets/images/3.jpg": "d5812476617db910aef7096432a8d90c",
"assets/assets/images/4.jpg": "14f961dbf6ca008bace39a6f83e34687",
"assets/assets/images/5.jpg": "f2c02ddecba051ca7162b94fb5d23908",
"assets/assets/images/6.jpg": "52fa84f466b8461549d01d56952b6d6c",
"assets/assets/images/68747470733a2f2f696d6775722e636f6d2f7761324e7337532e706e67.jfif": "e0fb19f671347118007f69c1e665509d",
"assets/assets/images/7.jpg": "97d06680fdac74457e58b1fe57af5888",
"assets/assets/images/8.jpg": "e7db6a34bbb5a4de23c11a2707e6a253",
"assets/assets/images/9.png": "f568d0cf80e65728d15bd95ba7addbaf",
"assets/assets/images/ae585900-694b-11e9-90a2-7c8f58f068b4.jfif": "c4a4ea569749c2cf6e173f289047fe81",
"assets/assets/images/dib1.png": "13e8bdffee5fd420a30cf43d66deb5a2",
"assets/assets/images/dribbble.png": "9241dc8dc65f3e9d20d95c3253194bca",
"assets/assets/images/email1.png": "0aad7566d2e2cadc7341cf4c077bab86",
"assets/assets/images/github.ico": "6d0d3a64c6bec85c6215e8b6fb89bdcb",
"assets/assets/images/github.png": "357c3c73e054d6b0eb9a10dbf80aca08",
"assets/assets/images/linkedin.ico": "c45811f50998cf9e570e1ef26cfa393a",
"assets/assets/images/linkedin.png": "dbce0cfd7ae44f852e206c24bb8c4318",
"assets/assets/images/logo.ico": "f5c8bbd6846dcea7271882acd41a25fe",
"assets/assets/images/logo.png": "555113a9d551c75b40ee11bc304be4a3",
"assets/assets/images/m1.jpg": "d412c71b5e8a907deb417630155c1bf3",
"assets/assets/images/m2.jpg": "de031c18e7dc3b8b026f2cffb4909c82",
"assets/assets/images/mobile-development.png": "65f4b99a0ef5d63d62e766841484296a",
"assets/assets/images/mobile-development1.png": "49a2d79f0dbfc12481a85ab135113263",
"assets/assets/images/mobile-development1.svg": "0f68153ec1d35f2aea91bd38c4e33ed6",
"assets/assets/images/moon1.png": "358d126b66309763a8439aed295fdfd4",
"assets/assets/images/noun-web-development%2520(1).png": "153ade171af260c8a86d92e4ae2171a2",
"assets/assets/images/offer.png": "f7effec03d4d9004c75abef8890af46c",
"assets/assets/images/perform-flutter.png": "75189c63cfc6a297d73c1d17fee5cbd1",
"assets/assets/images/personal-profile.ico": "c8bcc41f9e64eb92be55ced201b84f71",
"assets/assets/images/planet.png": "641444bbd56e23648afbb4aea1c4be96",
"assets/assets/images/portfol.png": "505d8cb04b4d7147c0c86f86559dca2f",
"assets/assets/images/portfolio%2520(1).ico": "b934f41a35f298df6324e8a18a571fac",
"assets/assets/images/portfolio.ico": "c92a02269440e74699ad2113bed4aa1a",
"assets/assets/images/portfolio.png": "e77de766eb72045eb8ce262a336c8ae0",
"assets/assets/images/profile.png": "270d0542f521b3ff2280ef273ec77ac6",
"assets/assets/images/python-development.png": "df9a8285eb5c56f6b7d3bb3304612f8a",
"assets/assets/images/python-development1.png": "df825da2e5edf0aa20de3b7bec6ca9c4",
"assets/assets/images/rocket.png": "34c44b321268000b8f7a1982365d40b9",
"assets/assets/images/twitter%2520(1).ico": "651bd381a39b44d9ef3ffe78cea4471c",
"assets/assets/images/twitter%2520(1).png": "a0dde15362829a17a42588d91ead6ea8",
"assets/assets/images/twitter-_1_.ico": "4f15987759bc375b42985f4b72922a88",
"assets/assets/images/twitter.ico": "21a815463fbe87a001508c185775a56c",
"assets/assets/images/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/images/w1.jpg": "e0fcbb3180e524c84c8e203f8042cd74",
"assets/assets/images/w2.jpg": "003104fc8a4264a45f13a64b99168af8",
"assets/assets/images/web-development.png": "153ade171af260c8a86d92e4ae2171a2",
"assets/assets/images/web-development1.png": "adc016dd4a4d7a58386fd128d5d327c6",
"assets/assets/images/web-development1.svg": "4b9956294a842c59530db18cd31e9078",
"assets/assets/images/web-development2.svg": "7b3187f6c7b162ab37a14b1c43cb16ec",
"assets/FontManifest.json": "13a826883971e5493399d93d37ea8c55",
"assets/NOTICES": "6f0c1b3922c77d45ad6b68ae5b0ea359",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "447f364aef499665a11b1f15f57f18af",
"/": "447f364aef499665a11b1f15f57f18af",
"main.dart.js": "94571d0d1bc972ca510cfda0cb3b3c16",
"manifest.json": "44608ddcedf3810473068bf0157d6f9b",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
