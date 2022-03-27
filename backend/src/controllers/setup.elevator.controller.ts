import { LiftSystem } from '../service/Lift.system';
import { Request, Response } from "express";

const LiftSystemInstance = LiftSystem.getLiftSystemInstance();

export const setupElevatorSystem = (req: Request, res: Response) => {
    try {
        res.status(200).send(LiftSystemInstance.setUpLiftSystem(req.body.count));
    } catch (e) {
        res.status(500).send({
            "message": "Setup Error",
            "success": false,
        })
    }
}

export const addLiftToSystem = (req: Request, res: Response) => {
    try {
        res.status(200).send(LiftSystemInstance.addLiftToSystem());
    } catch (e) {
        res.status(500).send({
            "message": "Cannot add lift",
            "success": false,
        })
    }
}


