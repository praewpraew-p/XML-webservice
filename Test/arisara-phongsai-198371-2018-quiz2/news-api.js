var request1 = require("request");
var http = require("http");
var express = require('express');
var app = express();
var jsonfile = require('jsonfile');
var file = 'call-news.html'
const datafile = 'data.json';


app.get(file, function (req, res) {
    request1.readFile(file,
        function (err, data) {
            data = JSON.parse(data);
            //showing in cmd after open the server 
            res.send(data);
        });

})

jsonfile.writeFile(datafile, file, function (err) {
    if (err) console.error(err)
})

var server = app.listen(8081, function () {
    console.log("Example app listening at http://127.0.0.1:8081");
    //showing in cmd
})