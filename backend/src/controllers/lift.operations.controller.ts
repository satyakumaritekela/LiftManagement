import { LiftSystem } from '../service/Lift.system';
import { Request, Response } from "express";

const LiftSystemInstance = LiftSystem.getLiftSystemInstance();

export const getLiftStatusController = (req: Request, res: Response) => {
    try {
        const liftId = req.params.id;
        res.status(200).send(LiftSystemInstance.getLiftStatus(liftId));
    } catch (e) {
        res.status(500).send({
            message: "Error",
            success: false,
        })
    }
}

export const callLiftController = (req: Request, res: Response) => {
    try {
        res.status(200).send(LiftSystemInstance.callLift(req.body.liftId, req.body.userFloor));
    } catch (e) {
        res.status(500).send({
            "message": "Cannot call lift",
            "success": false,
        })
    }
}

export const moveLiftController = (req: Request, res: Response) => {
    try {
        res.status(200).send(LiftSystemInstance.moveLift(req.body.liftId, req.body.destinationFloor));
    } catch (e) {
        res.status(500).send({
            "message": "Cannot move lift",
            "success": false,
        })
    }
}
