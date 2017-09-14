var express = require("express");
var path = require("path");

module.exports = function(app){
    app.use(express.static(path.join(__dirname, '../public')));

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });

    app.get('/reserve',function(req, res){
        res.sendFile(path.join(__dirname, '../public/reserve.html'))
    });

    app.get('/table',function(req, res){
        res.sendFile(path.join(__dirname, '../public/table.html'))
    });
}