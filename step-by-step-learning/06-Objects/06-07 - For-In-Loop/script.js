/**
 *   **************   For-In Loop ********************************
 *   
 *      **)  This loop is used mainly for object
 *      **)   Each Iteration return key of Object.
 */

let car = {
    color : "red",
    model : "2024",
    company : "Honda"
}
console.log(car)

for(let key  in car){
    console.log(`${key} and value : ${car[key]}`)
}