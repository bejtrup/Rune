var version = 12;
var CACHE = 'RUNE_cache-only';

self.addEventListener('install', function(evt) {
   console.log('The service worker is being installed. v.'+version);
  var indexPage = new Request('index.html');
  evt.waitUntil(
    fetch(indexPage).then(function(response) {
      return caches.open(CACHE).then(function(cache) {
        console.log('Cached index page during Install'+ response.url);
        return cache.put(indexPage, response);
      });
  }));
  //evt.waitUntil(precache());
});

self.addEventListener('fetch', function(evt) {
   console.log('The service worker is serving the asset. V.'+version);
   //evt.respondWith(fromCache(evt.request));


  // var updateCache = function(request){
  //   return caches.open(CACHE).then(function (cache) {
  //     return fetch(request).then(function (response) {
  //       console.log('add page to offline'+response.url)
  //       return cache.put(request, response);
  //     });
  //   });
  // };
  //
  //evt.waitUntil(updateCache(evt.request));

  evt.respondWith(
    fetch(evt.request).catch(function(error) {
      console.log( 'Network request Failed. Serving content from cache: ' + error );

      //Check to see if you have it in the cache
      //Return response
      //If not in the cache, then return error page
      return caches.open(CACHE).then(function (cache) {
        return cache.match(evt.request).then(function (matching) {
          var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
          return report
        });
      });
    }))

});

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      './index.html',
      './kort18_2.png',
      './manifest.json',
       './css/HVD_Poster_Clean.ttf',
      './css/index.css',
      './img/border.png',
      './img/MobilePay_Logo.png',
      './img/rune_arm.png',
      './img/rune_close.png	',
      './img/rune_get.png',
      './img/rune_info.png',
      './img/rune_menu.png',
      './img/rune_post.png',
      './img/rune_screen.png',
      './img/rune_share.png',
      './img/square.png',
      './js/function.js',
      './js/map.js',
      './js/share.js',
      './js/words.js',
      './js/jquery.min.js',
      './js/leaflet1.3.1.js'
    ]);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    console.log(CACHE, "cas",cache);
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match-du');
    });
  });
}
