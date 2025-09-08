const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmidiate"));

Promise.resolve("promise resolve").then(console.log);

fs.readFile("./text.txt", "utf8", () => {
    console.log("file reading cb");
});

setTimeout(() => console.log("Timer required"), 0);

process.nextTick(() => console.log("process nextTick"));

function printA() {
    console.log("a = ", a);
}

printA();
console.log("last line of the file");


//output=>
/***
 * a = 100
 * last line of the file
 * process nextTick
 * promise resolve
 * Timer required
 * setImmidiate
 * file reading cb
 */