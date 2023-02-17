'use strict';
/** @type {import('sequelize-cli').Migration} */
const {v4:uuidv4}=require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PropertyItems', {
      id: {
        allowNull: false,
        defaultValue:()=>uuidv4,
        primaryKey: true,
        type: Sequelize.STRING
      },
      roomName: {
        type: Sequelize.STRING,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      },
      price: {
        type: Sequelize.DOUBLE
      },
      description: {
        type: Sequelize.STRING,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      },
      images: {
        type: Sequelize.STRING
      },
      propertyId: {
        type: Sequelize.STRING,
        references:{
          model:"Properties",
          key:"id",
        }
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