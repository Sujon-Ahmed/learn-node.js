let os = require("os");

console.log("Operating System Information:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("CPU Info:", os.cpus());
