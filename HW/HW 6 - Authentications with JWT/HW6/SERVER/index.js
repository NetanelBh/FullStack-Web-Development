import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';

import DbConnection from './Config/dbConnection.js';

import authRouter from './Controllers/authRouter.js';
import productRouter from './Controllers/productRouter.js';

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

// Connect to DB
DbConnection();

app.use('/auth', authRouter);

// Middleware for token checking before accessing the products
app.use((req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).json("No token provided")
  };

  try {
    const decoded = jwt.verify(token, process.env.KEY);
    next();
  } catch (error) {
    return res.status(401).json("Invalid token");
  }
});

app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});