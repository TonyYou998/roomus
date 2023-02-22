'use strict';
/** @type {import('sequelize-cli').Migration} */
const {v4:uuidv4}=require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue:()=>uuidv4,
        type: Sequelize.STRING
      },
   
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING(512)
      },
      username: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING,
        charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
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
    await queryInterface.dropTable('Users');
  }
};