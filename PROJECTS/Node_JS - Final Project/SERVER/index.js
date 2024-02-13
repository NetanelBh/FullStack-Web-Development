import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import session from 'express-session';

import DbConnection from './configs/dbConnection.js';

import endOfDay from './utils/calculateEndOfDayTime.js';
import userRouter from './routers/usersRouter.js';
import authRouter from './routers/authRouter.js';
import shiftsRouter from './routers/shiftsRouter.js';
import depsRouter from './routers/departmentsRouter.js';
import employeesRouter from './routers/employeesRouter.js';
import {checkLimitActions, addActionToUser} from './services/usersService.js';

const app = express();
const PORT = process.env.PORT || 3001;

DbConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Create sessions for the client to track his actions and authenticate
app.use(session({
  secret: process.env.KEY,
  resave: false,
  saveUninitialized: true, 
  cookie: {maxAge: endOfDay()}
}));

app.use('/auth', authRouter);

// Before route any path, check the input token from the client with meddleware
app.use(async (req, res, next) => {
  console.log(req.session.user);
  // First check if the user logged in to system
  if (req.session && req.session.user) {
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).json("No token provided by the user");

    try {
      jwt.verify(token, process.env.KEY);
      // Each request, will check if there is free actions to do per this user

      const isAccess = await checkLimitActions(req.session.user)
      if (!isAccess) {
        req.session.data = {success: false, data: "exceeded your daily limit"};
        return res.redirect('/auth/logout'); 
      }

      // Add actions in DB to this user
      const resp = await addActionToUser(req.session.user);
      if(!resp.success) {
        return res.send(resp);
      }

      next();
    } catch (error) {
      // If token verification failed, return error to the user
      return res.status(401).json("Invalid token");
    }
  } else {
    return res.status(401).json("Please log in first");
  }
});

app.use('/users', userRouter);
app.use('/shifts', shiftsRouter);
app.use('/departments', depsRouter);
app.use('/employees', employeesRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});