console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log( "Hello, World!");
}
var t=setTimeout(printHello, 2000);

clearTimeout(t);

console.info("Start running");
var counter=10;
console.log("Count: %d",counter);

console.time("Acquire data");

//Do sth
console.timeEnd("Acuqire data");
console.info("--end--")

// setInterval(printHello,1000);
// console.trace();