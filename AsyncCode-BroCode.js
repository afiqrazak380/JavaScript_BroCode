// synchronous code = in order, start now finish now
// asynchronous code = out of order, start now finist some time later
//                   eg: acces database, fetch a file, task that take time


// Asynchronous code example:

console.log("Start");
setTimeout(() => console.log("This come out 5 second after initiated"), 5000)
console.log("End");