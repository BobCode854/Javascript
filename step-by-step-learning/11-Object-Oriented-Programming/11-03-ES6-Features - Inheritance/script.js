console.log("hello")

/**
 *    ES6 Features - Inheritance
 * ===========================
 *     **) extends keyword for extending the class
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

class Bike extends Car{

}

let bikeInstance = new Bike("2023","black");
console.log(bikeInstance)

class SuperBike extends Car{
    constructor(model,color,engine){
        super(model,color) // we are setting this property through parent as it is already define by parent
        this.engine = engine;

    }
    superBikeMethod(){
        console.log("Super Bike Method called")
    }
}

let superBikeInstance = new SuperBike("2022","Yellow","220 cc");
console.log(superBikeInstance.__proto__)

