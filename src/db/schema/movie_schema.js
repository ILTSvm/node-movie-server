const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: String,
  dec: String,
  cover: String,
})

mongoose.set('useCreateIndex', true);

module.exports = {
  MovieSchema,
}