const connection = require('../connection');
const { MovieSchema } = require('../schema/movie_schema');

const MovieModel = connection.model('Movie', MovieSchema);

module.exports = {
  MovieModel,
}