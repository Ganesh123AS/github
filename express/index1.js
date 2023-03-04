const express = require('express');
const app = express();
port = 3000;


app.listen(port, "localhost", (req,res) => {
    console.log(`listening to port: ${port}`);
    console.log("Press CTRL + C to disconnect server")
})