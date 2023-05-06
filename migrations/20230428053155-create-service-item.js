"use strict";
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ServiceItems', {
      id: {
        type: Sequelize.STRING,
        defaultValue:()=>uuidv4,
        allowNull: false,
        primaryKey: true,
      },
      serviceId: {
        type: Sequelize.STRING,
        references:{
          model:"Services",
          key:"id"
        }
      },
      serviceItemName:{
        type:Sequelize.STRING,
      },
      images: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      description: {
        type: Sequelize.STRING
      },
      itemType: {
        type: Sequelize.INTEGER,
        references:{
          model:"ItemTypes",
          key:"id"
        }
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
    },{
      charset: "utf8",
      collate: "utf8_unicode_ci",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ServiceItems');
  }
};
