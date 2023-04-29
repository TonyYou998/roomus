'use strict';
const {
  Model
} = require('sequelize');
const {v4: uuidv4}=require('uuid');
module.exports = (sequelize, DataTypes) => {
  class PropertyItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Property,Reservation}) {
      // define association here
      this.belongsTo(Property,
        {
          foreignKey:"propertyId",
        }
        );
        this.hasMany(Reservation,{
          foreignKey:"roomId"
        });
    }
  }
  PropertyItem.init({
    id: {
      type:DataTypes.STRING,
      defaultValue: ()=>uuidv4,
      primaryKey:true,
      allowNull:false
    },
    roomName: {
      type:DataTypes.STRING,
      charset: 'utf8mb4',
      collate:'utf8mb4_unicode_ci'

    },
    price: DataTypes.DOUBLE,
    description:{
      type:DataTypes.STRING,
      charset: 'utf8mb4',
      collate:'utf8mb4_unicode_ci'

    },
    images: DataTypes.STRING,
    propertyId: DataTypes.STRING,
    roomStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PropertyItem',
  });
  return PropertyItem;
};