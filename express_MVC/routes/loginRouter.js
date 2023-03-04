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

module.exports = app