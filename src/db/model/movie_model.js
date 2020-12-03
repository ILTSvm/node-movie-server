let connection = require('../connection');
let { MovieSchema } = require('../schema/movie_schema');

let MovieModel = connection.model('Movie', MovieSchema);

module.exports = {
  MovieModel,
}