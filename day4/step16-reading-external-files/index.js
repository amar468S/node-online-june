let fetch = require("fetch");
let fs = require("node:fs");

fetch.fetchUrl("https://www.npmjs.com/package/fetch", function(error, meta, data){
    // console.log(data);
    fs.writeFile("temp.html", data, "utf-8", function(error, data){
        if(error){
            console.log("Error", error);
        }else{
            console.log("Writing to temp.html file");
        }
    })
});