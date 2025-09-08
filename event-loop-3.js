const fs = require("fs");

setImmediate(() => console.log("setImmidiate"));

setTimeout(() => console.log("Timer required"), 0);

Promise.resolve("promise resolve").then(console.log);

fs.readFile("./text.txt", "utf8", () => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd process nextTick"));

    setImmediate(() => console.log("2nd setImmidiate"));

    console.log("file reading cb");
});

process.nextTick(() => console.log("process nextTick"));

console.log("last line of the file");


//output=>
/***
 * last line of the file
 * process nextTick
 * promise resolve
 * Timer required
 * setImmidiate
 * file reading cb
 * 2nd process nextTick
 * 2nd setImmidiate
 * 2nd timer
 */