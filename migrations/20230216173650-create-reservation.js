'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      reservationDate: {
        type: Sequelize.DATE
      },
      checkinDate: {
        type: Sequelize.DATE
      },
      checkoutDate: {
        type: Sequelize.DATE
      },
      reservationStatus: {
        type: Sequelize.BOOLEAN
      },
      reservationCode: {
        type: Sequelize.STRING
      },
      reserveBy: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      roomId: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      address: {
        type: Sequelize.STRING
      },
      roomName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');
  }
};