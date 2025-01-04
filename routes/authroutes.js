const express = require("express");
const authController = require("../controller/authcontroller")
const authRouter = express.Router();
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
// authRouter.post("/logout", authController.logout);
authRouter.get("/me",authController.me);
module.exports = authRouter;



