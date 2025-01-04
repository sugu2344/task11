const express = require("express");
const logger = require("./utils/logger");
const morgan = require("morgan");
const ErrorRoute = require("./utils/error");
const app = express();
// middeware to log
app.use(logger);
app.use(morgan("dev"));

// error route
app.use(ErrorRoute);

module.exports = app;
