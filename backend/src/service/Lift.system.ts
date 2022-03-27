import { ILiftSystem } from './Lift.system.interface';
import { Lift } from "../models/Lift";
import { v4 as uuidv4 } from 'uuid';

export class LiftSystem implements ILiftSystem {

    private lifts: Lift[] = [];
    private static liftSystem: LiftSystem;

    private constructor() { }

    public static getLiftSystemInstance(): LiftSystem {
        if (!LiftSystem.liftSystem) {
            LiftSystem.liftSystem = new LiftSystem();
        }

        return LiftSystem.liftSystem;
    }

    public setUpLiftSystem(count: number): Array<Lift> {
        if(this.lifts && this.lifts.length === 0){
            for (let i = 1; i <= count; i++) {
                const lifId = uuidv4();
                const lift = new Lift(lifId, 0);
                this.lifts.push(lift);
            }
        }
        return this.lifts;
    }

    public getLifts(): Array<Lift> {
        return this.lifts;
    }

    public addLiftToSystem(): Array<Lift> {
        const lifId = uuidv4();
        const lift = new Lift(lifId, 0);
        this.lifts.push(lift);

        return this.lifts;
    }

    public getLiftStatus(id: string): Lift {
        return this.lifts.find((lift) =>
            lift.getLiftId() === id);
    }

    public callLift(id: string, userFloor: number): Lift {
        const lift = this.lifts.find((l) =>
            l.getLiftId() === id);

        if (lift.getCurrentFloor() > userFloor) {
            lift.setLiftStateToDown();
        } else if (lift.getCurrentFloor() < userFloor) {
            lift.setLiftStateToUp();
        } else {
            lift.setLiftStateToIdle();
        }

        return lift;
    }

    moveLift(id: string, destinationFloor: number): Lift {
        let newLift = this.lifts[0];

        this.lifts = this.lifts.map((item) => {
            if (item.getLiftId() === id) {
                item.setCurrentFloor(destinationFloor);
                item.setLiftStateToIdle();
                newLift = item;
            }
            return item;
        })

        return newLift;
    }
    
}