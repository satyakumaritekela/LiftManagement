"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLiftToSystem = exports.setupElevatorSystem = void 0;
const Lift_system_1 = require("../service/Lift.system");
const LiftSystemInstance = Lift_system_1.LiftSystem.getLiftSystemInstance();
const setupElevatorSystem = (req, res) => {
    try {
        res.status(200).send(LiftSystemInstance.setUpLiftSystem(req.body.count));
    }
    catch (e) {
        res.status(500).send({
            "message": "Setup Error",
            "success": false,
        });
    }
};
exports.setupElevatorSystem = setupElevatorSystem;
const addLiftToSystem = (req, res) => {
    try {
        res.status(200).send(LiftSystemInstance.addLiftToSystem());
    }
    catch (e) {
        res.status(500).send({
            "message": "Cannot add lift",
            "success": false,
        });
    }
};
exports.addLiftToSystem = addLiftToSystem;
//# sourceMappingURL=setup.elevator.controller.js.map