$(function(){
  $("#share").click(function(){
    if (navigator.share) {
      navigator.share({
        title: 'Web Fundamentals',
        text: 'Check out Web Fundamentals — it rocks!',
        url: 'https://developers.google.com/web',
      })
      .then(() => alert('Successful share'))
      .catch((error) => alert('Error sharing', error));
    } else {
      alert("næ");
    }
  });

});
