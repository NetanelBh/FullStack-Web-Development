import styles from "./allEmployeesList.module.css";

import Card from "../../UI/card/card";

const AllEmployeesList = ({ employees }) => {
    return (
        <ul className={styles.all_emp_list_ul}>
            {employees.map((employee) => {
                console.log(employee);
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
                        </li>
                    </Card>
                );
            })}
        </ul>
    );
};

export default AllEmployeesList;
