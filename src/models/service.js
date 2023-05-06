"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favorite, ServiceItem, BussinessProfile, ServiceType }) {
      // define association here
      this.belongsTo(BussinessProfile, {
        foreignKey: "bussinessId",
      });
      this.belongsTo(ServiceType, {
        foreignKey: "serviceType",
      });
      this.hasMany(ServiceItem, {
        foreignKey: "serviceId",
      });
      this.hasMany(Favorite, {
        foreignKey: "serviceId",
      });
    }
  }
  Service.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      serviceName: DataTypes.STRING,
      bussinessId: DataTypes.STRING,
      image: DataTypes.STRING,
      serviceType: DataTypes.INTEGER,
      description: DataTypes.STRING,
      address: DataTypes.STRING,
      feedback: DataTypes.STRING,
      price: DataTypes.STRING,
      rating: DataTypes.DOUBLE,
      paymentMethod: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
