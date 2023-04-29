'use strict';
/** @type {import('sequelize-cli').Migration} */
const {v4:uuidv4}=require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BussinessProfiles', {
   
      id: {
        type: Sequelize.STRING,
        defaultValue:()=>uuidv4,
        allowNull: false,
        primaryKey: true,
      },
      fullname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      nameHost: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      taxNumber: {
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
    await queryInterface.addColumn('BussinessProfiles', 'userId', {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'UserAccounts',
        key: 'id',
      },
      unique: true,
    });
    await queryInterface.addConstraint('BussinessProfiles', {
      type: 'unique',
      fields: ['userId'],
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BussinessProfiles');
  }
};