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
$(function(){
  $("input#wordOne, input#wordTwo").on("click", function(){
    $(this).select();
  });

  $("input#wordOne").on("keyup", function(e){
    var value = $(this).val();
    $("div#suggestions").html('');
    // if(e.keyCode == 32 || e.keyCode == 13 ) {
    //   $("input#wordTwo").focus();
    // }
    // else {
      if(value != '' ){
        value = makeCap(value);
        $(this).val( $.trim(value) );
        $.each(AutocompleteWords, function(k, v){
          if( v.indexOf(value) == 0 ){
              fillSuggetionbox(v,$("input#wordTwo").val());
          }
        });
      }
    //}
  });

  $("input#wordTwo").on("keyup", function(e){
    var value = $(this).val();
    $("div#suggestions").html('');
    // if(e.keyCode == 32 || e.keyCode == 13 ) {
    //   $("input#wordTwo").focus();
    // }
    // else {
      if(value != '' ){
          value = makeCap(value);
          $(this).val( $.trim(value) );
          $.each(AutocompleteWords, function(k, v){
            if( v.indexOf(value) == 0){
              fillSuggetionbox($("input#wordOne").val(),v);
            }
          });
      }
    //}
  });

  $("div#suggestions").on("click", ".one", function(){
    $("input#wordOne").val( $.trim( $(this).html() ) );
      $("div#suggestions").html('');
    $("input#wordTwo").focus();
  });
  $("div#suggestions").on("click", ".two", function(){
      $("input#wordOne").val( $.trim( $(this).find(".wOne").html() ) );
      $("input#wordTwo").val( $.trim( $(this).find(".wTwo").html() ) );
      $("div#suggestions").html('')
      find();
    });
});
function makeCap(str){
  var str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}
function fillSuggetionbox(wordOne,wordTwo) {
  if(wordOne != '' && wordTwo == ''){
    $("div#suggestions").prepend("<div class='sugBox one'>"+wordOne+"</div>");
  }
  if( wordTwo != ''){
    $("div#suggestions").prepend("<div class='two'><span class='sugBox wOne'>"+wordOne+"</span> <span class='sugBox wTwo'> "+wordTwo+"</span></div>");
  }
}


// share

//  menu
$(function(){
  $("div#menubtn").on('click', function(){
    $("#menu").addClass("out");
  });
  $("#close").on('click', function(){
    $("#menu").removeClass("out");
  });
});

// rune Inder

// css
// zoombtn

// sw

// apk

// remove jquery
