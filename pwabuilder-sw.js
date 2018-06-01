var version = 1;

var CACHE = 'Rune_cache-only';

self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');
  var indexPage = new Request('index.html');
  evt.waitUntil(
    fetch(indexPage).then(function(response) {
      return caches.open(CACHE).then(function(cache) {
        console.log('Cached index page during Install'+ response.url);
        return cache.put(indexPage, response);
      });
  }));

});

self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
  //evt.respondWith(fromCache(evt.request));

  var updateCache = function(request){
    return caches.open(CACHE).then(function (cache) {
      return fetch(request).then(function (response) {
        console.log('add page to offline'+response.url)
        return cache.put(request, response);
      });
    });
  };

  evt.waitUntil(updateCache(evt.request));

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
    })
  );
});
