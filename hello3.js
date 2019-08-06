let http = require('http');
let fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {

	//console.log(req.url);/favicon.ico

	let name = require('url').parse(req.url, true).query.name;

	if (name === undefined) name = 'world';

	if (name == 'burningbird') {
		let file = 'phoenix5a.png';
		fs.stat(file, function (err, stat) {
			if (err) {
				console.error(err);
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end("Sorry, Burningbird isn't around right now \n");
			} else {
				/*let img = fs.readFileSync(file);
				res.contentType = 'image/png';
				res.contentLength = stat.size;
				res.end(img, 'binary');*/
				fs.readFile(file, (err, data) => {
					res.contentType = 'image/png';
					res.contentLength = stat.size;
					res.end(data, 'binary');
				});
			}
		});
	} else {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end(`Hello ${name}\n`);
	}
	//console.log('request received');
});

server.listen(8124);

console.log('Server running at port 8124');