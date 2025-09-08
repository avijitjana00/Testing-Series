const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmidiate"));

fs.readFile("./text.txt", "utf8", () => {
    console.log("file reading cb");

    setTimeout(() => console.log("Timer required"), 0);

});

function printA() {
    console.log("a = ", a);
}

printA();
console.log("last line of the file");


//output=>
/***
 * a = 100
 * last line of the file
 * setImmidiate
 * file reading cb
 * Timer required
 */