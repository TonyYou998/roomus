'use strict';
const{v4: uuidv4}=require('uuid');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Reservation,Property}) {
      // define association here
      this.hasMany(Reservation,{
        foreignKey:"reserveBy",
      });
      this.hasMany(Property,{
        foreignKey:"hostBy",
      });
    }
  }
  User.init({
    id:{
        type: DataTypes.STRING,
        defaultValue: ()=>uuidv4,
        allowNull:false,
        primaryKey:true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    avatar: DataTypes.STRING,
    phone: DataTypes.STRING,
    fullname: {
      type:DataTypes.STRING,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};