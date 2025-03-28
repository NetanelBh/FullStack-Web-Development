import express from 'express';

import * as membersServices from '../services/membersServices.js';

const router = express.Router();

// Entry point: http://localhost:3001/members

router.get('/get', async (req, res) => {    
    try {
        const resp = await membersServices.getMembersFromDb();         
        if (resp) {
            res.send({status: true, data: resp});
        } else {
            res.send({status: false, data: 'No members found'});
        }
    } catch (error) {
        res.send({status: false, data: error.message});
    }
});

router.put('/update', async (req, res) => {
    const member = req.body; 
    
    try {
        const resp = await membersServices.updateMember(member);
        if (resp) {
            res.send({status: true, data: resp});
        } else {
            res.send({status: false, data: 'No member found'});
        }
    } catch (error) {
        res.send({status: false, data: error.message});
    }
});

export default router;