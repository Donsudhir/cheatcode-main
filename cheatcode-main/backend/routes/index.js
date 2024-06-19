const express = require("express");
const { userRouter } = require("./user");
const { problemRouter } = require("./problems");
const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/problems", problemRouter);

module.exports = mainRouter;
