const express = require('express');
const app = express();

app.get("/test", (req,res,next) => {
    let data = false;
    if(!data){
        next({
            status: 401, 
            msg: "User is not logged in"})
            
    } else {
        res.json({
            result: null,
            status: true,
            msg: "User is not logged in"})
    }
})

app.get("/user/:id", (req, res, next) => {
    let params = req.params;
    let query = req.query;
    let body = req.body;
    res.json({
        result: {
            params: params,
            query: query,
            body: body
        },
            status: true,
            msg: "Parser exampple"
    })
})



module.exports = app