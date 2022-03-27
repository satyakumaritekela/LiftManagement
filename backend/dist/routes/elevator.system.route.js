"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.elevatorRouter = void 0;
const express_1 = __importDefault(require("express"));
const setup_elevator_controller_1 = require("../controllers/setup.elevator.controller");
exports.elevatorRouter = express_1.default.Router();
exports.elevatorRouter.post("/", setup_elevator_controller_1.setupElevatorSystem);
exports.elevatorRouter.post("/addLift", setup_elevator_controller_1.addLiftToSystem);
//# sourceMappingURL=elevator.system.route.js.map