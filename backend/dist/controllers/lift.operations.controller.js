"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveLiftController = exports.callLiftController = exports.getLiftStatusController = void 0;
const Lift_system_1 = require("../service/Lift.system");
const LiftSystemInstance = Lift_system_1.LiftSystem.getLiftSystemInstance();
const getLiftStatusController = (req, res) => {
    try {
        const liftId = req.params.id;
        res.status(200).send(LiftSystemInstance.getLiftStatus(liftId));
    }
    catch (e) {
        res.status(500).send({
            message: "Error",
            success: false,
        });
    }
};
exports.getLiftStatusController = getLiftStatusController;
const callLiftController = (req, res) => {
    try {
        res.status(200).send(LiftSystemInstance.callLift(req.body.liftId, req.body.userFloor));
    }
    catch (e) {
        res.status(500).send({
            "message": "Cannot call lift",
            "success": false,
        });
    }
};
exports.callLiftController = callLiftController;
const moveLiftController = (req, res) => {
    try {
        res.status(200).send(LiftSystemInstance.moveLift(req.body.liftId, req.body.destinationFloor));
    }
    catch (e) {
        res.status(500).send({
            "message": "Cannot move lift",
            "success": false,
        });
    }
};
exports.moveLiftController = moveLiftController;
//# sourceMappingURL=lift.operations.controller.js.map