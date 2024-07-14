let fs = require("node:fs");

// by default node does not allow you to create a directory

//create a file
/**
 * Synchronous way to check if folder exists 
 * If not exists then throw error and create one folder with name "data" and then create a file names "temp.txt"
 */
/*function writeInfo(){
    fs.writeFileSync("data/temp.txt", "Welcome to node js");
    console.log("file is ready");
}

fs.access("/data", (error)=>{
    if(error){
        console.log("folder not found", error);
        fs.mkdirSync("data");
        writeInfo();
    }else{
        console.log("folder with name data exists");
        writeInfo();
    }
});
*/

/**
 * Asynchronous way to check if folder exists 
 * If not exists then throw error and create one folder with name "data" and then create a file names "temp.txt"
 */
function writeInfo(){
    fs.writeFile("data/temp.txt", "Welcome to node js", function(error){
        if(error){console.log("Error", error);}
        else{console.log("file is ready");}
    });
}

// To append data to same file use below approach
var si = null;
function appendInfo(){
    let count = 0;
    let si = setInterval(function(){
        fs.writeFile("data/temp.txt", "Welcome to node js \n", {flag : "a"}, function(error){
            if(error){console.log("Error", error);}
            else{console.log("file is ready");}
        });
        count++;
        if(count>4){
            clearInterval(si);
        }
    }, 4000)
}

fs.access("data", (error)=>{
    if(error){
        console.log("folder not found", error);
        fs.mkdir("data", function(){
            // writeInfo();
            appendInfo();
        });
    }else{
        console.log("folder with name data exists");
        // writeInfo();
        appendInfo();
    }
});




