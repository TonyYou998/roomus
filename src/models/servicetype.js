'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Service}) {
      // define association here
      this.hasMany(Service,{
        foreignKey:"serviceType"
      })
    }
  }
  ServiceType.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    typeName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServiceType',
  });
  return ServiceType;
};