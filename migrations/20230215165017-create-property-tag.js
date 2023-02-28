'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PropertyTags', {
      id: {
        type:Sequelize.STRING,
        defaultValue:()=>uuidv4,
        primaryKey:true,
        allowNull:false
      },
   
      tagName: {
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
    await queryInterface.dropTable('PropertyTags');
  }
};