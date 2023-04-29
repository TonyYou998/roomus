'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Booking,Schedule,ItemType,Service}) {
      // define association here
      this.belongsTo(Service,{
        foreignKey:"serviceId",
      });
      this.belongsTo(ItemType,{
        foreignKey:"itemType",
      });
      this.hasMany(Schedule,{
        foreignKey:"serviceItemId"
      });
      this.hasMany(Booking,{
        foreignKey:"serviceItemId"
      })
    }
  }
  ServiceItem.init({
    id: DataTypes.STRING,
    serviceId: DataTypes.STRING,
    images: DataTypes.STRING,
    status: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    itemType: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServiceItem',
  });
  return ServiceItem;
};