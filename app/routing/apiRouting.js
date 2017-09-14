var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");

module.exports = function(app){
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.text());
    app.use(bodyParser.json({type: "application/vnd.api+json"}));

    app.get("/api/table", function(req, res){
        var reservations = require("../data/reservation.js");
        res.send(reservations);
    });

    app.post("/api/table", function(req, res){
        var reservations = require("../data/reservation.js");
        var waitList = require("../data/waitList.js")
        var newReservation = req.body;
        if(reservations.length > 5){
            console.log("TO THE WAITING LIST WITH YOU!");
            waitList.push(newReservation);
            res.send(false);
            
        }else{
            console.log("YOU WERE ADDED TO THE RESERVATION LIST!");
            reservations.push(newReservation);
            res.send(true);
        }
    })
}