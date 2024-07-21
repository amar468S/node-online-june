let express = require("express");
let config = require("./config.json");
let app = express();

app.get("/", function(req, res){
    res.render("home.ejs", {title: "Home Page", footer_note:"Home"});
})

app.get("/about", function(req, res){
    res.render("about.ejs", {title: "About Page", footer_note:"About"});
})

app.get("/contact", function(req, res){
    res.render("contact.ejs", {title: "Contact Page", footer_note:"Contact"});
})

app.get("**", function(req, res){
    res.render("notfound.ejs", {title: "404 Page", footer_note:"404"});
})

app.listen(config.port, config.host, function(error){
    error ? console.log("Error ", error) : console.log("Server is now live on "+config.host + " "+config.port);
});