"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(12);
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
<<<<<<< HEAD
    */
     await queryInterface.bulkInsert('UserAccounts', [{
        id:uuidv4(),
        email:"tanvuu998@gmail.com",
        password:bcrypt.hashSync("1234",salt),
        username:"tanvuu998",
        role:1,
         createdAt: "2021-09-11 07:25:30",
          updatedAt: "2021-09-11 07:25:30"
       }], {});
     
=======
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuidv4(),
          email: "tanvuu998@gmail.com",
          password: bcrypt.hashSync("1234", salt),
          username: "tanvuu998",
          fullname: "Tấn Vưu",
          role: "Host",
          phone: "0368510465",
          createdAt: "2021-09-11 07:25:30",
          updatedAt: "2021-09-11 07:25:30",
        },
      ],
      {}
    );
>>>>>>> master
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
<<<<<<< HEAD
     await queryInterface.bulkDelete('UserAccounts', null, {});
    
  }
};
=======
    await queryInterface.bulkDelete("PropertyTags", null, {});
  },
};
>>>>>>> master
