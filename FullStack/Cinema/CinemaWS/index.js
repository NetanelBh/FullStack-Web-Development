import "dotenv/config";
import cors from "cors";
import express from 'express';
import bodyParser from "body-parser";
import session from "express-session";

import DbConnection from "./config/DBConnection.js";

import authRouter from './routers/authRouter.js';
import employeesRouter from './routers/employeesRouter.js';

const app = express();
const port = process.env.PORT;

DbConnection();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.HASH_KEY,
    resave: false,
    saveUninitialized: true,
}))

app.use('/auth', authRouter);
app.use('/employees', employeesRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});