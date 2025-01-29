import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as authServices from "../srevices/authServices.js";

const router = express.Router();

// Entry point: http://localhost:3000/auth

router.post("/register", async (req, res) => {
    const { username, password, admin } = req.body;
    const encryptedPassword = jwt.sign(password, process.env.HASH_KEY);
    const employee = { username, password: encryptedPassword, admin };

    try {
        const resp = await authServices.register(employee);
        // Check if the user's save succeed(when succeed, it returns the saved employee)
        if (resp.username === employee.username) {
            res.send({ status: true, data: "Registration successful" });
        } else {
            res.send({ status: false, data: "Registration failed" });
        }
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

//localhost:3000/auth/login
http: router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {        
        // Return the match user from DB with the username, if not exist, return undefined
        const employee = await authServices.login(username);
        
        // If the employee exist in DB
        if (employee !== null) {
            // Compare the password entered by user with the hashed password in DB.
            if (await bcrypt.compare(String(password), employee.password)) {
                // Create token to user
                const token = jwt.sign(username, process.env.HASH_KEY);
                // Return the employee's full name to show in every page he navigates in the cinema
                req.session.user = { username, token };
                const returnedData = { admin: employee.admin, token, fullName: employee.fullName };
                res.send({ status: true, data: returnedData });
            } else res.send({ status: false, data: "Invalid password" });
        } else {
            res.send({ status: false, data: "Invalid username" });
        }
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.send({ status: true, data: "Logged out successfully" });
});

export default router;
