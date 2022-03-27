"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.liftSystemRouter = void 0;
const express_1 = __importDefault(require("express"));
const setup_elevator_controller_1 = require("../controllers/setup.elevator.controller");
exports.liftSystemRouter = express_1.default.Router();
exports.liftSystemRouter.post("/", setup_elevator_controller_1.setupElevatorSystem);
exports.liftSystemRouter.post("/addLift", setup_elevator_controller_1.addLiftToSystem);
//# sourceMappingURL=lift.system.route.js.map