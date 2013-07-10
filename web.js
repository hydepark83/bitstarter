var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var file = fs.readFileSync('./index.html');
var string = buf.toString(file);

app.get('/', function(request, response, string) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
