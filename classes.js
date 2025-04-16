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

//METHODS

class Person {
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log("hi there!",this.firstname);
        
    }
    }
