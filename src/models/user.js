"use strict";
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { Model } = require("sequelize");

const User = function (sequelize, DataTypes) {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservation, Property }) {
      // define association here
      this.hasMany(Reservation, {
        foreignKey: "reserveBy",
      });
      this.hasMany(Property, {
        foreignKey: "hostBy",
      });
    }
    async generateAuthToken() {
      const user = this;
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        }
      );
      console.log(user);
      user.token = token;
      await user.save();
      return token;
    }
    async findByCredentials({ password, username } = {}) {
      try {
      } catch (error) {}
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: () => uuidv4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        set(value) {
          this.setDataValue("email", value.trim());
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      role: DataTypes.STRING,
      avatar: DataTypes.STRING,
      phone: { type: DataTypes.STRING, unique: true },
      user_token: { type: DataTypes.STRING },
      fullname: {
        type: DataTypes.STRING,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

module.exports = User;
