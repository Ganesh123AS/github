const express = require('express');
const app = express();

const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");
const orderRouter = require("./orderRouter");
const queryParams = require("./queryParams");

app.use(loginRouter);
app.use(registerRouter);
app.use(orderRouter);
app.use(queryParams);

module.exports = app;