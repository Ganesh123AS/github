const express = require('express');
const app = express();
port = 3000;

const routes = require("./routes/index")
//mounting of routes 
app.use(routes)

// every url must register in app
// eg auth login
// app is express object where we req call method
// first parameter is url, second parameter is callback

app.get('/', (req, res) => {
 res.end("hello world!");
})

// app.post('/login', (req, res) => {
//     // TODO: Validation
//     // TODO: Modelling
//     // TODO: DB Query
//     res.json({
//         result: null,
//         status: true,
//         msg: "success "
//     })
//     // or
//     res.status(400).json({
//         result: null,
//        status: false,
//         msg: "crediantials does not match "
//     }) 
// })
// app.post('/register', (req, res) => {
//     let validation_flag = false;
//     if(validation_flag){
//         res.status(400).json({
//             result: null,
//             status: false,
//             msg: "crediantials does not match "
//         })
//     }else{
//         res.json({
//             result: null,
//             status: true,
//             msg: "crediantials matched successfully "
//         })
//     }

// })

// error page
app.use((req,res, next) => {
    next({
        status: 404,
        msg: "not found error"
    })
})

app.use((error, req, res, next) => {
    let status = error.status ?? 500
    let msg = error.msg ?? error
    res.status(status).json({
        result: null,
        status: false,
        msg: msg
        // msg: "not found (erro handling middlewre)"
    })
})


app.listen(port, "localhost", (req,res) => {
    console.log(`listening to port: ${port}`);
    console.log("Press CTRL + C to disconnect server")
})