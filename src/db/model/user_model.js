let connection = require('../connection');
let { UserSchema } = require('../schema/user_schema');

let UserModel = connection.model('User', UserSchema);

module.exports = {
  UserModel: UserModel,
}