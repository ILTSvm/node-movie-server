let mongoose = require('mongoose');
let connection = require('./connection');

let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
})
let UserModel = connection.model('User', UserSchema);

const registerQuest = (userQuery) => {
  let userDoc = new UserModel({
    username: userQuery['username'],
    password: userQuery['password']
  })
  return userDoc.save();
}

module.exports = {
  registerQuest: registerQuest,
}