import express from "express";

import * as employeesServices from "../srevices/employeesServices.js";
import * as permissionsServices from "../srevices/permissionsServices.js";

const router = express.Router();

// Entry point: http://localhost:3000/employees

router.get("/", async (req, res) => {
    try {
        const employees = await employeesServices.getEmployeesFromDb();
        res.send({ status: "success", data: employees });
    } catch (error) {
        res.send({ status: "failed", data: error.message });
    }
});

router.post("/", async (req, res) => {
    const userData = req.body;
    try {
        const dbEmployee = {
            username: userData.username,
            password: userData.password,
            admin: false,
        };
        const resp = await employeesServices.addEmployeeToDb(dbEmployee);

        // Add the new employee also to the employee's json file.
        const emloyeeToJsonFile = {
            id: resp.id,
            firstName: userData.first_name,
            lastName: userData.last_name,
            CreatedDate: new Date().toLocaleDateString(),
            sessionTimeOut: userData.session_timeout,
        };
        await employeesServices.addEmployeeToFile(emloyeeToJsonFile);

        // Add the new employee also to the employee's permissions json file.
        const permissions = { id: resp.id, permissions: userData.permissions };
        await permissionsServices.addEmployee(permissions);
        res.send({ status: "success", data: resp });
    } catch (error) {
        res.send({ status: "failed", data: error.message });
    }
});

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        // Delete employee from DB.
        const deletedEmployee = await employeesServices.deleteEmployeeFromDb(id);
        // After delete the employee from DB, will delete the employee also from the file.
        await employeesServices.deleteEmployeeFromFile(id);
        // After delete the employee from DB, will delete the employee also from the file with its permissions.
        await permissionsServices.deleteEmployee(id);
        res.send({ status: "success", data: deletedEmployee });
    } catch (error) {
        res.send({ status: "failed", data: error.message });
    }
});

export default router;
