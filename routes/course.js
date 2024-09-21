const express = require("express");
const Router = express.Router();
const courseRouter = express.Router();
courseRouter.post("/course/purchase", function (req, res) {
  res.json({
    message: "Login Success",
  });
});
courseRouter.post("/courses", function (req, res) {
  res.json({
    message: "Login Success",
  });
});
