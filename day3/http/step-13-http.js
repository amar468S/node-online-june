let http = require("node:http");
let config = require("./config.json")
let fs = require("node:fs");

let server = http.createServer(function(req, res){
    fs.readFile("index.html", "utf-8", function(error, data){
        if(error){
            console.log("Error", error);
        }else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
        }
        res.end();
    })
});

// req => server request that comes in
// res => response that goes out
server.listen(config.port,config.host, function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("server is running on port 5055");
    }
});

