import { createSlice } from "@reduxjs/toolkit";

const initialState = {employees: []};

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        load(state, action) {
            state.employees = action.payload;            
        },
        add(state, action) {
            state.employees.push(action.payload);
        },
        remove(state, action) {
            const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
            if (index!== -1) {
                state.employees.splice(index, 1);
            }
        },
        editPermissions(state, action) {            
            const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
            if (index!== -1) {
                state.employees[index].permissions = action.payload.permissions;
            }
        }
    }
});

export const employeesActions = employeesSlice.actions;
export default employeesSlice.reducer;