"use strict";
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reservations", {
      id: {
        allowNull: false,
        defaultValue: () => uuidv4,
        primaryKey: true,
        type: Sequelize.STRING,
      },

      reservationDate: {
        type: Sequelize.DATE,
      },
      checkinDate: {
        type: Sequelize.DATE,
      },
      checkoutDate: {
        type: Sequelize.DATE,
      },
      reservationStatus: {
        type: Sequelize.BOOLEAN,
      },
      reservationCode: {
        type: Sequelize.STRING,
      },
      reserveBy: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "id",
        },
      },
      images: {
        type: Sequelize.STRING,
      },
      roomId: {
        type: Sequelize.STRING,
        references: {
          model: "PropertyItems",
          key: "id",
        },
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      address: {
        type: Sequelize.STRING,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      },
      roomName: {
        type: Sequelize.STRING,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reservations");
  },
};
