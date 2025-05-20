/**
 *   **************   Spread Operator ********************************
 *   
 */

let arr = [2,3,4,5,6];

let arrRef = arr ;  // This is pass by reference . arrRef or arr any object will change 
                              //  Other will be affected.

console.log(arr)
console.log(arrRef)

arrRef.shift();  // this will remove the 1st element
console.log(arrRef)
console.log(arr)

// pass by value 
console.log("Pass  by value : ")

let passByValue = [...arr];  // [] for array {} for object
console.log(arr)
console.log(passByValue)

console.log("After change : ")
passByValue.shift();
console.log(arr)  // this will not change
console.log(passByValue) // this will change

let person={
    name : "karan",
    age : 20
}
let anotherPerson = {...person}