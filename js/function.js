function fire() {
  var center = map.getCenter();
  drawSquare(getScuareFromCoor(center.lat, center.lng));
  var xy = getScuareXYFromCoor(center.lat, center.lng)
  var words = getWordsFromXY(xy[0], -xy[1]);
  $("input#wordOne").val(words[0]);
  $("input#wordTwo").val(words[1]);
}
function find(){
  var wordOne = $.trim( $("input#wordOne").val() );
  var WordTwo = $.trim( $("input#wordTwo").val() );
  var x = getXYfromWord(wordOne);
  var y = getXYfromWord(WordTwo);
  var latlng = GetCoorFromXY(x,y);
  drawSquare(latlng);
  map.flyTo(latlng);
}

// autocomplete

// share

//  menu

// rune Inder

// css
// zoombtn

// sw

// apk
