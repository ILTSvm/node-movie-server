let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
})
mongoose.set('useCreateIndex', true);
module.exports = {
  UserSchema: UserSchema,
}