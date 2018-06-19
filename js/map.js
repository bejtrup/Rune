$( initmap );

var map;
var circle;
var square;
// kort bredde = 250 // firkanter X = 347
// kort højde = 182 // firkanter Y = 246
var OneMeter = (250/347)/10;

function initmap() {

  var maxZoom = 4;
  var minZoom = 1;

  map = L.map('map', {
    tap: true,
    zoomControl: false,
    minZoom: minZoom,
    maxZoom: maxZoom,
    center: [0, 0],
    zoom: 2,
    crs: L.CRS.Simple
  });

  // dimensions of the image
  var w = 4000,
  h = 2834, //2831
  url = 'kort18_4.png';
  // calculate the edges of the image, in coordinate space

  var southWest = map.unproject([0, h], map.getMaxZoom());
  var northEast = map.unproject([w, 0], map.getMaxZoom());

  var bounds = new L.LatLngBounds(southWest, northEast);
  // add the image overlay,
  // so that it covers the entire map
  L.imageOverlay(url, bounds).addTo(map);
  // tell leaflet that the map is exactly as big as the image

  var offset = 500;
  var sw = map.unproject([-offset, h+offset], map.getMaxZoom()-(maxZoom/2));
  var ne = map.unproject([w+offset, -offset], map.getMaxZoom()-(maxZoom/2));
  var b = new L.LatLngBounds(sw, ne);
  map.setMaxBounds(b);
  map.panTo([-75.268,98]);
}

function drawSquare(latLng){
  if(square) square.remove();
  circle = new L.Circle(latLng, OneMeter*5).addTo(map);
  square = new L.Rectangle( circle.getBounds() , {  fillColor: "#FED44D", fillOpacity: 1, stroke: false }).addTo(map);
  if(circle) circle.remove();
};


function getScuareFromCoor(lat, lng){
  var xy = getScuareXYFromCoor(lat, lng);
  var ln = ((xy[0] * 10)+5)*OneMeter;
  var la = ((xy[1] * 10)+5)*OneMeter;
  return new L.LatLng(la, ln);
}

function getScuareXYFromCoor(lat, lng){
  var x = lng / OneMeter;
  var y = (lat / OneMeter);
  var squareX = Math.floor( x/10 );
  var squareY = Math.floor( y/10 );
  return [squareX,squareY];
}

function GetCoorFromXY(x,y){
  var ln = ((x * 10)+5)*OneMeter;
  var la = -((y * 10)-5)*OneMeter;
  return new L.LatLng(la, ln);
}
