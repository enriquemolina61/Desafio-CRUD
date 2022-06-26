import { Request, Response } from "express";
import { BikeModel } from "../database/models/BikeModel";

class BikeController {
  async findAll(req: Request, res: Response) {
    const bikes = await BikeModel.findAll();
    return bikes.length > 0
      ? res.status(200).json(bikes)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {}
  async create(req: Request, res: Response) {
    const { cor, marchas, marca, modelo, preco } = req.body;
    const bike = await BikeModel.create({
      cor,
      marchas,
      marca,
      modelo,
      preco,
    });
    return res.status(201).json(bike);
  }

  async update(req: Request, res: Response) {}
  async destroy(req: Request, res: Response) {}
}

export default new BikeController();
