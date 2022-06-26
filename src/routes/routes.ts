import express from "express";
import bicycleControllers from "../controllers/bicycleControllers";

const router = express.Router();

router.post("/bicycle", bicycleControllers.create);
router.get("/bicycle", bicycleControllers.findAll);
router.get("/bicycle/:bicycleColor", bicycleControllers.findColor);
router.get("/bicycle/price/:bicyclePrice", bicycleControllers.findPrice);
router.put("/bicycle/:bicycleId", bicycleControllers.update);
router.delete("/bicycle/venda/:bicycleId", bicycleControllers.sell);

export { router };
