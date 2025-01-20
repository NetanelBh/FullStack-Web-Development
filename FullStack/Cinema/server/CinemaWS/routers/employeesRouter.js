import express from "express";

import * as employeesServices from "../srevices/employeesServices.js";
import * as permissionsServices from "../srevices/permissionsServices.js";

const router = express.Router();

// Entry point: http://localhost:3000/employees

router.get("/", async (req, res) => {
    try {
        const employees = await employeesServices.getEmployeesFromDb();
        res.send({ status: true, data: employees });
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

// Add employee by the admin via the employees management
router.post("/add", async (req, res) => {
    const userData = req.body;
    try {
        const dbEmployee = {
            username: userData.username,
            password: "",
            admin: false,
        };
        const resp = await employeesServices.addEmployeeToDb(dbEmployee);

        // // Add the new employee also to the employee's json file.
        // const emloyeeToJsonFile = {
        //     id: resp.id,
        //     firstName: userData.first_name,
        //     lastName: userData.last_name,
        //     CreatedDate: new Date().toLocaleDateString(),
        //     sessionTimeOut: userData.session_timeout,
        // };
        // await employeesServices.addEmployeeToFile(emloyeeToJsonFile);

        // // Add the new employee also to the employee's permissions json file.
        // const permissions = { id: resp.id, permissions: userData.permissions };
        // await permissionsServices.addEmployee(permissions);
        res.send({ status: true, data: resp });
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

// During the register precess, if the employee exists in DB, will update his password.
router.patch("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const employee = await employeesServices.getEmployeeFromDbByUsername(username);
        // Let the employee set password only if it's the first time the employee register to system.
        if (employee && employee.password !== "") {
            res.send({ status: false, data: "User already exists in system" });
            return;
        }

        const resp = await employeesServices.updateEmployeePassword(username, password);
        if (resp) {
            res.send({ status: true, data: resp });
        } else {
            res.send({ status: false, data: "User doesn't exist in system" });
        }
    } catch (error) {
        res.send({ status: false, data: error.message });
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
        res.send({ status: true, data: deletedEmployee });
    } catch (error) {
        res.send({ status: false, data: error.message });
    }
});

export default router;
