import { DataTypes } from "sequelize";
import { db } from "../db";

export const bicycleModel = db.define(
  "Bicycle",
  {
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
  },
  {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);
