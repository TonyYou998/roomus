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
     await queryInterface.bulkInsert('ServiceItems', [{
        id: 1,
        serviceId: "61131c50-706e-4b3e-bff1-38ce4f90dead",
        images: "hinh",
        status: true,
        price: 1000,
        description: "Phòng idol",
        itemType: 1,
        
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
     await queryInterface.bulkDelete('ServiceItems', null, {});
    
  }
};