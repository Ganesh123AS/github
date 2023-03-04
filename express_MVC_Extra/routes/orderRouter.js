const express = require('express');
const app = express();

app.post('/order', (req, res) => {
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

// it is for params for variable
app.get("/order/:id", (req,res) => {
    // register the order
    // access params
    let id = req.params.id;
    console.log(id) 
})

// if params is for variable eg: phone/ clothes/ foods category they are termed as slug
app.get("/order/:slug", (req,res) => {
    // register the order
    // access params
    let slug = req.params.slug;
    console.log(slug) 
}) 

//query (it is not part of url (after ?))
app.get("/order/:id", (req,res) => {
    // register the order
    // access params
    let id = req.params.id;
    let query = req.query.price
    console.log(id)
    console.log(query)
}) 

module.exports = app;