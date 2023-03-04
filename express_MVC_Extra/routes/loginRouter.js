const express = require('express');
const app = express();

app.post('/login', (req, res) => {
    // TODO: Validation
    // TODO: Modelling
    // TODO: DB Query
    res.json({
        result: null,
        status: true,
        msg: "success "
    })
    // or
    res.status(400).json({
        result: null,
       status: false,
        msg: "crediantials does not match "
    }) 
})

app.get("/me", (req,res) => {
    //logic
})

app.get("/me", (req,res) => {
    // if i am a logged in user
    // if i am logged in request to login
    // login check 
        // response user profile
    // false =>
    res.json({
        result: null,
        status: false,
        msg: "User is not logged in"
    })
})

app.get("/me", (req,res,next) => {
    // if i am a logged in user
    // if i am logged in request to login
    // login check 
        // response user profile
    // false =>
    res.status(401).json({
        result: null,
        status: false,
        msg: "User is not logged in"
    })}, (req,res, next) => {
        // next is a callback
    })
module.exports = app