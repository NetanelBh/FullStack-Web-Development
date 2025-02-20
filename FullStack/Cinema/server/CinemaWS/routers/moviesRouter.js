import express from 'express';

const router = express.Router();

// Entry point: http://localhost:3000/movies

router.get('/', (req, res) => {});

router.delete('/:id', (req, res) => {});

router.put('/:id', (req, res) => {});

export default router;