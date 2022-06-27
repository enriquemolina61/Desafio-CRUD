"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bicycle", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gears: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      updated_at: Sequelize.DATE,
      created_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bicycle");
  },
};
