// http://localhost:3000/user?name=mrscorpion&url=www.mrscorpion.github.io

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	// 解析 url 参数
	var params = url.parse(req.url, ture).query;
	res.write("用户名： " + params.name);
	res.write("\n");
	res.write("url " + params.url);
	res.end();
}).listen(3000);