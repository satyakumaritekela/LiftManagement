import { Lift } from "../models/Lift";

export interface ILiftSystem{
    setUpLiftSystem(count: number): Array<Lift>
    getLifts(): Array<Lift>
    addLiftToSystem(): Array<Lift>
    getLiftStatus(id: string)
    callLift(id: string, userFloor: number): Lift
    moveLift(id: string, destinationFloor: number): Lift
}