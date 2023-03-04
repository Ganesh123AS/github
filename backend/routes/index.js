const express = require('express');
const app = express();

const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");
app.use(loginRouter);
app.use(registerRouter);

module.exports = app;