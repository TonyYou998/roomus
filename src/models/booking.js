'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ServiceItem,UserAccount}) {
      // define association here
      this.belongsTo(UserAccount,{
        foreignKey:"accountId"
      });
      this.belongsTo(ServiceItem,{
        foreignKey:"serviceItemId"
      });
    }
  }
  Booking.init({
    id: {
      type: DataTypes.STRING,
      primaryKey:true
    },
    status: DataTypes.STRING,
    accountId: DataTypes.STRING,
    serviceItemId: DataTypes.STRING,
    bookingTime: DataTypes.DATE,
    checkinDay: DataTypes.DATE,
    checkoutDay: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};