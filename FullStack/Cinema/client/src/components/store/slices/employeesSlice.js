import { createSlice } from "@reduxjs/toolkit";

// isChanged property indicates whether some employee changed in DB
const initialState = { employees: [], readFromDb: false};

const employeesSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
        // Load the employees list at the beginning from the database and the data json files
		load(state, action) {
			state.employees = action.payload.employees;
            state.readFromDb = action.payload.readFromDb;
		},
		// Add a new employee to the employees list
		add(state, action) {
			state.employees.push(action.payload.employee);
            state.readFromDb = action.payload.readFromDb;
		},
		// Remove employee from the employees list
		remove(state, action) {
			const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
			if (index !== -1) {
				state.employees.splice(index, 1);
                state.readFromDb = action.payload.readFromDb;
			}
		},
		// action.payload gets the employee id and the permissions updated array
		editPermissions(state, action) {
			const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
			if (index !== -1) {
				state.employees[index].permissions = action.payload.permissions;
                state.readFromDb = action.payload.readFromDb;
			}
		},
        // Edit employee object in employees list
        editEmployee(state, action) {
            const index = state.employees.findIndex((emp) => emp.id === action.payload.employee.id);
            if (index !== -1) {
                state.employees[index] = action.payload.employee;
            }
            state.readFromDb = action.payload.readFromDb;
        },
        // If the admin changed the username, will call this fuction to read the updated data from the DB
        userNameChange(state, action) {
            state.readFromDb = action.payload;
        }

	},
});

export const employeesActions = employeesSlice.actions;
export default employeesSlice.reducer;
