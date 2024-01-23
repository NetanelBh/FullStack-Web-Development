import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

import jsonfile from "jsonfile";

export const getAllUsers = () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const jsonPath = path.join(__dirname, '../data/users.json');
  return jsonfile.readFile(jsonPath);
};
