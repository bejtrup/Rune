$("#share").click(function(){
    var shareOne = "text1";
    var shareTwo = "test2";
    window.plugins.socialsharing.share('Rune siger jeg er i : '+ wordOne+","+wordTwo +'. Åbn Rune-appen for at finde mig eller brug dette link (linket kræver lidt data) ', null, null, 'http://www.runeapp.dk/#'+shareOne+"-"+shareTwo+'/');

});
