const DMX = require("dmx");
var dmx = new DMX();

// le soucis ici c'est de connaitre le prot où  est branché le controleur DMX :-)
// ici port COM4 :-)
//var universe = dmx.addUniverse('demo','enttec-usb-dmx-pro','COM4');
//ici cu.BLTH c'est le port com bluetooth du MAC
var universe = dmx.addUniverse("demo", "enttec-usb-dmx-pro", "COM4");

//ici toute les 10ms changer les valeurs des projo sur canal 0,1 et 2
// bon ici je met toujours la meme valeur :-)
setInterval(function () {
    universe.update({ 0: 50, 1: 100, 2: 150 });
}, 10);
