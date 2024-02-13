import express from "express";

import * as usersService from "../services/usersService.js";

// ENTRY POINT: http://localhost:3001/users

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Get the basic users data
    const users = await usersService.getUsers();
    res.send({ success: true, data: users });
  } catch (error) {
    res.send({success: false, data: error});
  }
});

// This function uses for each user's action (add the action to json file)
router.get("/actions", async (req, res) => {
  try {
    const data = await usersService.addActionToUser(req.session.user);
    if(!data) {
      res.send({success: false, data: "Couldn't add action"});
    }
  } catch (error) {
    return res.send({ success: false, data: error });
  }
});

export default router;
