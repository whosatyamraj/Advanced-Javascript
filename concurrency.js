// asynchronous code and sonme options for multitasking with code.  This concept is called concurrency. 
//  In this code, we will see how to use async and await keywords to write asynchronous code in JavaScript. 
//  We will also see how to use the Promise.all() method to run multiple promises concurrently. 
//  Finally, we will see how to use the setTimeout() method to run a function after a specified delay.




// CALLBACKS
// It is a function that is passed as an argument to another function. 
// The callback function is executed after the completion of the first function.
// It is a way to ensure that certain code doesn't execute until other code has finished executing.


// function doSomething(callback){
    
//     callback();
// }

// functionsayHi(){
//     console.log("hi ");

// }

// doSomething(sayHi);
// // output: hi   


// function judge(grade){
//     switch(true){
//         case grade=='A':
//             console.log("excellent");
//             break;      
//         case grade=='B':
//             console.log("good");
//             break;
//         case grade=='C':
//             console.log("average");
//             break;
//         case grade=='D':
//             console.log("poor");
//             break;
//         case grade=='F':
//             console.log("fail");
//             break;
//         default:
//             console.log("invalid grade");
//             break;                              
//     }
// }

// judge('A');
// // output: excellent
// judge('B');
// // output: good





//The call becomes really valuable when we have to wait for a function to finish before we can call another function.
// This is a common pattern in JavaScript, especially when dealing with asynchronous code.


// setInterval(encourage, 5000);
// function encourage(){
//     console.log("You are doing great! Keep it up!");
// }



// PROMISES
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise may be in one of 3 states: pending, fulfilled, or rejected.
// A promise is a placeholder for a value that we don't have yet, but we will have in the future.
// A promise is a way to handle asynchronous operations in JavaScript.

// When resolve is called, the promise is fulfilled and the value is passed to the then() method.
// When reject is called, the promise is rejected and the error is passed to the catch() method.

//let promise = new Promise((resolve, reject) {
// let x = 20;
// if(x>10){
//     resolve("x is greater than 10"
//         }
//         else {
//     reject("x is less than 10");
// }
// //output: x is greater than 10
// });

//  promise.then(
//     function(value) {
//         console.log("Success",value);
//     },
//     function(error) {
//         console.log("Error", error);
//     }
// );




// const promise = new Promise((resolve, reject) => {
//      resolve("success");
// }).then(value => {
//     console.log(value); 
//     return "we";// success
// })
// .then(value =>{
//     console.log(value);
//     return "can";


// })
//  .catch(value => {
//     console.log(value);
     
//  })



// Async and await
// with the aync keyword , we can make a function return a Promise.This makes the Promise nicer to read
 

// function saySomething(x){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Something" + x);
//         }, 1000);
//     });
// }

// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words); 
// }
// //
// talk(2);
// talk(4);
// talk(8); 





// Event loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations,
//  despite the fact that JavaScript is single-threaded.  



// call stack
// The call stack is a data structure that keeps track of function calls in JavaScript.
//  It is a stack data structure that stores the execution context of each function call.

// console.log("hi there");
// add(4,5);
// function add(x,y){
//     return x+y;     
// }



// console.log("hi there");
// setTimeout(()=> console.log("sorry I am late"), 1000);
// console.log(add(4,5));
// function add(x,y){
//     return x+y;     
// }


// console.log("hi there");
// setTimeout(()=> console.log("sorry I am late"),  0);
// console.log(add(4,5));
// function add(x,y){
//     return x+y;
// }