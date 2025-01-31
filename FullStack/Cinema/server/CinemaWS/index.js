import "dotenv/config";
import cors from "cors";
import express from 'express';
import bodyParser from "body-parser";
import session from "express-session";

import DbConnection from "./config/DBConnection.js";
// import initialize from './utils/init.js';

import authRouter from './routers/authRouter.js';
import employeesRouter from './routers/employeesRouter.js';
import permissionsRouter from './routers/permissionsRouter.js';

const app = express();
const port = process.env.PORT;

DbConnection();

// // Initialize the employees DB only one time when the server is loaded for the first time
// initialize();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.HASH_KEY,
    resave: false,
    saveUninitialized: true,
}))

app.use('/auth', authRouter);

// Middleware Check here if the the user is authenticated after he sent the token he got and if the session not expired
app.use((req, res, next) => {
    next();
});

app.use('/employees', employeesRouter);
app.use('/permissions', permissionsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});