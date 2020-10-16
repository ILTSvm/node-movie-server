let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
})

let UserInfoSchema = new mongoose.Schema({
  name: String,
  phone: Number,
})
mongoose.set('useCreateIndex', true);
module.exports = {
  UserSchema,
  UserInfoSchema,
}