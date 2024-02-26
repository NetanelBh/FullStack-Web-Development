import express from 'express';

import * as productsService from '../service/productsService.js';

const router = express.Router();

// Entry point: http://localhost:3001/products

router.get('/', (req, res) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.status(401).send("No token provided");
  }

  const accessGranted = productsService.verifyToken(token);
  
  if (!accessGranted.success) {
    res.status(500).send(accessGranted.content);
  } 
  res.send(accessGranted.content);
  
});

export default router;