'use strict';
/** @type {import('sequelize-cli').Migration} */
const {v4:uuidv4}=require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        defaultValue:()=>uuidv4,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tagId:{
        type:Sequelize.STRING,
        allowNull:false,
        references:{
          model:"PropertyTags",
          key:"id"

        }
    },

      propertyName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING,
        charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',

      },
      rating: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
      },
      hostBy: {
        type: Sequelize.STRING,
        references:{
          model:"Users",
          key:"id"
        }
      },
      image1: {
        type: Sequelize.STRING
      },
      image2: {
        type: Sequelize.STRING
      },
      image3: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.STRING
      },
      rat: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING,
        charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
      },
      slotAmount: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Properties');
  }
};