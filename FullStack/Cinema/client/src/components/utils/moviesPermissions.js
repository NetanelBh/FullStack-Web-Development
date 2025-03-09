export const isShowMoviePermission = (employees, employeeId) => {            
    const emp = employees.find(employee => employee.id === employeeId);
    if (emp) {
        return emp.permissions.includes("View Movies");
    }
    return false;
};