const DMX = require("dmx");
const express = require("express");
const http = require("http");
const fs = require("fs");
const bodyParser = require("body-parser");

var port = 8080;
var app = express();
var dmx = new DMX();

// var universe = dmx.addUniverse("monuniv", "enttec-open-usb-dmx", "COM4");

// universe.updateAll(0);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.post("/", (req, res) => {
    // if (1) {
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.status(200);

        data = JSON.parse(req.body);

        // universe.update(data);

        console.log(data);

        res.status(200).send("ok");
    // } else {
    //     res.setHeader("Access-Control-Allow-Origin", "*");

    //     res.status(200).send("code de session errone");
    // }
});

app.listen(port, () => {
    console.log("Listening on port " + port + "...");
});
