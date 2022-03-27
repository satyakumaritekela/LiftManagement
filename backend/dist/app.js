"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const lift_operations_route_1 = require("./routes/lift.operations.route");
const lift_system_route_1 = require("./routes/lift.system.route");
const app = (0, express_1.default)();
const port = 8000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/system", lift_system_route_1.liftSystemRouter);
app.use("/api/operation", lift_operations_route_1.liftOperationsRouter);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map