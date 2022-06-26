"use strict";
import { DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bikes", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gears: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bikes");
  },
};
