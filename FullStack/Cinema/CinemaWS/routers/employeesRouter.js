import express from 'express';

import * as employeesServices from '../srevices/employeesServices.js';

const router = express.Router();

router.post('/employees', async (req, res) => { 
    try {
        const resp = await employeesServices.addEmployee();
    } catch (error) {
        
    }
});

export default router;

