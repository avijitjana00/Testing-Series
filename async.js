const fs = require("fs");
const https = require("https");

var a = 10;
var b = 20;

console.log("welcome to node js");

https.get("https://dummyjson.com/products/1", res => {
    console.log("fetched data successfully");
});

setTimeout(() => {
    console.log("logged after 5 mins");
}, 5000);

fs.readFile("./text.txt", "utf8", (err, data) => {
    console.log("file data: ", data);
});

function calculateMultiplication(a, b) {
    const c = a * b;
    return c;

}
const result = calculateMultiplication(a, b);
console.log(result);

