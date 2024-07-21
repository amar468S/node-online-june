let express = require("express");
let app = express();
let config = require("./config.json");
//routes

//global middleware
// global routes will be called everytime we hit a new page
let firstFun = function(req, res, next){
    console.log("First Fun was called");
    next()
}

let secondFun = function(req, res, next){
    console.log("Second Fun was called");
    next()
}

// app.use(firstFun, secondFun);

//inline middleware
// Only works for the route that we click
app.get("/", function(req, res, next){
    console.log("First route was called");
    next()
}, function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html");
})
app.get("**", function(req, res){
    res.sendFile(__dirname+"/notfound.html");
})



app.listen(config.port, config.host, function(error){
    error ? console.log("Error ", error) : console.log("Server is now live on "+config.host + " "+config.port);
})


// In below case if we did not pass the hostname it will still work 
// app.listen(5050, function(error){
//     error ? console.log("Error ", error) : console.log("Server is now live on localhost 5050");
// })

// In below case if we did not pass the hostname and callback function it will still work 
// app.listen(5050);
// console.log("Server is now live on localhost 5050");

// In below case if we did not pass the port, hostname and callback function it will still work 
// app.listen();
// console.log("Server is now live on not known location");

// //Express will create a dynamic port for us
// let listen = app.listen();
// console.log("Server is now live on not known location", listen.address().port);