var express = require('express');
var app = express();
var request1 = require("request");
var http = require("http");

const file = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=2749c7b7b8b241eba3db5035970b28ad',
    file_write = 'data_write.json';

const jsonfile = require('jsonfile');



request1.get(file, (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var resultOBJ = JSON.parse(body);

    jsonfile.readFile(resultOBJ, function (err, obj) {
        if (err) {
            console.error(err)
        }

        var newsArr = [];
        for (var i = 0; i < obj.articles.length; i++) {
            var title = obj.articles[i].title;
            var url = obj.articles[i].url;
            var image = obj.articles[i].urlToImage;

            var newObj = {};
            newObj.title = title;
            newObj.url = url;
            newObj.image = image;
            newsArr.push(newObj);
        }

        const obj2 = {
            news: newsArr
        }

        jsonfile.writeFile(file_write, obj2, function (err) {
            if (err) console.error(err)
            res.send(obj2);
        })
    }).listen(8080);
    console.log('Server running at http://localhost:8080')
});
