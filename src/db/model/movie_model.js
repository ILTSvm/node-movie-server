let connection = require('../connection');
let { MovieSchema } = require('../schema/movie_schema');

let MovieModel = connection.model('User', MovieSchema);

module.exports = {
  MovieModel,
}