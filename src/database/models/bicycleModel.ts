import { DataTypes } from "sequelize";
import { db } from "../db";

export const bicycleModel = db.define(
  "bicycles",
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
    created_at: {
      type: DataTypes.DATE,
      field: "created_at",
    },

    updated_at: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  }
);
