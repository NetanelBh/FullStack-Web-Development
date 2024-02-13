import express from "express";
import jwt from "jsonwebtoken";

import * as authService from "../services/authService.js";

// ENTRY POINT: http://localhost:3001/auth

const router = express.Router();

router.post("/login", async (req, res) => {
  const { user, email } = req.body;
  if (!user) {
    return res.status(401).json({ success: false, data: "Enter user name" });
  }

  if (!email) {
    return res.status(401).json({ success: false, data: "Enter email" });
  }

  // Let the user log in only if he is out of the system
  if (!req.session.user) {
    // Not let the user login, if he exceeded his dayly limit
    const isAccess = await authService.checkUserLimitActions(user);
    if(!isAccess)
    {
      req.session.data = { success: false, data: "Can't login, you exceeded your limit"};
      return res.send('/logout');
    }

    try {
      const resp = await authService.login(user, email);
      if (!resp.success) {
        return res.status(401).json({ success: false, data: resp.data });
      }

      // Enter the user name to session to check for logged in at other pages
      req.session.user = user;

      // Generate token to user
      const token = jwt.sign({ username: user }, process.env.KEY);
      return res.send({ success: true, data: token });
    } catch (error) {
      return res.status(401).json({ success: false, data: "Can't login" });
    }
  } else {
    return res.send({ success: false, data: "The user logged in already" });
  }
});

router.get("/logout", (req, res) => {
  const updatedData = {};
  if(req.session.data) {
    const reqContent = {...req.session.data}
    updatedData.success = reqContent.success;
    updatedData.data =  reqContent.data + ",  logging out";
  } else {
    updatedData.success = true;
    updatedData.data =  "Succesfully logged out";
  }
  // When logout, remove the user from the session to let him login later
  req.session.destroy();

  res.send(updatedData);
});

export default router;
