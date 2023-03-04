const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// writing parser for body content type what type of content sending from postman
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}))

// always write body content (requier part) below urlencoded
const route = require("./routes/index");
app.use(route);

//try
// app.post("/login", (req, res, next) => {
//     let data = req.body;
//     console.log(data);
//       res.json({
//         result: data,
//         status: true,
//         msg: "registration successful",
//     })
//   });
//try

app.use((req, res, next) => {
    next({
        status: 404,
        msg: "page not found "
    })
})

app.use((error, req, res, next) => {
    let status = error.status ?? 500;
    let msg = error.msg ?? error;
    res.status(status).json({
        result: null,
        status: false,
        msg: msg
    })
})

app.get("/", (req,res) => {
    res.json("hello world");
})
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.listen(port, "localhost", (req, res) => {
    console.log(`listening to port: ${port}`);
    console.log("Press CTRL + C to disconnect server")
});