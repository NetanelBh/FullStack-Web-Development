import jsonfile from 'jsonfile';
import fs from 'fs';

export const getDataFromJson = (path) => {
    return jsonfile.readFile(path);
};

export const writeDataToJson = async (path, data) => {
    await jsonfile.writeFile(path, data);
};