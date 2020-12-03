const userApi = require('./user/index');
const movieApi = require('./movie/index');
module.exports = {
  ...userApi,
  ...movieApi,
}