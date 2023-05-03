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
          serviceName: "Sân Bóng BeCon",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa8",
          image: "sdasdasd",
          serviceType: 2,
          description: "this is description",
          address: "215 Mai Chí Thọ",
          feedback: "helo",
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
          id: uuidv4(),
          serviceName: "Phòng họp-Old Office",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa9",
          image: "sdasdasd",
          serviceType: 1,
          description: "hi",
          address: "115 Sư Vạn Hạnh",
          feedback: "maaaaaaa",
          rating: 1,

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
          id: uuidv4(),
          serviceName: "Phòng họp-New Office",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa9",
          image: "sdasdasd",
          serviceType: 1,
          description: "hi",
          address: "115 Sư Vạn Hạnh",
          feedback: "maaaaaaa",
          rating: 1,

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
          id: uuidv4(),
          serviceName: "Studio Talent",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa9",
          image: "sdasdasd",
          serviceType: 3,
          description: "hi",
          address: "315 Bùi Hữu Nghĩa",
          feedback: "pretty",
          rating: 1,

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
          id: uuidv4(),
          serviceName: "Studio Hitech",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa7",
          image: "sdasdasd",
          serviceType: 3,
          description: "hi",
          address: "315 Bùi Hữu Nghĩa",
          feedback: "pretty",
          rating: 1,

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
          id: uuidv4(),
          serviceName: "Sân bóng Hitech",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa7",
          image: "sdasdasd",
          serviceType: 2,
          description: "hi",
          address: "315 Bùi Hữu Nghĩa",
          feedback: "nice",
          rating: 1,

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
          id: uuidv4(),
          serviceName: "Office Hitech",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa7",
          image: "sdasdasd",
          serviceType: 2,
          description: "hi",
          address: "315 Bùi Hữu Nghĩa",
          feedback: "nice",
          rating: 1,

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
          id:"405a020e-b1ee-474c-8135-9b11c835f689",
          serviceName: "Office new Hitech",
          bussinessId: "8e8bc057-51d5-480d-9bde-5ceeca669aa7",
          image: "sdasdasd",
          serviceType: 2,
          description: "hi",
          address: "31 Bùi Hữu Nghĩa",
          feedback: "nice",
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
