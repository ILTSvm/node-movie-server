const api = require('../controller/index')
const url = require('url')
module.exports = {
  commonFlag: '/api',
  requestApi: async (route, req, res) => {
    const reqUrl = route.substring(4);
    let userQuery = '';
    req.on('data', chunk => {
			userQuery += chunk;
		})
		req.on('end', async ()=>{
      console.log(JSON.parse(userQuery))
			const result = await api[reqUrl](JSON.parse(userQuery));
			console.log(result,'result')
			res.end(JSON.stringify(result));
		})
  }
}