let os = require("os");

console.log("Architecture", os.arch());
// console.log("CPU", os.cpus());
console.log("Number of CPU", os.cpus().length);
console.log("CPU", os.cpus()[0].model);
console.log("CPU", os.cpus()[0].speed);
console.log("Total memory", os.totalmem());
console.log("Free memory", os.freemem());
console.log("User Info", os.userInfo().username);