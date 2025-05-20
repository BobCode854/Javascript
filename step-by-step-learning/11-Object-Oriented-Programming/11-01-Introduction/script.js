console.log("hello")

/**
 *     prototyping is a way where we can add any method 
 *     and state of variable as a utility and it will be available
 *     to all the object created by the class.
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
}

let carInstance = new Car("2022","red");
console.log(carInstance)

// If you want to add a method in all car instances , we can use prototype way which is preferrable.

Car.prototype.breakMethod = function(){
    console.log("Break applied")
}

carInstance.breakMethod()

console.log(Car.prototype)  // It will give all the methods and variable are availble or we can apply on car

// Also If we will have instance of car then we can do

console.log(carInstance.__proto__)


/**
 *                 *** Important points ***
 * =======================================
 * 
 *     **)  classes are not hoisted
 *     **)   classes are executed in strict mode.
 * 
 * 
 *  */ 

