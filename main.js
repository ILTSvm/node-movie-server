let http = require('http');
let api = require ('./server/api')
const url = require('url');
const qs = require('querystring');
const { registerQuest } = require('./src/controller/user/index');
const { returnData } = require('./src/conf/connect');

http.createServer(async (req,res)=>{
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	const reqUrl = url.parse(req.url);
	if(reqUrl['pathname'] === '/api/user/login'){
			const uid = qs.parse(reqUrl.query).userId;
			let result = await returnData(uid);
			result = JSON.stringify(result);
			res.end(result);
	}else if(reqUrl['pathname'] === '/'){
		res.end(''); 
	}else if('/api/user/register'){
		let userQuery = ''
		req.on('data', chunk => {
			userQuery += chunk;
		}) 
		req.on('end', async ()=>{
			const result = await registerQuest(JSON.parse(userQuery));
			console.log(result,'result')
			res.end(JSON.stringify(result));
		})
	}else { 
		res.writeHead(404);
		res.end('NotFund');
	}
}).listen(8000,'127.0.0.1');

console.log('server running at localhost')