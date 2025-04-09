/*let spread = ["50", "much", "fun"];
  let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
  let newMessage = [...message, "to", "learn"];
  console.log(newMessage);
*/


//VARIABLES SCOPE IN FUNCTION
/*function testAvailability(x){
  console.log("AVAILABLE HERE",x)
}
  testAvailability("Hii");
 console.log("NOT AVAILABLE HERE",x);
*/


/*function testAvailability(y){
    let y = "I'll return";
    console.log("AVAILABLE HERE",y)
    }
   testAvailability("Hii");
console.log("Outside the function",z);
console.log("NOT AVAILABLE HERE",y);
*/



// function doingStuff(){
  //  if(true){
    //    var x= "local";
    //}
    //console.log(x);
//}
//doingStuff();

//function doingStuff(){
//    if(true){
  //      console.log(x);
    //    let x= "local";
    //}
   
//}
//doingStuff();

//Constant Scope
//function doingStuff(){
  //     if(true){
    //      console.log(x);
      //  const x= "local";
    //}
       
    //}
    //doingStuff(); 

    /*let globalVar = "Accessible everywhere";
    console.log("outside function", globalVar);
    
    function createLocalVar() {
        let localVar = "Accessible only inside function";
        console.log("inside function", localVar);
        console.log("inside function", globalVar);

    }
    
    createLocalVar(); // Don't forget to call the function!*/
/*let x = "global";
function doingStuff() {
    let x = "local";
    console.log("inside function", x);
}
doingStuff(); // Call the function to see the output
console.log("outside function", x); // Access the global variable
*/


/*let x = "global";
function doingStuff() {
    console.log("inside function", x);
}
doingStuff(); // Call the function to see the output
*/


/*function confuseReader() {
     x = "Guess my scope...";
    console.log("inside function", x);
}
confuseReader(); // Call the function to see the output
console.log("outside function", x); // Access the global variable
*/

// Immediately invoke function expression
/*(function() {
    console.log("IIFE!");
})();
*/


/*(() => {
    console.log("run right away");
})();
*/

// Recursive function
/*function RecursiveFunction(num) {
    if (num <= 0) {
        return 0;
    } else {
        return num + RecursiveFunction(num - 1);
    }
}
console.log(RecursiveFunction(5)); // Output: 15
*/

/*function logRecursion(num) {
    console.log(num);
    if (num > 0) {
        logRecursion(num - 1);
    }
    else {
        console.log("Recursion ends here");
    }   
    console.log(num);
    return num;             

}
logRecursion(3); 
*/

