const DMX = require('dmx');
const express=require('express')
const http=require('http')

var port=8080
var app=express()
var dmx = new DMX();
//var universe = dmx.addUniverse('demo','enttec-usb-dmx-pro','/dev/cu.usbserial-A10KPAXA');
var universe = dmx.addUniverse('monuniv','enttec-open-usb-dmx','/dev/ttyUSB0');

 universe.updateAll(0);
universe.update( {1:200} );
app.get('/ajuster/:numprojo/:intensite', (req, res) => {
    
    console.log("ordre demande : projo="+req.params.numprojo+" , intensite="+req.params.intensite);

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.status(200).send("ordre demande : projo="+req.params.numprojo+" , intensite="+req.params.intensite)
   
  //universe.update('monuniv',{"1":20, "2": 120, "3": 120 })
   universe.update( { [req.params.numprojo] :req.params.intensite })


})




app.listen(port, () => {
    console.log('Listening on port '+port+'...')
})



