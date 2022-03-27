import { LiftSystem } from "../service/Lift.system";

import {expect} from "chai";

const LiftSystemInstance = LiftSystem.getLiftSystemInstance();

describe("LiftSystem", () => {

	describe("setUpLiftSystem", () => {
		it("should return an array of lifts", () => {
			const lifts = LiftSystemInstance.setUpLiftSystem(2);
			console.log(lifts);
			expect(lifts).to.be.an("array");
			expect(lifts.length).to.equal(2);
		});
	});

	describe("create", function() {
		it("correctly create lifts", async function() {
			const lifts = LiftSystemInstance.setUpLiftSystem(2);
			expect(lifts.length).to.equal(2);
			expect(lifts.length).to.equal(LiftSystemInstance.getLifts().length);
			expect(lifts[0].getLiftId()).to.equal(LiftSystemInstance.getLifts()[0].getLiftId());
			expect(lifts.length).to.greaterThan(0);
		});
	});

	describe("addLiftToSystem", () => {
		it("should return an array of lifts", () => {
			const lifts = LiftSystemInstance.addLiftToSystem();
			expect(lifts).to.be.an("array");
			expect(lifts.length).to.equal(3);
		});
	});

	describe("getLifts", () => {
		it("should return an array of lifts", () => {
			const lifts = LiftSystemInstance.getLifts();
			expect(lifts).to.be.an("array");
			expect(lifts.length).to.equal(3);
		});
	});

	describe("getLiftStatus", () => {
		it("should return a lift as null", () => {
			const lift = LiftSystemInstance.getLiftStatus("1");
			expect(lift).to.be.undefined;
		});
	});

	describe("moveLift", () => {
		it("should return a lift", () => {
			const lift = LiftSystemInstance.moveLift("88971da4-0d51-4273-823b-e99d99128769", 8);
			expect(lift).to.be.an("object");
			expect(lift.getLiftId()).not.to.equal("88971da4-0d51-4273-823b-e99d99128769");
		});
	});

});
