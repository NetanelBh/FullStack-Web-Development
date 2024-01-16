import bodyParser from 'body-parser';
import cors from 'cors';
import personsRouter from './server/controllers/personsControler.js';

import express from "express";
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/persons', personsRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});