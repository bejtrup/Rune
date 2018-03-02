function fire() {
  var center = map.getCenter();
  drawSquare(getScuareFromCoor(center.lat, center.lng));
  var xy = getScuareXYFromCoor(center.lat, center.lng)
  console.log(xy);
  console.log( getWordsFromXY(xy[0], -xy[1]) );
}
