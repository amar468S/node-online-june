let fs = require("node:fs");

// watch file has to constantly watch and its asynchronous

fs.watchFile("data/temp.txt", function(curVal, preVal){
    console.log("Current Status", curVal.size);
    console.log("Previous Status", preVal.size);
})