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
    if(req.session.requests && req.session.requests >= 5)
    {
      return res.send({ success: false, data: "Can't login, you exceeded your limit"});
    }

    try {
      const resp = await authService.login(user, email);
      if (!resp.success) {
        return res.status(401).json({ success: false, data: resp.data });
      }

      // Enter the user name to session to check for logged in at other pages
      req.session.user = user;

      // Generate new token if it's the first time in a day that the user logged
      if (!req.session.requests) {
        const token = jwt.sign({ username: user }, process.env.KEY);
        return res.json({ success: true, token });
      } else {
        return res.send({ success: true, data: "Successfully logged in" });
      }
    } catch (error) {
      return res.status(401).json({ success: false, data: "Can't login" });
    }
  } else {
    return res.send({ success: false, data: "The user logged in already" });
  }
});

router.get("/logout", (req, res) => {
  // When logout, remove the user from the session to let him login later
  delete req.session.user;
  if(req.session.requests >= 5)
  {
    res.send({ success: true, data: "You exceeded your daily actions limit" });
  } else {
    res.send({ success: true, data: "Successfully logged out" });
  }
});

export default router;
