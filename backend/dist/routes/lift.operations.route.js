"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.liftOperationsRouter = void 0;
const lift_operations_controller_1 = require("./../controllers/lift.operations.controller");
const express_1 = __importDefault(require("express"));
const lift_operations_controller_2 = require("../controllers/lift.operations.controller");
exports.liftOperationsRouter = express_1.default.Router();
exports.liftOperationsRouter.get("/:id", lift_operations_controller_2.getLiftStatusController);
exports.liftOperationsRouter.post("/callLift", lift_operations_controller_2.callLiftController);
exports.liftOperationsRouter.post("/moveLift", lift_operations_controller_1.moveLiftController);
//# sourceMappingURL=lift.operations.route.js.map