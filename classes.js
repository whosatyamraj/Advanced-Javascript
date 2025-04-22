/*class ClassName{
    constructor(prop1,prop2){
        this.prop1=prop1;
        this.prop2 = prop2
    }
}
let obj=new ClassName("arg1","arg2");a
*/

/*class Dog{
    constructor(dogName,weight,color,breed){
        this.dogName=dogName;
        this.weight=weight;
        this.color=color;
        this.brees=breed;

    }
}
let dog=new dog("JS",2.4,"brown","chihuahua");
*/



// class name first letter should be capital
/*class Person {
constructor(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
}
*/

/*constructor(firstname,lastname="doe"){
    this.firstname=firstname;
    this.lastname=lastname;
}
    */

// create a js function to display the loacal date and time using the date method 

/*function displayDateTime(){
    let date = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let formattedDate = date.toLocaleDateString('en-US', options);
    console.log(formattedDate);
}*/

//METHODS
// Function on an object is called a methods. When define the methods , we don't use the function keyword. we directly use the name of the method.

// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi there!",this.firstname);
        
//     }
//     compliment(){
//         console.log("you are doing great",this.firstname);
//     }
// }

// let compliment = new Person("Harry","Hat");
// console.log(compliment);
// //output: Person { firstname: 'Harry', lastname: 'Hat' }
// greet.call(compliment);
// //output: hi there! Harry


//PROPERTIES
// Properties are the values associated with an object. In JavaScript, an object is a standalone entity, with properties and type. It is similar to real-life objects, like a car, which has properties like weight and color, and methods like start and stop.

// class Person {
//     #firstname; // private property
//     #lastname; // private property
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
//     let p = new Person("Marry","saga");
//     console.log(p.#firstname); // output: Marry
//     console.log(p.#lastname); // output: saga

//     constructor(firstname,lastname){
//         if(firstname.startswith("M")){
//             this.#firstname=firstname;
//         }else{
//             this.#firstname="M"+firstname;      
        
//         }
//         this.#lastname=lastname;
//     }
//     let p = new Person("Marry","saga");
//     console.log(p.#firstname); // output: Marry
//     console.log(p.#lastname); // output: saga



// class Person {
//     #firstname; // private property
//     #lastname; // private property
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(val){
//         this.#firstname=value;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(value){
//         this.#lastname=value;
//     }
// }   
// let p = new Person("Marria","saga");
// console.log(p.firstname); // output: Marria
// console.log(p.lastname); // output: saga
// p.firstname="Marrie";
// console.log(p.firstname); // output: Marrie  
// console.log(p.lastname); // output: saga
// p.lastname="saga";

