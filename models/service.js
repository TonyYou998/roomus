'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Favorite,ServiceItem,Bussiness,ServiceType}) {
      // define association here
      this.belongsTo(Bussiness,{
        foreignKey:"bussinessId",
      });
      this.belongsTo(ServiceType,{
        foreignKey:"serviceType"
      });
      this.hasMany(ServiceItem,{
        foreignKey:"serviceId"
      });
      this.hasMany(Favorite,{
        foreignKey:"serviceId"
      })
    }
  }
  Service.init({
    id: DataTypes.STRING,
    serviceName: DataTypes.STRING,
    bussinessId: DataTypes.STRING,
    image: DataTypes.STRING,
    serviceType: DataTypes.INTEGER,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    feedback: DataTypes.STRING,
    rating: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};