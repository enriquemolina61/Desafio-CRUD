import express from "express";
import bikeControllers from "../../controllers/bikeControllers";

const router = express.Router();

router.post("/bike", bikeControllers.create);
router.get("/bike", bikeControllers.findAll);
router.get("/bike/:bikeId", bikeControllers.findOne);
router.put("/bike/:bikeId", bikeControllers.update);
router.delete("/bike/:bikeId", bikeControllers.destroy);

export { router };
