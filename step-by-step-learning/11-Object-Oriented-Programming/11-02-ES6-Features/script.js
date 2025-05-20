console.log("hello")

/**
 *    ES6 Features
 * ===================
 *    **) Getter and Setter methods
 *    **)  It will access as property of object
 * 
 *    **) static method present on class level
 * 
 *  */

class Car {
    constructor(model,color){
        this.model = model
        this.color = color
    }
    steering(){
        console.log("Steering on the right hand side")
    }
    get _sterring(){
        console.log("Accessing Sterring as a getter property")
    }
    set _changeColor(color){
        this.color = color;
        console.log("Color of car changes to : ",color)
    }

    get description(){
   return `Congrats ! You have choosed  ${this.model} car in ${this.color} color`
    }
}

let carInstance = new Car("2022","red");
console.log(carInstance)

carInstance.steering();  // accessing  as a function
carInstance._sterring;   // accessing as a property
carInstance._changeColor = "red";   // setting as a property
carInstance._changeColor;    // accessing the method as a property
console.log(carInstance.description)


// Static Methods
Car.breakMethod= function(){
    console.log("Break applied");
}

carInstance.breakMethod(); 
// this will give error because breakMethod is a static method accessed by
//  class not by object

Car.breakMethod();
