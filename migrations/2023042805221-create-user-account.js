"use strict";
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserAccounts', {
    
      id: {
        type: Sequelize.STRING,
         defaultValue:()=>uuidv4,
        allowNull: false,
        defaultValue: () => uuidv4,
        primaryKey: true,
      },
     
      role: {
        type: Sequelize.INTEGER,
        references:{
          model:"Roles",
          key:"id"
        }
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        set(value) {
          this.setDataValue("email", value.trim());
        },
      },
      password: {
        type: Sequelize.STRING(512),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      fullname: {
        type: Sequelize.STRING(512),
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
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
    await queryInterface.dropTable('UserAccounts');
  }
};
