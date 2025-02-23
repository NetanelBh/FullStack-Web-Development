import express from 'express';
import axios from 'axios';

const router = express.Router();

// Entry point: http://localhost:3000/subscriptions

router.get('/movies', async (req, res) => {
    try {
        const url = "http://localhost:3001/movies";
        const resp = await axios.get(url);
        res.send({ status: true, data: movies });
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

export default router;