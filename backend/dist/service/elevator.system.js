"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevatorSystem = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
const lift_1 = require("../models/lift");
const uuid_1 = require("uuid");
class ElevatorSystem {
    constructor() {
        this.elevators = [];
    }
    static getElevatorSyetemInstance() {
        if (!ElevatorSystem.elevatorSystem) {
            ElevatorSystem.elevatorSystem = new ElevatorSystem();
        }
        return ElevatorSystem.elevatorSystem;
    }
    setUpElevatorSystem(count) {
        for (let i = 1; i <= count; i++) {
            const lifId = (0, uuid_1.v4)();
            const lift = new lift_1.Lift(lifId, 0);
            this.elevators.push(lift);
        }
        return this.elevators;
    }
    getElevators() {
        return this.elevators;
    }
    addLiftToSystem() {
        const lifId = (0, uuid_1.v4)();
        const lift = new lift_1.Lift(lifId, 0);
        this.elevators.push(lift);
        return this.elevators;
    }
    getLiftStatus(id) {
        const lift = this.elevators.find((lift) => lift.getLiftId() === id);
        return lift;
    }
    callLift(id, userFloor) {
        const lift = this.elevators.find((lift) => lift.getLiftId() === id);
        if (lift.getCurrentFloor() > userFloor) {
            lift.setLiftStateToDown();
        }
        else if (lift.getCurrentFloor() < userFloor) {
            lift.setLiftStateToUp();
        }
        else {
            lift.setLiftStateToIdle();
        }
        return lift;
    }
    moveLift(id, destinationFloor) {
        const lift = this.elevators.find((lift) => lift.getLiftId() === id);
        lift.setCurrentFloor(destinationFloor);
        lift.setLiftStateToIdle();
        this.elevators = this.elevators.map((item) => {
            if (item.getLiftId() === id) {
                item.setCurrentFloor(destinationFloor);
                item.setLiftStateToIdle();
            }
            return item;
        });
        return lift;
    }
}
exports.ElevatorSystem = ElevatorSystem;
//# sourceMappingURL=elevator.system.js.map