'use strict';
/** @type {import('sequelize-cli').Migration} */
const {v4:uuidv4}=require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
   
      id: {
        type: Sequelize.STRING,
        defaultValue:()=>uuidv4,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: Sequelize.STRING
      },
      accountId: {
        type: Sequelize.STRING,
        references:{
          model:"UserAccounts",
          key:"id"
        }
      },
      serviceItemId: {
        type: Sequelize.STRING,
        references:{
          model:"ServiceItems",
          key:"id"
        }
      },
      bookingTime: {
        type: Sequelize.DATE
      },
      checkinDay: {
        type: Sequelize.DATE
      },
      checkoutDay: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Bookings');
  }
};