import cors from "cors";
import express from 'express';
import bodyParser from 'body-parser';

import carsRouter from "./server/router/carsRouter.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// Each request, convert to object from json
app.use(express.json());

app.use('/cars', carsRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});