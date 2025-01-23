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
            state.employees.push(action.payload.user);
        },
        remove(state, action) {
            const index = state.employees.findIndex((emp) => emp.id === action.payload);
            if (index!== -1) {
                state.employees.splice(index, 1);
            }
        },
        edit(state, action) {
            const index = state.employees.findIndex((emp) => emp.id === action.payload)
            if (index!== -1) {
                state.employees[index] = action.payload;
            }
        }
    }
});

export const employeesActions = employeesSlice.actions;
export default employeesSlice.reducer;