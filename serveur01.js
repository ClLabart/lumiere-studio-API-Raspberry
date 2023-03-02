const DMX = require("dmx");
var dmx = new DMX();

var universe = dmx.addUniverse("demo", "enttec-open-usb-dmx", "COM4");

// console.log(universe);
// console.log(dmx.devices);
universe.update({ 5: 100 , 6: 100, 7: 0});
// setInterval(function () {
    
// }, 1000);
// while (true) {}
// universe.update("demo", { 1: 50 });

