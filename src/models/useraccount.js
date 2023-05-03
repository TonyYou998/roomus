"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  class UserAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Customer, BussinessProfile, Booking, Favorite, Role }) {
      // define association here
      this.hasMany(Booking, {
        foreignKey: "accountId",
      });
      this.hasMany(Favorite, {
        foreignKey: "userId",
      });
      this.belongsTo(Role, {
        foreignKey: "role",
      });
      this.hasOne(BussinessProfile, {
        foreignKey: "userId",
      });
      this.hasOne(Customer, {
        foreignKey: "userId",
      });
    }

    static async findByCredentials({ password, username } = {}) {
      try {
        if (!username || !password) {
          throw Error(`Email/ username and password are required to login!`);
        }
        let user = await this.findOne({
          where: { email: username },
        });
        if (!user)
          user = await this.findOne({
            where: { username: username },
          });
        if (!user) {
          throw Error(
            `Sorry, we can't find your account with this email/ username.`
          );
        }
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched)
          throw Error(`Your email/ username or password is incorrect!`);
        return user;
      } catch (error) {
        throw error;
      }
    }

    async generateAuthToken() {
      const user = this;
      const token = jwt.sign(
        { id: user.id, email: user.email },
        "vh5iz1VsJeciZ8TA",
        {
          expiresIn: 3600 * 24,
        }
      );
      return { token };
    }
  }
  UserAccount.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      fullname: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
    },
    {
      // defaultScope: {
      //   attributes: {
      //     exclude: ["password"],
      //   },
      // },
      sequelize,
      modelName: "UserAccount",
    }
  );

  UserAccount.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 12);
  });

  return UserAccount;
};
