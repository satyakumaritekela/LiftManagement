"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiftSystem = void 0;
const Lift_1 = require("../models/Lift");
const uuid_1 = require("uuid");
class LiftSystem {
    constructor() {
        this.lifts = [];
    }
    static getLiftSystemInstance() {
        if (!LiftSystem.liftSystem) {
            LiftSystem.liftSystem = new LiftSystem();
        }
        return LiftSystem.liftSystem;
    }
    setUpLiftSystem(count) {
        if (this.lifts && this.lifts.length === 0) {
            for (let i = 1; i <= count; i++) {
                const lifId = (0, uuid_1.v4)();
                const lift = new Lift_1.Lift(lifId, 0);
                this.lifts.push(lift);
            }
        }
        return this.lifts;
    }
    getLifts() {
        return this.lifts;
    }
    addLiftToSystem() {
        const lifId = (0, uuid_1.v4)();
        const lift = new Lift_1.Lift(lifId, 0);
        this.lifts.push(lift);
        return this.lifts;
    }
    getLiftStatus(id) {
        return this.lifts.find((lift) => lift.getLiftId() === id);
    }
    callLift(id, userFloor) {
        const lift = this.lifts.find((l) => l.getLiftId() === id);
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
        let newLift = this.lifts[0];
        this.lifts = this.lifts.map((item) => {
            if (item.getLiftId() === id) {
                item.setCurrentFloor(destinationFloor);
                item.setLiftStateToIdle();
                newLift = item;
            }
            return item;
        });
        return newLift;
    }
}
exports.LiftSystem = LiftSystem;
//# sourceMappingURL=Lift.system.js.map