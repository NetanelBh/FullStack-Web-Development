import styles from "./allEmployeesList.module.css";
import { useNavigate } from "react-router-dom";

import Card from "../../UI/card/card";
import Button from "../../UI/button/button";
import { useSelector } from "react-redux";

const AllEmployeesList = () => {
    const navigate = useNavigate();
    const allEmployees = useSelector((state) => state.employees.employees);

    const editHandler = (employee) => {  
        // Save it to localStorage to parse it in the edit employee page  
        localStorage.setItem("empId", JSON.stringify(employee.id));
            
        navigate("/layout/editEmployee");
    };

    const deleteHandler = () => {};

    return (
        <ul className={styles.all_emp_list_ul}>
            {allEmployees.map((employee) => {
                return (
                    <Card className={styles.all_emp_card} key={employee.id}>
                        <li>
                            <span className={styles.details_wrapper}>
                                Name: <span className={styles.employee_data_content}>{employee.name}</span>
                            </span>
                            <span className={styles.details_wrapper}>
                                User Name: <span className={styles.employee_data_content}>{employee.username}</span>
                            </span>
                            <span className={styles.details_wrapper}>
                                Session time out(Minutes):{" "}
                                <span className={styles.employee_data_content}>{employee.sessionTimeOut}</span>
                            </span>
                            <span className={styles.details_wrapper}>
                                Created date:{" "}
                                <span className={styles.employee_data_content}>
                                    {employee.createdDate.replaceAll(".", "/")}
                                </span>
                            </span>
                            <span className={`${styles.all_emp_permissions} ${styles.details_wrapper}`}>
                                Permissions:
                                <div className={styles.all_emp_permissions_list}>
                                    {employee.permissions.map((perm) => {
                                        return <p key={perm}>{perm}</p>;
                                    })}
                                </div>
                            </span>

                            <div className={styles.all_emp_list_actions}>
                                <Button
                                    className={styles.all_emp_list_action_buttons}
                                    text="Edit"
                                    type="button"
                                    onClick={() => editHandler(employee)}
                                />
                                <Button
                                    className={`${styles.all_emp_list_action_buttons} ${styles.delete_btn}`}
                                    text="Delete"
                                    type="button"
                                    onClick={deleteHandler}
                                />
                            </div>
                        </li>
                    </Card>
                );
            })}
        </ul>
    );
};

export default AllEmployeesList;
