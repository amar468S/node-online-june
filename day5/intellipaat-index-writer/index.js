let fetch = require("fetch");
let fs = require("node:fs");
let url = process.argv[2] || "google";

fetch.fetchUrl("https://"+url+".com", function(error, meta, data){
    fs.writeFile(url+".html",data.toString(),"utf-8",function(error){
        if(error) {
            console.log(error);
        }else{
            console.log("Writing to "+url+".html");
        }
    })
})