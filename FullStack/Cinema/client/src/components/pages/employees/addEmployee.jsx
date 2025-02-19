import styles from "./addEmployee.module.css";

import { useRef, useState } from "react";

import Input from "../../genericComp/input";
import PermissionsList from "./permissionsList";
import updatedPermissionsCheckboxes from "../../utils/updated_permissions_checkboxes";

const AddEmployee = () => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const usernameRef = useRef();
	const timeoutRef = useRef();

	const [permissions, setPermissions] = useState([]);

	const checkboxClickHandler = (clickedOption) => {
    const updatedCheckboxes = updatedPermissionsCheckboxes(clickedOption, permissions);

    setPermissions(updatedCheckboxes);
  };

	return (
		<form className={styles.add_employee_form_container}>
			<Input title="First Name" type="text" className={styles.add_employee_input} ref={firstNameRef} />
			<Input title="Last Name" type="text" className={styles.add_employee_input} ref={lastNameRef} />
			<Input title="User Name" type="text" className={styles.add_employee_input} ref={usernameRef} />
			<Input
				title="Session Time Out(Minutes)"
				type="number"
				className={styles.add_employee_input}
				ref={timeoutRef}
			/>

			<p>Permissions :</p>
			<PermissionsList userPermissions={permissions} onChange={checkboxClickHandler} />
		</form>
	);
};

export default AddEmployee;
