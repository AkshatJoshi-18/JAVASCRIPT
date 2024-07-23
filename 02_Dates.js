
console.log(Date()) // Tue Jul 23 2024 13:49:11 GMT+0530 (India Standard Time)

console.log(Date.now()) // 1721722821072 this is in miliseconds, this is the timestamp when this code was executed

let date = new Date()

console.log(date.toDateString()) // Tue Jul 23 2024
console.log(date.toLocaleDateString()) // 7/23/2024

console.log(date.toTimeString()) // 13:52:39 GMT+0530 (India Standard Time)
console.log(date.toLocaleTimeString()) // 1:52:39 PM

console.log(date.getDay()) // 2;
console.log(date.getDate()) // 23;'
