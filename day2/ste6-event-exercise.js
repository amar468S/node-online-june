// Create an event that is dispatched once every second for 10 secods only using event emitter

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

let count = 1;
let newInterval = setInterval(() => {
    myEmitter.emit("tickEvent", count);
    count++;
    if(count>=10){
        clearInterval(newInterval);
    }
}, 1000);

myEmitter.on("tickEvent", (count)=>{
    console.log("ticked for ", count);
});


