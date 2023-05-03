"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserAccount, Service }) {
      // define association here
      this.belongsTo(UserAccount, {
        foreignKey: "userId",
      });
      this.belongsTo(Service, {
        foreignKey: "serviceId",
      });
    }
  }
  Favorite.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      userId: { type: DataTypes.STRING, allowNull: false },
      serviceId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
