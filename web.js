var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var str = fs.readFileSync('./index.html').toString();

app.get('/', function(request, response,str) {
	  response.send(str);
	});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
