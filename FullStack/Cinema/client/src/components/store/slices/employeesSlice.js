import { createSlice } from "@reduxjs/toolkit";

const initialState = { employees: [] };

const employeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
        // Load the employees list at the beginning from the database and the data json files
		load(state, action) {
			state.employees = action.payload;
		},
		// Add a new employee to the employees list
		add(state, action) {
			state.employees.push(action.payload);
		},
		// Remove employee from the employees list
		remove(state, action) {
			const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
			if (index !== -1) {
				state.employees.splice(index, 1);
			}
		},
		// action.payload gets the employee id and the permissions updated array
		editPermissions(state, action) {
			const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
			if (index !== -1) {
				state.employees[index].permissions = action.payload.permissions;
			}
		},
	},
});

export const employeesActions = employeesSlice.actions;
export default employeesSlice.reducer;
