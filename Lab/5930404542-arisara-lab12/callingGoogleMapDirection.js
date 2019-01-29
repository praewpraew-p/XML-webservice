var request1 = require("request");
var http = require("http");

request1.get("https://maps.googleapis.com/maps/api/directions/json?origin=Khon%20Kaen&destination=Bangkok&key=AIzaSyCFDDrpxb10yrE5fTHXKExS7KwlG6yfdEw", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }

    var result = JSON.parse(body);

    var getDirect = result.routes[0].legs[0].steps;

    http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.write('<h2>Directions from Khon Kaen to Bangkok</h2>');
        response.write("<ol>");
        for (var i = 0; i < getDirect.length; i++) {
            response.write("<li>" + getDirect[i].html_instructions + "</li>");
            response.write("<div style=\"color: blue;\">(" + getDirect[i].distance.text + ")</div>");
        }
        response.write("</ol>");
        response.end();
    }).listen(8081);

    console.log('Server running at http://localhost:8081/');
});
