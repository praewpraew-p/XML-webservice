var express = require('express');
var app = express();
var jsonfile = require('jsonfile');
var file = 'data.json'

app.get('/', function(req,res) {
    jsonfile.readFile(file, function(err, object){
        if (err) {
            console.dir(object);
        }
        res.send(object);
        var obj_course = object["courses"]
        var course = obj_course[1]
        var residence = object["places"]["residence"]
        console.log('=== The values of the second course and the residance ===');
        console.log('Studying ' + course + ' living in ' + residence)
    })
}).listen(8080);

/*var express = require('express');
var app = express();
var fs = require('fs');
var jsonfile = require('jsonfile');

const file = 'data.json';
const obj = {
    'name': 'CM',
    'courses': [
        '198330',
        '198371'
    ],
    'places': {
        'residence': 'Khon Kaen',
        'visits': [
            'Songkla',
            'Bangkok'
        ]
    }
}

jsonfile.writeFile(file, obj, function (err) {
    if (err) console.error(err)
  })

app.get('/', function (req, res) {
    fs.readFile(__dirname + "/" + "data.json", "utf8",
        function (err, data) {
            data = JSON.parse(data);
            //showing in cmd after open the server 
            console.log("=== The values of the second course and the residence ===");
            console.log("Studying" + data.courses[1] + "living in " + data.places.residence);
            res.send(data);
        });
})

var server = app.listen(8081, function () {
    //console.log("Example app listening at http://127.0.0.1:8081");
    //showing in cmd
})*/