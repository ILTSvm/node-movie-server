const connection = require('../connection');
const { UserSchema, UserInfoSchema } = require('../schema/user_schema');

const UserModel = connection.model('User', UserSchema);
const UserInfoModel = connection.model('UserInfo', UserInfoSchema);

module.exports = {
  UserModel,
  UserInfoModel,
}