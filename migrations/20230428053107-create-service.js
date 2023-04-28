'use strict';
/** @type {import('sequelize-cli').Migration} */
const {v4:uuidv4}=require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
    
      id: {
        type: Sequelize.STRING,
        defaultValue:()=>uuidv4,
        allowNull: false,
        primaryKey: true,
      },
      serviceName: {
        type: Sequelize.STRING
      },
      bussinessId: {
        type: Sequelize.STRING,
        references:{
          model:"BussinessProfiles",
          key:"id"
        }
      },
      image: {
        type: Sequelize.STRING
      },
      serviceType: {
        type: Sequelize.INTEGER,
        references:{
          model:"ServiceTypes",
          key:"id"
        }
      },
      description: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      feedback: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Services');
  }
};