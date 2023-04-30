"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
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
     */
    await queryInterface.bulkInsert(
      "Services",
      [
        {
          id: uuidv4(),
          serviceName: "Nhà thổ",
          bussinessId: "a02d620b-e09f-471d-9000-6476ad573535",
          image: "sdasdasd",
          serviceType: 1,
          description: "đây là nhà thổ",
          address: "113 Trần Duy Hưng",
          feedback: "em tuyệt lắm",
          rating: 5,

          createdAt: "2021-09-11 07:25:30",
          updatedAt: "2021-09-11 07:25:30",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Services",
      [
        {
          id: "61131c50-706e-4b3e-bff1-38ce4f90dead",
          serviceName: "Nhà ma",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa9",
          image: "sdasdasd",
          serviceType: 1,
          description: "đây là nhà bị ám",
          address: "115 bệnh viện chợ rẫy",
          feedback: "maaaaaaa",
          rating: 1,

          createdAt: "2021-09-11 07:25:30",
          updatedAt: "2021-09-11 07:25:30",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Services", null, {});
  },
};
