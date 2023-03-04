const express = require('express');
const app = express();

app.post('/register', (req, res) => {
    let validation_flag = false;
    if(validation_flag){
        res.status(400).json({
            result: null,
            status: false,
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

module.exports = app