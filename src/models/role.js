'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({UserAccount}) {
      // define association here
      this.hasMany(UserAccount,{
        foreignKey:"role"
      })
    }
  }
  Role.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
    },
    roleName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};