import express from 'express';
import cors from 'cors';

import mongoConnect from './config/dbConnection.js';
import gradesRouter from './controller/gradesRouter.js';
import studentsRouter from './controller/studentsRouter.js';

const port = 3001;
const app = express();

// Allow access to server
app.use(cors());

// Connect to MongoDB
mongoConnect();

// Base routes for each url(within the router files, all routes are existing)
app.use('/grade', gradesRouter);
app.use('/student', studentsRouter);

// For not existing routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});