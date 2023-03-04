const http = require('http');
const server = http.createServer( (req, res) =>{
    let url = req.url;
    let method = req.method;
    // console.log(url+ " "+method)
    if(url === "/" && method === "GET"){
        res.end("Login Page")
    }else if(url === "/register" && method === "GET") {
        res.end("Register Page")
    }else if(url === "/user" && method === "GET") {
        let users = [ "hari", "shyam", {name: "ram"} ];
        res.end(JSON.stringify({
              users: users
        }))
    }
    else {
        res.end("error page")
    }
} );

// server.listen(3000, "localhost", (err) => {
server.listen(3000, "127.0.0.1", (err) => {
    if(!err){
        console.log("server is listening to port: 3000")
        console.log("Press CTRL + C to disconnect server")
    }
})