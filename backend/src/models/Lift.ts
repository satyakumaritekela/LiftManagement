import { Direction } from './enums/Direction';

export class Lift {
    id: string;
    currentFloor: number;
    direction: Direction;

    constructor(id: string, currentFloor: number) {
        this.id = id;
        this.currentFloor = currentFloor;
        this.direction = Direction.IDLE;
    }

    getLiftId(): string {
        return this.id;
    }

    getCurrentFloor(): number {
        return this.currentFloor;
    }

    isLiftBusy(): Direction {
        return this.direction;
    }

    setLiftID(id: string): void {
        this.id = id;
    }

    setCurrentFloor(currentFloor: number): void {
        this.currentFloor = currentFloor;
    }

    setLiftStateToUp(): void {
        this.direction = Direction.UP;
    }

    setLiftStateToDown(): void {
        this.direction = Direction.DOWN;
    }

    setLiftStateToIdle(): void {
        this.direction = Direction.IDLE;
    }

}