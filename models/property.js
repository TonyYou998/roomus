'use strict';
const{V4: uuidv4}=require('uuid');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init({
    id: {
      type: DataTypes.STRING,
      defaultValue: uuidv4,
      allowNull:false,
      primaryKey:true

    },
    propertyName: {
      type: DataTypes.STRING,
      defaultValue:uuidv4,
      allowNull:false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    address: {
      type:DataTypes.STRING,
      defaultValue:uuidv4,
      allowNull:false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    rating: DataTypes.INTEGER,
    description: {
      type:DataTypes.STRING,
      defaultValue:uuidv4,
      allowNull:false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    hostBy: DataTypes.STRING,
    image: DataTypes.STRING,
    long: DataTypes.STRING,
    rat: DataTypes.STRING,
    category: {
      type: DataTypes.STRING,
      defaultValue:uuidv4,
      allowNull:true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    },
    slotAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};