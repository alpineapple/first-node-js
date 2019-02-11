var http = require('http');
var date = require('./myfirstmodule');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World! ');
    response.write(date.myDateTime());
    response.end();
}).listen(8080);
