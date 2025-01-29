import styles from "./editEmployee.module.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { employeesActions } from "../../store/slices/employeesSlice";
import axios from "axios";

import Input from "../../genericComp/input";
import Button from "../../UI/button/button";
import PermissionsList from "./permissionsList";

// Conditions that require to check the view permission
const CONDITIONAL_SUBSCRIPTION_PERMISSIONS = ["Create Subscriptions", "Delete Subscriptions", "Update Subscription"];

// Conditions that require to check the view permission
const CONDITIONAL_MOVIE_PERMISSIONS = ["Create Movies", "Delete Movies", "Update Movie"];

const EditEmployee = () => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const usernameRef = useRef();
	const sessionTimeoutRef = useRef();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const allEmployees = useSelector((state) => state.employees.employees);

	// Get the employee id from the employees list(for this employee the edit button clicked)
	const employeeId = JSON.parse(localStorage.getItem("empId"));

	// Split the full name from the employee object to first and last names
	const clickedEmployee = allEmployees.filter((employee) => employee.id === employeeId)[0];
	const delimiterIndex = clickedEmployee.name.indexOf(" ");
	const firstName = clickedEmployee.name.slice(0, delimiterIndex);
	const lastName = clickedEmployee.name.slice(delimiterIndex + 1);
	const createdDate = clickedEmployee.createdDate.replaceAll(".", "/");

	const cancelHandler = () => {
		localStorage.removeItem("empId");

		navigate("/layout/WebContentLayout/employees/all");
	};

	const submitHandler = (event) => {
		event.preventDefault();

		// Update the new permissions allowed by the admin to the permissions json file
		const url = "http://localhost:3000/permissions/update";
		axios.put(url, { employeeId: clickedEmployee.id, permissions: clickedEmployee.permissions });

		// TODO: UPDATE HERE THE EMPLOYEES FILE WITH THE NEW DATA ENTERED BY THE ADMIN

		localStorage.removeItem("empId");
		navigate("/layout/WebContentLayout/employees/all");
	};

	const checkboxClickHandler = (clickedOption) => {
		let updatedPermissions = [...clickedEmployee.permissions];
		if (!clickedOption.isChecked) {
			updatedPermissions = updatedPermissions.filter((perm) => clickedOption.permission !== perm);
		} else {
			// Insert the clicked permission to the employee permissions list
			updatedPermissions.push(clickedOption.permission);

			// Check if one of the conditional permissions is checked for check the view permission automatically
			if (CONDITIONAL_SUBSCRIPTION_PERMISSIONS.includes(clickedOption.permission)) {
				const viewPerm = "View Subscription";
				if (!clickedEmployee.permissions.includes(viewPerm)) {
					updatedPermissions.push(viewPerm);
				}
			} else if (CONDITIONAL_MOVIE_PERMISSIONS.includes(clickedOption.permission)) {
				const viewPerm = "View Movies";
				if (!clickedEmployee.permissions.includes(viewPerm)) {
					updatedPermissions.push(viewPerm);
				}
			}
		}

		dispatch(employeesActions.editPermissions({ id: clickedEmployee.id, permissions: updatedPermissions }));
	};

	return (
		<form className={styles.edit_employee_form_container} onSubmit={submitHandler}>
			<Input
				title="First Name "
				type="text"
				className={styles.edit_employee_input}
				value={firstName}
				ref={firstNameRef}
			/>
			<Input
				title="Last Name "
				type="text"
				className={styles.edit_employee_input}
				value={lastName}
				ref={lastNameRef}
			/>
			<Input
				title="Username "
				type="text"
				className={styles.edit_employee_input}
				value={clickedEmployee.username}
				ref={usernameRef}
			/>
			<Input
				title="Session Time Out (Minutes) "
				type="number"
				className={styles.edit_employee_input}
				value={clickedEmployee.sessionTimeOut}
				ref={sessionTimeoutRef}
			/>

			<p>Created Date : {createdDate}</p>

			<p>Permissions :</p>
			<PermissionsList userPermissions={clickedEmployee.permissions} onChange={checkboxClickHandler} />

			<div className={styles.edit_employee_actions}>
				<Button className={styles.edit_employee_action_buttons} text="Update" type="submit" />
				<Button
					className={styles.edit_employee_action_buttons}
					text="Cancel"
					type="button"
					onClick={cancelHandler}
				/>
			</div>
		</form>
	);
};

export default EditEmployee;
