alert("s");
$(function(){
  $("#share").click(function(){
    alert("go")
    if (navigator.share) {
      navigator.share({
        title: 'Web Fundamentals',
        text: 'Check out Web Fundamentals — it rocks!',
        url: 'https://developers.google.com/web',
      })
      .then(() => alert('Successful share'))
      .catch((error) => alert('Error sharing', error));
    }
  });

});
