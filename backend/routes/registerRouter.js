const express = require("express");
const app = express();
const registerController = require("../app/controller/registerController");



app.post("/register", registerController.registerUser);

module.exports = app;
