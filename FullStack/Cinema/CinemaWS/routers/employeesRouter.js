import express from "express";

import * as employeesServices from "../srevices/employeesServices.js";
import * as permissionsServices from "../srevices/permmisionsServices.js";

const router = express.Router();

// Entry point: http://localhost:3000/employees

router.get("/", async (req, res) => {
  try {
    const employees = await employeesServices.getEmployeesFromDb();
    res.send({ status: "succeed", data: employees });
  } catch (error) {
    res.send({ status: "failed", data: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const resp = await employeesServices.addEmployeeToDb();
    res.send({ status: "succeed", data: resp });
  } catch (error) {
    res.send({ status: "failed", data: error.message });
  }
});

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedId = await employeesServices.deleteEmployeeFromDb(id);
    // After delete the employee from DB, will delete the employee also from the file with its permissions.
    const resp = permissionsServices.deleteEmployee(id);
    res.send({ status: "succeed", data: deletedId });
  } catch (error) {
    res.send({ status: "failed", data: error.message });
  }
});

export default router;