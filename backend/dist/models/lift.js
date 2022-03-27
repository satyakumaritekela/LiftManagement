"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lift = void 0;
const Direction_1 = require("./enums/Direction");
class Lift {
    constructor(id, currentFloor) {
        this.id = id;
        this.currentFloor = currentFloor;
        this.direction = Direction_1.Direction.IDLE;
    }
    getLiftId() {
        return this.id;
    }
    getCurrentFloor() {
        return this.currentFloor;
    }
    isLiftBusy() {
        return this.direction;
    }
    setLiftID(id) {
        this.id = id;
    }
    setCurrentFloor(currentFloor) {
        this.currentFloor = currentFloor;
    }
    setLiftStateToUp() {
        this.direction = Direction_1.Direction.UP;
    }
    setLiftStateToDown() {
        this.direction = Direction_1.Direction.DOWN;
    }
    setLiftStateToIdle() {
        this.direction = Direction_1.Direction.IDLE;
    }
}
exports.Lift = Lift;
//# sourceMappingURL=Lift.js.map