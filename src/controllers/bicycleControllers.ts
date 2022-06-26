import { Request, Response } from "express";
import { bicycleModel } from "../database/models/bicycleModel";

class BicycleController {
  async findAll(req: Request, res: Response) {
    const bicycles = await bicycleModel.findAll();
    return bicycles.length > 0
      ? res.status(200).json(bicycles)
      : res.status(204).send();
  }

  async findColor(req: Request, res: Response) {
    const { bicycleColor } = req.params;
    const bicycle = await bicycleModel.findAll({
      where: {
        color: bicycleColor,
      },
    });
    return bicycle ? res.status(200).json(bicycle) : res.status(204).send;
  }

  async create(req: Request, res: Response) {
    const { color, gears, brand, modelo, price } = req.body;
    const bicycle = await bicycleModel.create({
      color,
      gears,
      brand,
      modelo,
      price,
    });
    return res.status(201).json(bicycle);
  }

  async update(req: Request, res: Response) {}

  async destroy(req: Request, res: Response) {}
}

export default new BicycleController();
