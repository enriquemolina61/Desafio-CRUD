"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Bicycle",
      [
        {
          color: "Green",
          gears: 8,
          brand: "Caloi",
          model: "Tracker",
          price: 2500,
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          color: "Blue",
          gears: 10,
          brand: "Sundown",
          model: "Speed",
          price: 5000,
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          color: "Red",
          gears: 16,
          brand: "GTS",
          model: "Mountian-Bike",
          price: 22000,
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          color: "Green",
          gears: 6,
          brand: "Caloi",
          model: "Speed",
          price: 1500,
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          color: "Yellow",
          gears: 8,
          brand: "Monark",
          model: "Urban",
          price: 2500,
          updated_at: new Date(),
          created_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Bicycle", null, {});
  },
};
