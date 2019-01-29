var request1 = require("request");
var http = require("http");

request1.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Khon%20Kaen&key=AIzaSyAnpAwWLOt4B4SeV-_zWXpo86K4c12V1bs", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }

    var resultRq = JSON.parse(body);
    var nameRes = resultRq.results;
    http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
        response.write('<h2>Restaurants in Khon Kaen</h2>');
        response.write("<ol>");
        for (var i=0; i < nameRes.length; i++) {
            response.write("<li>" + nameRes[i].name + "</li>");
        }
        response.write("</ol>");
    }).listen(8081);
    
    console.log('Server running at http://localhost:8081/');
});

