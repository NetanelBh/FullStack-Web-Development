import * as fileRepo from '../repositories/fileRepo.js';

const JSONPATH = process.cwd() + './data/permissions.json';

const getEmployeesPermissions = () => {
    return fileRepo.getDataFromJson(JSONPATH)
};

const writeEmployeesPermissions = (permissions) => {
    fileRepo.writeDataToJson(JSONPATH, permissions);
};

export const addPermission = (employeeId, permission) => {};

export const removePermission = (employeeId, permission) => {};

export const deleteEmployee = async (employeeId) => {
    try {
        const empPermissions = await getEmployeesPermissions();
        const index = empPermissions.findIndex(emp => emp.id === employeeId);
        if (index!== -1) {
            empPermissions.splice(index, 1);
        }
        writeEmployeesPermissions(empPermissions);
        return employeeId;
    } catch (error) {
        return error.message;
    }
};