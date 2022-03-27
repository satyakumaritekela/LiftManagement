import express from 'express';
import cors from "cors";

import { liftOperationsRouter } from './routes/lift.operations.route';
import { liftSystemRouter } from './routes/lift.system.route';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(cors());
app.use(express.json());

app.use("/api/system", liftSystemRouter);
app.use("/api/operation", liftOperationsRouter);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});