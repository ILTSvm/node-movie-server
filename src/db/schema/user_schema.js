const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
})

const UserInfoSchema = new mongoose.Schema({
  name: String,
  phone: Number,
})
mongoose.set('useCreateIndex', true);
module.exports = {
  UserSchema,
  UserInfoSchema,
}