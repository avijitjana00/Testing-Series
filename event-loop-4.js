const fs = require("fs");

setImmediate(() => console.log("setImmidiate"));

setTimeout(() => console.log("Timer required"), 0);

Promise.resolve("promise resolve").then(console.log);

fs.readFile("./text.txt", "utf8", () => {
    console.log("file reading cb");
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"));
    console.log("nextTick");
});

console.log("last line of the file");


//output=>
/***
 * last line of the file
 * inner nextTick
 * nextTick
 * promise resolve
 * Timer required
 * setImmidiate
 * file reading cb
 */

const os = require("os");

// If not set, default is 4
const threadPoolSize = process.env.UV_THREADPOOL_SIZE || 4;

console.log("UV_THREADPOOL_SIZE (env):", process.env.UV_THREADPOOL_SIZE);
console.log("Effective Thread Pool Size:", threadPoolSize);
console.log("CPU Cores:", os.availableParallelism());