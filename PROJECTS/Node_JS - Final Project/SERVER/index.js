import express from 'express';
import cors from 'cors';

import DbConnection from './configs/dbConnection.js';

import userRouter from './routers/usersRouter.js';
import shiftsRouter from './routers/shiftsRouter.js';
import depsRouter from './routers/departmentsRouter.js';
import employeesRouter from './routers/employeesRouter.js';

const app = express();
const PORT = 3001;

DbConnection();

app.use(cors());

app.use('/users', userRouter);
app.use('/shifts', shiftsRouter);
app.use('/departments', depsRouter);
app.use('/employees', employeesRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});