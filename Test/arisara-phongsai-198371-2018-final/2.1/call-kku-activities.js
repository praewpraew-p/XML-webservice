var request1 = require("request");
var http = require("http");
var file = 'https://www.kku.ac.th/ikku/api/activities/services/topActivity.php';

request1.get(file, (error, response, body) => {
    if (error) {
        return console.dir(error);
    }

    var resultOBJ = JSON.parse(body);
    var results = resultOBJ.activities;

    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8;'
        });

        var q = new Date();
        var m = q.getMonth();
        var d = q.getDay();
        var y = q.getFullYear();
        var n = 0;

        var date = new Date(y, m, d);
        var result = "<ol>";
        res.write("<h1>Current KKU Activities</h1>");

        for (var i = 0; i < results.length; i++) {
            if (results[i].dateEd <= date) {
                result += "<li>" + results[i].title + "<br>Date start:" + results[i].dateSt + "<br>Date end:" + results[i].dateEd + "<br>Place:"
                    + results[i].place + "<br><img src=" + results[i].image + "></li>";
                
            }
            n++;
            
        }

        if (n = 1) {
            res.write("<h2>There are " + n + " current activity </h2>");
        } else {
            res.write("<h2>There are " + n + " current activities </h2>");
        }

        result += "</ol>";
        res.write(result);
        console.log(result);

    }).listen(8080);
    console.log('Server running at http://localhost:8080')

});