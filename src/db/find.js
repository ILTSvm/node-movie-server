let { 
  UserModel,
} = require('./model/user_model');

let findUserExist = ({username, phone}) => {
  return UserModel.find({ username: username });
}

module.exports = {
  findUserExist: findUserExist,
}