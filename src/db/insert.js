let { 
  UserModel,
} = require('./model/user_model');
let {
  findUserExist,
} = require('./find');
let {
  errorThrow,
} = require('../conf/connect')
const registerQuest = async (userQuery) => {
  let userList = await findUserExist({ 
    username: userQuery['username'] 
  })
  if (userList.length === 0) {
    let userDoc = new UserModel({
      username: userQuery['username'],
      password: userQuery['password']
    })
    return userDoc.save();
  } else {
    return errorThrow('账号已存在');
  }
}

module.exports = {
  registerQuest: registerQuest,
}