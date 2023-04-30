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
       await queryInterface.bulkInsert('BussinessProfiles', [{
        id: "8e8bc057-51d5-480d-9bde-5ceeca669aa9",
        fullname: "ROOMUS",
        email: "roomus@gmail.com",
        nameHost: "roomus",
        address: "VNU CAMPUS",
        description: "test",
        taxNumber: "113 911 115",
        userId:"8e8bc057-51d5-480d-9bde-5ceeca669aa9",
        
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
     await queryInterface.bulkDelete('BussinessProfiles', null, {});
    
  }
};