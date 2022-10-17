"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "go to db assessment",
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "go to redux assessment",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     *
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
  },
};
