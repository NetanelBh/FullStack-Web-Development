import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import DbConnection from "./config/DBConnection.js";
// import initializeDB from './utils/initDb.js';

const app = express();
const port = process.env.PORT || 3001;

DbConnection();
// // Initialize the DB only one time when the server is loaded for the first time
// initializeDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});