'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Booking,Favorite,Role}) {
      // define association here
      this.hasMany(Booking,{
        foreignKey:"accountId",
      });
      this.hasMany(Favorite,{
        foreignKey:"userId",
      });
      this.belongsTo(Role,{
        foreignKey:"role"
      })
    }
  }
  UserAccount.init({
    id: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserAccount',
  });
  return UserAccount;
};