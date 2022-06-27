"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bicycles",
      [
        {
          color: "Green",
          gears: 8,
          brand: "Caloi",
          model: "Tracker",
          price: 2500,
        },
        {
          color: "Blue",
          gears: 10,
          brand: "Sundown",
          model: "Speed",
          price: 5000,
        },
        {
          color: "Red",
          gears: 16,
          brand: "GTS",
          model: "Mountian-Bike",
          price: 22000,
        },
        {
          color: "Green",
          gears: 6,
          brand: "Caloi",
          model: "Speed",
          price: 1500,
        },
        {
          color: "Yellow",
          gears: 8,
          brand: "Monark",
          model: "Urban",
          price: 2500,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Bicycle", null, {});
  },
};
