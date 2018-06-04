$(function(){
  $("#share").click(function(){

    var wordOne = $.trim( $("input#wordOne").val() );
    var WordTwo = $.trim( $("input#wordTwo").val() );
    var text = 'Rune siger jeg er i ' + wordOne.toUpperCase() + ' ' +WordTwo.toUpperCase();

    var url = 'https://runeapp.dk/#'+encodeURI(wordOne)+'-'+encodeURI(WordTwo);
    if(wordOne && WordTwo){
      if (navigator.share) {
        navigator.share({
          title: 'Rune',
          text: text,
          url: url,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
      } else {
            var domainName = document.location.origin;
            prompt('Kopier det her og send det!', text + " " + url);
      }
    } else {
      alert("to ord du!");
    }
  });
});
