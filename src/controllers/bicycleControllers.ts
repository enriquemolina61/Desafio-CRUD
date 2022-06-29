import { Request, Response } from "express";
import { bicycleModel } from "../database/models/bicycleModel";

const { Op } = require("sequelize");

class BicycleController {
  async findAll(req: Request, res: Response) {
    try {
      const bicycles = await bicycleModel.findAll();
      return bicycles.length > 0
        ? res.status(200).json(bicycles)
        : res.status(204).send();
    } catch (error) {
      return res.send({ error });
    }
  }

  async findByColor(req: Request, res: Response) {
    try {
      const { bicycleColor } = req.params;
      const bicycle = await bicycleModel.findAll({
        where: {
          color: bicycleColor,
        },
      });
      return bicycle ? res.status(200).json(bicycle) : res.status(204).send();
    } catch (error) {
      return res.json({ error });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { color, gears, brand, model, price } = req.body;
      const bicycle = await bicycleModel.create({
        color,
        gears,
        brand,
        model,
        price,
      });
      return res.status(201).json(bicycle);
    } catch (error) {
      return res.send({ error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { bicycleId } = req.params;
      await bicycleModel.update(
        { price: req.body.price },
        {
          where: {
            id: bicycleId,
          },
        }
      );
      return res.status(203).json(bicycleModel);
    } catch (error) {
      return res.send({ error });
    }
  }

  async sell(req: Request, res: Response) {
    try {
      const { bicycleId } = req.params;
      await bicycleModel.destroy({
        where: {
          id: bicycleId,
        },
      });
      return res.json({ message: "Bicicleta Vendida!" });
    } catch (error) {
      return res.send(error);
    }
  }

  async findByPrice(req: Request, res: Response) {
    try {
      const { bicyclePrice } = req.params;
      const bicycle = await bicycleModel.findAll({
        where: {
          price: {
            [Op.lte]: bicyclePrice,
          },
        },
      });

      return bicycle ? res.status(200).json(bicycle) : res.status(204).send();
    } catch (error) {
      res.send({ error });
    }
  }
}

export default new BicycleController();
