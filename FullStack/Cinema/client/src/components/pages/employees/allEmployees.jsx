import styles from "./allEmployees.module.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import Card from "../../UI/card/card";
import PacmanLoading from "../../UI/loading/pacmanLoading";

const AllEmployees = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [usernameList, setUsernameList] = useState([]);
    const [permissionsList, setPermissionsList] = useState([]);
    const [employeesData, setEmployeesData] = useState([]);

    const dispatch = useDispatch();

    const createEmployeesList = useCallback(() => {
        return;
    }, []);

    // The functin get url and type and fetch the data from the match router in servert
    const fetchData = useCallback(async (type, url) => {
        // Type used to determine which data should be fetched
        if (type === "employees") {
            setIsLoading(true);
            try {
                const employees = (await axios.get(url)).data;
                if (employees.status) {
                    setUsernameList(employees.data);
                    setIsLoading(false);
                } else {
                    log("Can't fetch employees from DB");
                }
            } catch (error) {
                console.log(error.message);
            }
        } else if (type === "permissions") {
            setIsLoading(true);
            try {
                const permissions = await axios.get(url);
                if (permissions.status) {
                    setPermissionsList(permissions.data);
                    setIsLoading(false);
                } else {
                    console.log("Can't fetch permissions from json file");
                }
            } catch (error) {
                console.log(error.message);
            }
        } else if (type === "employeesData") {
            try {
                setIsLoading(true);
                const employeesData = await axios.get(url);
                if (employeesData.status) {
                    setEmployeesData(employeesData.data);
                    setIsLoading(false);
                } else {
                    console.log("Can't fetch employees data from json file");
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }, []);

    useEffect(() => {
        fetchData("employees", "http://localhost:3000/employees/db");
        fetchData("permissions", "http://localhost:3000/employees/permissions");
        fetchData("employeesData", "http://localhost:3000/employees/file");
        createEmployeesList();
    }, [fetchData, createEmployeesList]);

    return (
        <div className={styles.all_emp_container}>
            {isLoading && <PacmanLoading color="#87a2ff" />}
            {!isLoading && (
                <Card className={styles.all_emp_card}>
                    <div className={styles.all_emp_card_content}>AllEmployees</div>
                </Card>
            )}
        </div>
    );
};

export default AllEmployees;
