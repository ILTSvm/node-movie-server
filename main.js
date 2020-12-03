let http = require('http');
const url = require('url');
const { requestApi } = require('./src/router/router_map')
http.createServer(async (req, res)=>{
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	const reqUrl = url.parse(req.url);
	requestApi(reqUrl, req, res);
}).listen(8200,'127.0.0.1');

console.log('server running at localhost')