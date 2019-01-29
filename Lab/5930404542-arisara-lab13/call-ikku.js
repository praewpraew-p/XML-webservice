var request1 = require("request");
var http = require("http");


request1.get("https://www.kku.ac.th/ikku/api/activities/services/topActivity.php", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var object = JSON.parse(body);
    
    var topAct = object.activities;
    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8;'
        });

        res.write("<h2>Top Activities in Khon Kaen University</h2>");
        res.write("<hr>");
        
        res.write("<table>");
        res.write("<body>");
        
        for (var i = 0; i < topAct.length; i++) {
            res.write("<tr>");
            res.write("<td style=\"padding-left: 20px;\">" + (i+1) + ". </td>");
            res.write("<td style=\"padding-left: 20px;\">" + topAct[i].dateSt + "</td>");
            res.write("<td style=\"padding-left: 20px;\"><a href=\"" + topAct[i].url + "\">" + topAct[i].title + "</a></td>");
            res.write("<td style=\"padding-left: 20px;\">" + topAct[i].contact.phone + "</td>");
        }

        res.write("</body>");
        res.write("</table>");
        
        
    }).listen(8080);
    console.log('Server running at http://localhost:8080')
});