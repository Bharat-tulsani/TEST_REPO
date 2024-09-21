const express = require("express");
const Router = express.Router();
const userRouter = express.Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "sigup endpoint",
  });
});
userRouter.post("/signin", function (req, res) {
  res.json({
    message: "Login Success",
  });
});
userRouter.get("/purchase", function (req, res) {
  res.json({
    message: " Login Success",
  });
});
module.exports = {
  userRouter: userRouter,
};
