let path = require("path");

// using the resolve method
/* 
console.log("without path module","C:/node-online-june/day2");
console.log("with path module", path.resolve("C:/node-online-june/day2")); 
*/


// using the join method
let folders = ["admin","guest","users"];
let files = ["index.html","details.html","profile.html"];
// console.log(folders[0]+"/"+files[0]); // works on mac
// console.log(folders[0]+"\"+files[0]); // error
// console.log(path.join(folders[0],files[0]));
console.log(path.join(folders[1],files[1]));


// using path.normalize method
let mypath = "C:\\Users\\Amar\\Desktop/Intellipaat Training/NodeJS///day2/step4-path.js";
console.log(path.normalize(mypath));



