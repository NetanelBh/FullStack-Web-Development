import express from 'express';

import * as moviesServices from '../services/moviesServices.js';

const router = express.Router();

router.get('/movies', async (req, res) => {
    try {
        const resp = await moviesServices.getMoviesFromDb();
        console.log(resp)
        // res.send({ status: true, data: movies });
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

export default router;