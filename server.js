var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("Hello World!");
}).listen(8080);
