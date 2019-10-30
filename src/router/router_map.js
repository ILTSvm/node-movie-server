const api = require('../controller/index')
const url = require('url')
let apiMap = {

}
module.exports = {
  commonFlag: '/api',
  requestApi: (route, req, res) => {
    const reqUrl = url.parse(req.url);
    switch(`${this.commonFlag}${route}`){
      case `${this.commonFlag}/user`: {
        api.registerQuest()
      }
    }
  }
}