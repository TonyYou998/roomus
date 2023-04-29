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
     await queryInterface.bulkInsert('UserAccounts', [{
        id:"8e8bc057-51d5-480d-9bde-5ceeca669aa9",
        email:"tanvuu998@gmail.com",
        password:bcrypt.hashSync("1234",salt),
        username:"tanvuu998",
        role:1,
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
     await queryInterface.bulkDelete('UserAccounts', null, {});
    
  }
};