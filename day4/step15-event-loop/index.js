const fs = require("node:fs");
fs.readFile("temp.txt","utf-8", (data) => {
    console.log(data, "line 3");
});
Promise.resolve().then(()=>{
    console.log("Promise resolve was called", "line 6")
});
process.nextTick(()=>{
    console.log("process's nextTick was called", "line 9")
});
setImmediate(()=>{
    console.log("setImmediate was called", "line 12")
});
setTimeout(()=>{
    console.log("setTimeout was called", "line 15")
},0);
let si = setInterval(()=>{
    console.log("setInterval was called","line 18")
})
Promise.resolve().then(()=>{
    console.log("2nd Promise resolve was called", "line 21")
});
setImmediate(()=>{
    clearInterval(si)
    console.log("after clearInterval was called", "line 25")
})