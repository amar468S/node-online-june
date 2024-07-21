let fs = require("node:fs");
let http = require("node:http");

let server = http.createServer(function(req, res){
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.write("hello from http module");
    // res.end("Hello World\n");

    let filepath = req.url;
    if(filepath === "/"){
        fs.readFile("index.html", "utf-8", function(error, data){
            if(error){
                console.log(error);
            }else{
                res.write(data);
                res.end();
            }
        })
    }else if(filepath === "favicon.ico"){
        res.end();
    }else{
        let tempurl = filepath.slice(1, req.url.length)
        fs.readFile(tempurl, "utf-8", function(error, data){
            if(error){
                console.log(error);
            }else{
                res.write(data);
                res.end();
            }
        })
    }
    
});

server.listen(5050, "localhost", function(error){
    if (error) {
        console.log("Error", error);
    }else{
        console.log("Server is now live on 5050");
    }
})