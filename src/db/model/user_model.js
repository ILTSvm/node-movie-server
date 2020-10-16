let connection = require('../connection');
let { UserSchema, UserInfoSchema } = require('../schema/user_schema');

let UserModel = connection.model('User', UserSchema);
let UserInfoModel = connection.model('UserInfo', UserInfoSchema);

module.exports = {
  UserModel,
  UserInfoModel,
}