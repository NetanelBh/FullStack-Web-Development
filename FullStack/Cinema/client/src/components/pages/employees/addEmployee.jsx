import styles from "./addEmployee.module.css";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../genericComp/input";
import Button from "../../UI/button/button";
import PermissionsList from "./permissionsList";
import updatedPermissionsCheckboxes from "../../utils/updated_permissions_checkboxes";

const AddEmployee = () => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const usernameRef = useRef();
	const timeoutRef = useRef();
  const navigate = useNavigate();

	const [permissions, setPermissions] = useState([]);

	const checkboxClickHandler = (clickedOption) => {
    const updatedCheckboxes = updatedPermissionsCheckboxes(clickedOption, permissions);

    setPermissions(updatedCheckboxes);
  };

  const cancelHandler = () => {
    navigate("/layout/WebContentLayout/employees/all");
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
		
      <div className={styles.add_employee_actions}>
				<Button className={styles.add_employee_action_buttons} text="Save" type="submit" />
				<Button
					className={styles.add_employee_action_buttons}
					text="Cancel"
					type="button"
					onClick={cancelHandler}
				/>
			</div>
    </form>
	);
};

export default AddEmployee;
