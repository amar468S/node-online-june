let EventEmitter = require("node:events").EventEmitter;

let myEvent = new EventEmitter();

// setTimeout(() => {
//     myEvent.emit("myEvent");
// }, 2000);

myEvent.setMaxListeners(5);

let myfunc = function(){
    console.log("Event Happened in listner One ");
}
let secondfunc = function(){
    console.log("Event Happened in listner Two");
}
let thirdfunc = function(){
    console.log("Event Happened in listner Three");
}
let fourthfunc = function(){
    console.log("Event Happened in listner Four");
}
myEvent.addListener("myEvent", myfunc);
myEvent.addListener("myEvent", secondfunc);
myEvent.addListener("myEvent", thirdfunc);
myEvent.addListener("myEvent", fourthfunc);

// myEvent.removeListener("myEvent", thirdfunc);

myEvent.removeAllListeners("myEvent");

myEvent.emit("myEvent");

// console.log(myEvent.listenerCount("myEvent"));

