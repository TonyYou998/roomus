"use strict";
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Properties", {
      id: {
        allowNull: false,
        defaultValue: () => uuidv4,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      tagId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "PropertyTags",
          key: "id",
        },
      },

      propertyName: {
        type: Sequelize.STRING,
        allowNull: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      },
      hostBy: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "id",
        },
      },
      image1: {
        type: Sequelize.STRING,
      },
      image2: {
        type: Sequelize.STRING,
      },
      image3: {
        type: Sequelize.STRING,
      },
      long: {
        type: Sequelize.STRING,
      },
      rat: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      },
      slotAmount: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Properties");
  },
};
