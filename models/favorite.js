'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({UserAccount,Service}) {
      // define association here
      this.belongsTo(UserAccount,{
        foreignKey:"userId",
      });
      this.belongsTo(Service,{
        foreignKey:"serviceId"
      })
    }
  }
  Favorite.init({
    id: DataTypes.STRING,
    userId: DataTypes.STRING,
    serviceId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};