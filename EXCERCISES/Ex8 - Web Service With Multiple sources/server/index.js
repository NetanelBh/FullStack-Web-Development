import cors from 'cors';
import express from 'express';

import usersRouter from './controller/usersRouter.js';
import DbConnection from './dbConfigs/dbConnection.js';

const port = 3001;
const app = express();

// Give access to server
app.use(cors());

// Connect to MongoDB
DbConnection();

// If entered address http://localhost:3001/users
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});