import { Request, Response } from "express";
import { bicycleModel } from "../database/models/bicycleModel";

const { Op } = require("sequelize");

class BicycleController {
  async findAll(req: Request, res: Response) {
    const bicycles = await bicycleModel.findAll();
    return bicycles.length > 0
      ? res.status(200).json(bicycles)
      : res.status(204).send();
  }

  async findByColor(req: Request, res: Response) {
    const { bicycleColor } = req.params;
    const bicycle = await bicycleModel.findAll({
      where: {
        color: bicycleColor,
      },
    });
    return bicycle ? res.status(200).json(bicycle) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { color, gears, brand, model, price } = req.body;
    const bicycle = await bicycleModel.create({
      color,
      gears,
      brand,
      model,
      price,
    });
    return res.status(201).json(bicycle);
  }

  async update(req: Request, res: Response) {
    const { bicycleId } = req.params;
    await bicycleModel.update(
      { price: req.body.price },
      {
        where: {
          id: bicycleId,
        },
      }
    );
    return res.status(204).send;
  }

  async sell(req: Request, res: Response) {
    const { bicycleId } = req.params;
    await bicycleModel.destroy({
      where: {
        id: bicycleId,
      },
    });
  }

  async findByPrice(req: Request, res: Response) {
    const { bicyclePrice } = req.params;
    const bicycle = await bicycleModel.findAll({
      where: {
        price: {
          [Op.lte]: bicyclePrice,
        },
      },
    });

    return bicycle ? res.status(200).json(bicycle) : res.status(204).send();
  }
}

export default new BicycleController();
