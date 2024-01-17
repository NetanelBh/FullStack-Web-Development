import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import DBConnection from './server/db_configs/db.js';
import personsRouter from './server/controler/personsControler.js';

const port = 3000;
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

DBConnection();

app.use('/persons', personsRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});