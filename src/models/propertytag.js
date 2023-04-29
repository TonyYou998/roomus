'use strict';
const {
  Model
} = require('sequelize');
const {v4:uuidv4}=require('uuid');
module.exports = (sequelize, DataTypes) => {
  class PropertyTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Property}) {
      // define association here
      this.hasMany(Property,{
        foreignKey:"tagId"
      })
    }
  }
  PropertyTag.init({
    id: {
      type:DataTypes.STRING,
      defaultValue:uuidv4,
      primaryKey:true,
      allowNull:false
    },
    tagName: {
      charset: 'utf8mb4',
      collate:'utf8mb4_unicode_ci',
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'PropertyTag',
  });
  return PropertyTag;
};