'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ServiceItem}) {
      // define association here
      this.belongsTo(ServiceItem,{
        foreignKey:"serviceItemId"
      })
    }
  }
  Schedule.init({
    id:  {
      type:DataTypes.STRING,
      primaryKey:true,
    },
    time: DataTypes.DATE,
    serviceItemId: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};