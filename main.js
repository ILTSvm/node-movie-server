let http = require('http');
let api = require ('./server/api')
const url = require('url');
const qs = require('querystring');

const mock = userId => ({
  success: true,
  data: {
    userId,
    date: new Date(),
  }
})

http.createServer((req,res)=>{
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	const reqUrl = url.parse(req.url);
	if(reqUrl['pathname'] === '/api/user/login'){
			const uid = qs.parse(reqUrl.query).userId;
			const result = JSON.stringify(mock(uid));
			res.end(result);
	}else if(reqUrl['pathname'] === '/'){
		res.end(''); 
	}else {
			res.writeHead(404);
			res.end('NotFund');
	}
}).listen(8000,'127.0.0.1');

console.log('server running at localhost')