let mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  info: String,
})

mongoose.set('useCreateIndex', true);

module.exports = {
  MovieSchema,
}