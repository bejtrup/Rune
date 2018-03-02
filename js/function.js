function fire() {
  var center = map.getCenter();
  drawSquare(getScuareFromCoor(center.lat, center.lng));
  var xy = getScuareXYFromCoor(center.lat, center.lng)
  var words = getWordsFromXY(xy[0], -xy[1]);
  $("input#wordOne").val(words[0]);
  $("input#wordTwo").val(words[1]);
}
