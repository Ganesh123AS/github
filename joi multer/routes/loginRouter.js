const express = require('express');
const app = express();

const loginController = require("../app/controller/loginController");

app.post("/login", loginController.loginUser)

module.exports = app;