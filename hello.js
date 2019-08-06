var http = require('http');

http.createServer(function (request, response) {
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
	console.log('request received');
}).listen(8124);

console.log('Server running at port 8124');