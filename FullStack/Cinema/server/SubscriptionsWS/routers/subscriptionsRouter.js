import express from "express";
import * as subscriptionsServices from '../services/subscriptionsServices.js';

const router = express.Router();

// Entry point: http://localhost:3001/subscriptions

router.get("/get", async (req, res) => {
    try {
        const resp = await subscriptionsServices.getSubscriptions();        
        if (resp) {
            res.send({status: true, data: resp});
        } else {
            res.send({status: false, data: "No subscriptions found."});
        }
    } catch (error) {
        res.send({status: false, data: error.message});
    }
});

export default router;