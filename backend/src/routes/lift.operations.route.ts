import { moveLiftController } from './../controllers/lift.operations.controller';
import express from "express";
import { callLiftController, getLiftStatusController } from "../controllers/lift.operations.controller";

export const liftOperationsRouter = express.Router();

liftOperationsRouter.get("/:id", getLiftStatusController);
liftOperationsRouter.post("/callLift", callLiftController);
liftOperationsRouter.post("/moveLift", moveLiftController);