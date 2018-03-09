var words = [
  'And',
  'Angreb',
  'Anke',
  'Apparat',
  'Arm',
  'Bag',
  'Balance',
  'Balle',
  'Kartoffel',
  'Ballon',
  'Banan',
  'Bande','Kul','Lille','Basker','Kano','Beton','Bil','Konto','Krus','Mad','Bokse','Pen','Blind','Gynge','Bror','Brun','Brød','Bast','Buks','Hus','Bunke','Misse','Potte','Bøjle','Musik',
  'Bøtte','Mor','Chef','Chili','Chips','Corn','Creme','Kajak','Damp','Os','Kontra','Dild','Direktør','Dog','Slæde','Dressing','Drift','isme','Durum','Dyne','Dåse','Filt','Genert','Falde','Juice',
  'Fedte','Feeling','Filet','Finger','Fis','Fisk','Fiske','Fjeder','Flad','Flamme','Flæske','Fløjte','Svær','Fold','Fræk',
  'Stød','Frisk','Fjeder','Fylde','Fars','Fører','Gane','Gas','General','Svine','Glasur','Glat','Greb','Tisse','Gris','Grotte','Gruppe','Sved','Gummi','Gylle','Brand','Gæst','Sprække','Tyr','Hals',
  'Hammer','Los','Handske','Hav','Smat','Heste','Hipster','Hjelm','Hot','Hud','Hul','Hule','Trolde','Buller','Svans','Hævner','Hønse','Hår','Svamp','Indianer','Tunge','Tyk','Jern','Junge','Kage',
  'Dame','Kamel','Kammer','Kanal','Basse','Karl','Fælles','Kasse','Kaster','Knold','Stram','Klister','Kloak','Klods','Bjarke','Dej','Krig','Blod','Krydder','Krølle','Kugle','Barberet','Kuling','Kurv','Kutter',
  'Kvæler','Kys','Kæde','Kæmpe','Kæp','Kød','Sex','Kølle','Kost','Pavillon','Tog','Skam','Leg','Øje','Lejr','Lem','Uld','Bas','Liste','Lokum','Luft','Lugte','Lus','Læbe','Løb',
  'Løs','Lag','Blodig','Skede','Dele','Mande','Maskine','Massage','Medister','Bæ','Charlatan','Thai','Mund','Bøsse','Mælke','Metal','Nakke','Nisse','Næse','Nøgen','Okse','Ophæng','Orange','Daniel','Ost',
  'Glide','Parfume','Patter','Bolle','Penge','Pige','Spyd','Piske','Pølse','Plante','Pleje','Plæne','Mis','Postej','Bæver','Præmie','Pukkel','Pul','Pumpe','Pung','Piller','Ribs','Ring','Rom','Rotte',
  'Rulle','Sår','Ryste','Ræs','Ræve','Rød','Salat','Salt','Salve','Sans','Køle','Side','Sigøjner','Sjover','Lap','Makker','Skib','Skjuler','Sko','Skole','Skorpe','Skud','Skygge','Skæg','Skål',
  'Slag','Slam','Slange','Slap','Slik','Herre','Smæld','Smør','So','Soft','Sol','Sort','Sovs','Spalte','Spejder','Gård','Pind','Stamme',
  'Stang','Stativ','Kiosk','Stiv','Store','Stål','Sukker','Inder','Hvid','Græs','Giver','Fod','Søster','Søvn','Runde','Tag','Tagselv','Tand','Tank','Tarm','Tartelet','Telt','Tennis','Motor','Greve',
  'Lår','Toilet','Plastik','Top','Torske','Traktor','Hunde','Tromme','Trommel','Trop','Træ','Træk','Trænings','Tun','Is','Tur','Jagt','Halm','Tyv','Tårn','Ulve','Under','Unge','Ur','Varm',
  'Vin','Vorte','Væske','Yngel','Yngle','Ældre','Leif',
  'Økonomi',
  'Øl',
  'Gul',
  'Lygte',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17a'
];
      //,'Glas','Flaske','Gigolo','Sofa','Pude','Kat','Serviet','Skærm','Stof','Lighter','Filt','Denim','Guld','Sølv','Velour','Dreng','Garn','Mørke','Vand','Dun' DOLK
var AutocompleteWords = []
$.each(words, function(k, v){
        AutocompleteWords.push(v);
});
AutocompleteWords.sort();

function getWordsFromXY(x,y){
  return [ words[x], words[y] ]
}

function getXYfromWord(word) {
  var word = capitalizeFirstLetter(word);
  var pos = jQuery.inArray( word, words )
  return  pos;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
