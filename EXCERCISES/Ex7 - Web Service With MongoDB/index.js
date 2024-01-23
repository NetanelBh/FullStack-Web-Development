import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import DbConnection from './server/db_configs/db.js';
import moviesRouter from './server/controler/moviesControler.js';

const port = 3001;
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

DbConnection();

app.use('/movies', moviesRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});