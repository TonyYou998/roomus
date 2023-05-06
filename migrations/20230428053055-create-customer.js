'use strict';
/** @type {import('sequelize-cli').Migration} */
const {v4:uuidv4}=require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
    
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
      gender: {
        type: Sequelize.INTEGER
      },
      birthdate: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      phoneNumber: {
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
    },{
      charset: "utf8",
      collate: "utf8_unicode_ci",
    });
    await queryInterface.addColumn('Customers', 'userId', {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'UserAccounts',
        key: 'id',
      },
      unique: true,
    },{
      charset: "utf8",
      collate: "utf8_unicode_ci",
    });
    await queryInterface.addConstraint('Customers', {
      type: 'unique',
      fields: ['userId'],
    },{
      charset: "utf8",
      collate: "utf8_unicode_ci",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers');
  }
};