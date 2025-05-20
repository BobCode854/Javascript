/**
 *   **************   Object Introduction  ********************************
 * 
 * 
 */

let car = {
    color : "red",
    model : "2024",
    company : "Honda"
}

// Read the value 

console.log(car)
console.log(car.color);
console.log(car["model"])

// Update the Object
car.size = "XL";
console.log(car)
car["seat"]=6;
console.log(car)

//Modify the object values
car.company = "Audi";
console.log(car)
car["company"] = "Mercedes";
console.log(car)

// delete property of object

delete car.color  // delete will return true or false.
console.log(car)

/**
 *   Performing some operation on person object 
 */

let person  ={
    ageCalculate : function(birthYear = 2008){
        return 2025-birthYear;
    }
}

console.log(`The age of Mahesh is ${person.ageCalculate(2003)}`);

/**
 *     **)   use of this keyword .
 *     **)   Function which are called in context of object is called method . getPersonInformation() is a method.
 */

let person1 = {
    name : "Karan",
    age : 28,
    salary : "1.23 lakh",
    state : "Jharkhand",
    city : "Ranchi",

    getPersonInformation : function(){
        return` ${person1.name} is from state :  ${person1.state} and city : ${person1.city}`;
    }
}

  console.log(person1.getPersonInformation());