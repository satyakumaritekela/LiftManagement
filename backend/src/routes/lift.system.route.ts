import express from "express";
import { addLiftToSystem, setupElevatorSystem } from "../controllers/setup.elevator.controller";

export const liftSystemRouter = express.Router();

liftSystemRouter.post("/", setupElevatorSystem);
liftSystemRouter.post("/addLift", addLiftToSystem);