const api = require('../controller/index')
const url = require('url')
let apiMap = {

}
module.exports = {
  commonFlag: '/api',
  requestApi: async (route, req, res) => {
    const reqUrl = url.parse(req.url);
    switch(`${this.commonFlag}${route}`){
      case `${this.commonFlag}/user`: {
        await api.registerQuest()
      }
    }
  }
}