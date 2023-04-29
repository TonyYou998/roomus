'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({UserAccount}) {
      // define association here
      this.belongsTo(UserAccount,{
        foreignKey:"userId"
      })
    }
  }
  Customer.init({
    id: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    birthdate: DataTypes.DATE,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};