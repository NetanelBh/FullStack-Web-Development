import SaveTasksToJson from "./saveTasksToJson.js";

const userName = "Antonette";
SaveTasksToJson(userName).then(name => console.log(`Full name is: ${name}`));