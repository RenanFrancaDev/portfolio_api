const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDatabase = require("./src/services/db");

const projectsRouter = require("./src/routes/projects");

const app = express();
require("dotenv").config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", projectsRouter);
connectDatabase();
app.listen(4000, () => console.log("server is connected"));

module.exports = app;
