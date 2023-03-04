const http = require('http');
const server = http.createServer();

// server.listen(3000, "localhost", (err) => {
server.listen(3000, "127.0.0.1", (err) => {
    if(!err){
        console.log("server is listening to port: 3000")
        console.log("Press CTRL + C to disconnect server")
    }
})