'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BussinessProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Service}) {
      // define association here
      this.hasMany(Service,{
        foreignKey:"bussinessId",
      })
      
    }
  }
  BussinessProfile.init({
    id: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    nameHost: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    taxNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BussinessProfile',
  });
  return BussinessProfile;
};