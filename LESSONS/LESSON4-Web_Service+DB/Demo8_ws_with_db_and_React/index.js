import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import DBConnection from './server/db_configs/db.js';

import ordersRouter from './server/controler/ordersControler.js';
import personsRouter from './server/controler/personsControler.js';

const port = 3001;
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connection to DB
DBConnection();

// Route it to personts controller
app.use('/persons', personsRouter);
// Route it to orders controller
app.use('/orders', ordersRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});