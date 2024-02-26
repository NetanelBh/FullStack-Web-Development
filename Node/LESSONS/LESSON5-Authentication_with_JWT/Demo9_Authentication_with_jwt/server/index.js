import 'dotenv/config';
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import DbConnection from './config/dbConnection.js';

import authRouter from "./controller/auth.js";
import productsRouter from "./controller/products.js";

// Check first if the port defined in the .env file, if not, assign 3001
const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

DbConnection();

app.use("/auth", authRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
