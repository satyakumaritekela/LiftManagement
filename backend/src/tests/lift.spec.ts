import {expect} from "chai";
import { Lift } from "../models/Lift";

describe("Lift", () => {

    const lift = new Lift('1', 1);

    describe("getLift", function() {
        it("should retrieve a lift with specific id", () => {
            expect(lift.id).to.equal("1");
            lift.setCurrentFloor(2);
            expect(lift.getCurrentFloor()).to.equal(2);
            lift.setLiftID("2");
            expect(lift.getLiftId()).to.equal("2");
        });
    });

});
