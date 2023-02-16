'use strict';
const{v4:uuidv4}=require('uuid');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservation.init({
    id: {
      type:DataTypes.STRING,
      defaultValue: ()=>uuidv4,
      primaryKey:true,
      allowNull:false,
    },

    reservationDate: DataTypes.DATE,
    checkinDate: DataTypes.DATE,
    checkoutDate: DataTypes.DATE,
    reservationStatus: DataTypes.BOOLEAN,
    reservationCode: DataTypes.STRING,
    reserveBy: DataTypes.STRING,
    images: DataTypes.STRING,
    roomId: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    address: {
      type:DataTypes.STRING,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    roomName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};