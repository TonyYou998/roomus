'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ServiceItem}) {
      // define association here
      this.hasMany(ServiceItem,{
        foreignKey:"itemType"
      });
    }
  }
  ItemType.init({
    id: DataTypes.INTEGER,
    typeName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ItemType',
  });
  return ItemType;
};