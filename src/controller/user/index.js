let { 
  UserModel,
} = require('../../db/model/user_model');
let {
  errorThrow,
} = require('../../conf/connect')

const findUserExist = ({username, phone}) => {
  return UserModel.find({ username: username });
}

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

const loginQuest = async (userQuery) => {
  let userList = await findUserExist({ 
    username: userQuery['username'],
    password: userQuery['password']
  })
  if (userList.length === 0) {
    return returnData({},'登陆成功')
  } else {
    return errorThrow('登录失败');
  }
}

module.exports = {
  findUserExist: findUserExist,
  registerQuest: registerQuest,
  loginQuest: loginQuest,
}