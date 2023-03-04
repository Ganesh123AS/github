const http = require('http');
const server = http.createServer( (req, res) =>{
    // request process
    // client response
    // console.log(req)

    let url = req.url;
    let method = req.method;
    console.log(url);
    console.log(method);

    console.log("I am here");   // output in terminal
    res.end("Hello, world!");   // output in client side
} ); 

// server.listen(3000, "localhost", (err) => {
server.listen(3000, "127.0.0.1", (err) => {
    if(!err){
        console.log("server is listening to port: 3000")
        console.log("Press CTRL + C to disconnect server")
    }
})