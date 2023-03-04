const express = require('express');
const app = express();

app.post('/register', (req, res, next) => {
    let validation_flag = true;
    if(!validation_flag){
        next({
            status: 400,
            msg: "crediantials does not match "
        })
    }else{
        res.json({
            result: null,
            status: true,
            msg: "crediantials matched successfully "
        })
    }

})


// middleware

const uploader = (req, res, next) => {
    // file uploading code
}

app.get("/register", uploader, (req, res, next)=>{
    // form develop ----> REact
    // data entry ------> user where> -----> From
    // submission of form -----> where? ----> /register route of back end mthod = post
    // logic
})

module.exports = app