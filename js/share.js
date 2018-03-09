$(function(){
  $("#share").click(function(){
    if (navigator.share) {
      navigator.share({
        title: 'Rune Siger jeg er her',
        text: 'jeg er i DEJ KURV',
        url: 'https://runeapp.dk/?Dej&Kurv',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert("næ");
    }
  });

});
