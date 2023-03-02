const DMX = require("dmx");
const express = require("express");
const http = require("http");
const fs = require("fs");

// var poscode = "/var/www/html/codesession.txt";
//var poscode="./codesession.txt"

var port = 8080;
var app = express();
var dmx = new DMX();
//var universe = dmx.addUniverse('demo','enttec-usb-dmx-pro','/dev/cu.usbserial-A10KPAXA');
var universe = dmx.addUniverse(
    "monuniv",
    "enttec-open-usb-dmx",
    "COM4"
);

universe.updateAll(0);
//universe.update( {1:200} );
app.get("/ajuster/:numprojo/:intensite", (req, res) => {
    // const data = fs.readFileSync(poscode, "utf8");
    if (1) {
        console.log(
            "ordre demande : projo=" +
                req.params.numprojo +
                " , intensite=" +
                req.params.intensite
        );

        res.setHeader("Access-Control-Allow-Origin", "*");

        res.status(200).send(
            "ordre demande : projo=" +
                req.params.numprojo +
                " , intensite=" +
                req.params.intensite
        );

        //universe.update('monuniv',{"1":20, "2": 120, "3": 120 })
        universe.update({ [req.params.numprojo]: req.params.intensite });
    } else {
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.status(200).send("code de session errone");
    }
});

app.listen(port, () => {
    console.log("Listening on port " + port + "...");
});


// // Create a new color picker instance
// // https://iro.js.org/guide.html#getting-started
// var colorPicker = new iro.ColorPicker(".colorPicker", {
//     // color picker options
//     // Option guide: https://iro.js.org/guide.html#color-picker-options
//     width: 280,
//     color: "rgb(255, 0, 0)",
//     borderWidth: 1,
//     borderColor: "#fff",
//   });
  
//   var values = document.getElementById("values");
//   var hexInput = document.getElementById("hexInput");
  
//   // https://iro.js.org/guide.html#color-picker-events
//   colorPicker.on(["color:init", "color:change"], function(color){
//     // Show the current color in different formats
//     // Using the selected color: https://iro.js.org/guide.html#selected-color-api
//     values.innerHTML = [
//       "hex: " + color.hexString,
//       "rgb: " + color.rgbString,
//       "hsl: " + color.hslString,
//     ].join("<br>");
    
//     hexInput.value = color.hexString;
    
//     fetch("http://127.0.0.1:8080/ajuster/5/" + color.rgb.r);
//     fetch("http://127.0.0.1:8080/ajuster/6/" + color.rgb.g);
//     fetch("http://127.0.0.1:8080/ajuster/7/" + color.rgb.b);
    
//   });
  
//   hexInput.addEventListener('change', function() {
//     colorPicker.color.hexString = this.value;
//   });

// body {
//     color: #fff;
//     background: #171F30;
//     line-height: 150%;
//   }
  
//   .wrapper svg {
//   }
  
//   .wrap {
//     min-height: 100vh;
//     max-width: 720px;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
    
//     .half {
//       width: 50%;
//       padding: 32px 0;
//     }
//   }
  
//   .title {
//     font-family: sans-serif;
//     line-height: 24px;
//     display: block;
//     padding: 8px 0;
//   }
  
//   .readout {
//     margin-top: 32px;
//     line-height: 180%;
//   }
  
//   #values {
//    font-family: monospace;
//     line-height: 150%;
//   }
  
//   .link {
//     margin-top: 16px;
    
//     a {
//       color: MediumSlateBlue;
//     }
//   }

// {/* <html>
//   <head>
//   </head>
//   <body>
//     <div class="wrap">
//       <div class="half">
//         <div class="colorPicker"></div>
//       </div>
//       <div class="half readout">
//         <p>
//           iro.js is an HSV color picker widget for JavaScript with a modern SVG-based user interface -- and no jQuery or extra CSS / images.
//         </p>
//         <span class="title link">Head to <a href="https://iro.js.org?ref=codepen" target="blank">iro.js.org</a> for full documentation and features, or check out the source code on <a href="https://github.com/jaames/iro.js" target="blank">GitHub</a>!
//         </span>
//         <span class="title">Selected Color:</span>
//         <div id="values"></div>
//         <input id="hexInput"></input>
//       </div>
//     </div>
//   </body>
// </html> */}