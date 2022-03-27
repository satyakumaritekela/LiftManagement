"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lift_system_1 = require("../service/Lift.system");
const chai_1 = require("chai");
const LiftSystemInstance = Lift_system_1.LiftSystem.getLiftSystemInstance();
describe("LiftSystem", () => {
    describe("setUpLiftSystem", () => {
        it("should return an array of lifts", () => {
            const lifts = LiftSystemInstance.setUpLiftSystem(2);
            (0, chai_1.expect)(lifts).to.be.an("array");
            (0, chai_1.expect)(lifts.length).to.equal(2);
        });
    });
    describe("create", function () {
        it("correctly create lifts", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const lifts = LiftSystemInstance.setUpLiftSystem(2);
                (0, chai_1.expect)(lifts.length).to.equal(2);
                (0, chai_1.expect)(lifts.length).to.equal(LiftSystemInstance.getLifts().length);
                (0, chai_1.expect)(lifts[0].getLiftId()).to.equal(LiftSystemInstance.getLifts()[0].getLiftId());
                (0, chai_1.expect)(lifts.length).to.greaterThan(0);
            });
        });
    });
    describe("addLiftToSystem", () => {
        it("should return an array of lifts", () => {
            const lifts = LiftSystemInstance.addLiftToSystem();
            (0, chai_1.expect)(lifts).to.be.an("array");
            (0, chai_1.expect)(lifts.length).to.equal(3);
        });
    });
    describe("getLifts", () => {
        it("should return an array of lifts", () => {
            const lifts = LiftSystemInstance.getLifts();
            (0, chai_1.expect)(lifts).to.be.an("array");
            (0, chai_1.expect)(lifts.length).to.equal(3);
        });
    });
    describe("getLiftStatus", () => {
        it("should return a lift null", () => {
            const lift = LiftSystemInstance.getLiftStatus("1");
            (0, chai_1.expect)(lift).to.be.undefined;
        });
    });
    describe("moveLift", () => {
        it("should return a lift", () => {
            const lift = LiftSystemInstance.moveLift("88971da4-0d51-4273-823b-e99d99128769", 8);
            (0, chai_1.expect)(lift).to.be.an("object");
            (0, chai_1.expect)(lift.getLiftId()).not.to.equal("88971da4-0d51-4273-823b-e99d99128769");
        });
    });
});
//# sourceMappingURL=lift.system.spec.js.map