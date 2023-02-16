'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PropertyItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      roomName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      description: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      propertyId: {
        type: Sequelize.STRING
      },
      roomStatus: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('PropertyItems');
  }
};