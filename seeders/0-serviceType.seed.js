'use strict';
const {v4:uuidv4}=require('uuid');
const bcrypt=require('bcryptjs');
const salt=bcrypt.genSaltSync(10);
module.exports = {
   
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('ServiceTypes', [{
        id:1,
        typeName: "Phòng Họp",
         createdAt: "2021-09-11 07:25:30",
          updatedAt: "2021-09-11 07:25:30"
       }], {});
       await queryInterface.bulkInsert('ServiceTypes', [{
        id:2,
        typeName: "Sân Bóng",
         createdAt: "2021-09-11 07:25:30",
          updatedAt: "2021-09-11 07:25:30"
       }], {});
       await queryInterface.bulkInsert('ServiceTypes', [{
        id: 3,
        typeName: "Studious",
         createdAt: "2021-09-11 07:25:30",
          updatedAt: "2021-09-11 07:25:30"
       }], {});
     
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('ServiceTypes', null, {});
    
  }
};