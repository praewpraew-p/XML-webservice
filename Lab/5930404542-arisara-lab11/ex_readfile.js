var http = require("http");
var fs = require("fs");

//Create Server
http.createServer(function(request, response) {

    fs.readFile("kaokonlakao.txt", function(err, data) {
        if (err) {
            console.log(err.stack);
            response.writeHead(404, {'Content-Type': 'text/plain'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8080);

console.log('Server running at http://localhost:8080/');


