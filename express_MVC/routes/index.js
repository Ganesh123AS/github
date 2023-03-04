const express = require('express');
const app = express();

const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");
const orderRouter = require("./orderRouter");

app.use(loginRouter);
app.use(registerRouter);
app.use(orderRouter);

module.exports = app;