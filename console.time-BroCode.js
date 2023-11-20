// console.time & console.timeEnd
// Start a timer to track how long an operation takes
// Give each timer a unique name


/* 
Synchronous_Code
// Start the timer with the name "Respond time"
console.time("Respond time");

// Simulate the synchronous code
alert("SOME PROGRAM RUNNING");

// End the timer with the name "Respond time" and log the duration
console.timeEnd("Respond time"); // Measure the time taken to execute this code
*/

// Asynchoronous_Code

// Start
console.time("Respond time")

// Simulate the asynchronous code
setTimeout(() => console.log("This is asynchronous printed after 5 secs"), 5000)

// End
console.timeEnd("Respond time")