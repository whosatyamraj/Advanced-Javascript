// Create a function that takes two parameters,adds the parameter together and return the result 
/*function addNumbers(a, b) {
    return a + b;
}   
// Test the function with different inputs
console.log(addNumbers(2, 3)); // Output: 5 
console.log(addNumbers(-1, 1)); // Output: 0
console.log(addNumbers(0, 0)); // Output:
*/

//set up two diffrent variables and assign them to two different numbers
/*let num1 = 5;           
let num2 = 10;  
*/

//Create a second call to the function using two more numbers as arguments sent to the function
/*console.log(addNumbers(num1, num2)); // Output: 15
console.log(addNumbers(7, 8)); // Output: 15
*/

// Create an array of descriptive words
/*let words = ["happy", "sad", "angry", "excited", "bored"];

// Create a function that contains a prompt asking the user for a name
/*function getName() {
    let name = prompt("Please enter your name:");
    return name;
}*/


// Select a random value from the array using Math.random
/*function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}*/

//Outut into the console the prompt value and the randomly selected array value 
/*function displayMessage() {
    let name = getName();
    let randomWord = getRandomWord();
    console.log("Hello " + name + "! You are feeling " + randomWord + ".");
}*/

// Invoke the function 
/*displayMessage();*/

// Set up two variables containing number values
/*let num1 = 5;

//Set up a varaiables to hold an operator, either + or - 
/*let operator = "+";

//Create a function that retrives the two values and the operator string value within its parameters Use those values with a condition to check if the operator is + or -, and add or subtarct the values accordingly
/*function calculate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else {
        return "Invalid operator";
    }
}*/


// within console.log, call the function and pass in the two numbers and the operator as arguments to the function
/*console.log(calculate(num1, 3, operator)); // Output: 8
console.log(calculate(num1, 3, "-")); // Output: 2  


// update the operator value to the operator type - either plus or minus and call the function again with the new operator value
/*operator = "-";
console.log(calculate(num1, 3, operator)); // Output: 2
console.log(calculate(num1, 3, "+")); // Output: 8
*/

//Practice exercise 1.4

//Set up an empty array to store the values that will be calculated within the loop
/*let results = []; 

//Create a loop that runs 10 times, incrementing by 1 each time, creating two 
values each iteration. For the first value, multiply the value of the loop count 
by 5. For the second value, multiply the value of the loop counter by itself
/*for (let i = 1; i <= 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;
    results.push({ value1: value1, value2: value2 });
}*/
//Output the results of the loop to the console

/*console.log(results);*/


//Create a function that returns the value of the two parameters passed into the function when it is called. Add the values together, returning the result
/*function addNumbers(a, b) {
    return a + b;
}*/

//Within the loop, call the calculation function, passing in the two values as arguments into the function and storing the returned result in a response variable.
/*for (let i = 1; i <= 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;
    let response = addNumbers(value1, value2);
    console.log("The sum of " + value1 + " and " + value2 + " is: " + response);
}*/

//Still within the loop, push the result values into the array as it iterates through the loop.
/*for (let i = 1; i <= 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;
    let response = addNumbers(value1, value2);
    results.push(response);
}*/


//. After the loop is complete, output the value of the array into the console.
/*console.log(results);*/

//You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console
/*console.log(results);*/


//Practice exercise 1.5

// Use IIFE to create a few immediately invoked functions and observe how the scope is affected.
//Create a variable value with let and assign a string value of 1000 to it.
/*let value = "1000"; */

   


//2. Create an IIFE function and within this function scope assign a new value to a variable of the same name. Within the function, print the local value to the console.
/*function() {
    let value = "2000"; // Local variable with the same name
    console.log("Inside IIFE: " + value); // Prints the local value
}();


// 3. Create an IIFE expression, assigning it to a new result variable, and assign a new value to a variable of the same name within this scope. Return this local value to the result variable and invoke the function. Print the result variable, along with the variable name you've been using: what value does it contain now?Function scope is important to understand here.  
/*let result = (function() {
    let value = "3000"; // Local variable with the same name
    return value; // Return the local value
})();
console.log("Result: " + result); // Prints the local value

//4. Lastly, create an anonymous function that has a parameter. Add logic that 
//will assign a passed-in value to the same variable name as the other steps,and print it as part of a string sentence. Invoke the function and pass in your desired value within the rounded brackets
    anonymousFunction(value) {
    let value = "4000"; // Local variable with the same name    
    hhis.value = value; // Assign the passed-in value to the local variable 
    console.log("Anonymous function: " + value); // Prints the local value
})();
print("Anonymous function: " + value); // Prints the local value





         