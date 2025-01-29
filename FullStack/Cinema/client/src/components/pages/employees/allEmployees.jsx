import styles from "./allEmployees.module.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { employeesActions } from "../../store/slices/employeesSlice";

import PacmanLoading from "../../UI/loading/pacmanLoading";
import AllEmployeesList from "./allEmployeesList";

const DB_EMPLOYEES_URL = "http://localhost:3000/employees/db";
const PERMISSIONS_FILE_URL = "http://localhost:3000/permissions";
const EMP_DATA_FILE_URL = "http://localhost:3000/employees/file";

const AllEmployees = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const allEmployees = useSelector((state) => state.employees.employees);    

    const createEmployeesList = useCallback((employees, permissions, employeeData) => {
        const employeesList = employees.data.map((emp) => {
            const empObj = {
                username: emp.username,
                id: emp._id,
            };

            // Get the permissions of the employee from the permissions file
            permissions.data.permissions.forEach((empPerm) => {
                if (empPerm.id === emp._id) {
                    empObj["permissions"] = [...empPerm.permissions];
                }
            });

            // Get the employee data from the employees jsom file
            employeeData.data.employees.forEach((empData) => {
                if (empData.id === emp._id) {
                    empObj["name"] = empData.firstName + " " + empData.lastName;
                    empObj["createdDate"] = empData.createdDate;
                    empObj["sessionTimeOut"] = empData.sessionTimeOut;
                }
            });

            return empObj;
        });

        dispatch(employeesActions.load(employeesList));
    }, []);

    useEffect(() => {
        if (allEmployees.length === 0) {
            const fetchedData = async () => {
                try {
                    setIsLoading(true);
                    const empResp = axios.get(DB_EMPLOYEES_URL);
                    const permResp = axios.get(PERMISSIONS_FILE_URL);
                    const employeeDataResp = axios.get(EMP_DATA_FILE_URL);

                    // Waiting for all requests to get their responses
                    const [employees, permissions, employeeData] = await Promise.all([
                        empResp,
                        permResp,
                        employeeDataResp,
                    ]);
                    
                    // Create the employees list to store in redux only if all the requested url returned with corrrect data
                    if (employees.status && permissions.status && employeeData.status) {
                        createEmployeesList(employees.data, permissions.data, employeeData.data);
                    }
                } catch (error) {
                    console.log(error.message);
                }
                setIsLoading(false);
            };

            fetchedData();
        }
    }, [dispatch, createEmployeesList]);

    return (
        <div className={styles.all_emp_container}>
            {isLoading && <PacmanLoading color="#87a2ff" />}
            {!isLoading && <AllEmployeesList />}
        </div>
    );
};

export default AllEmployees;
