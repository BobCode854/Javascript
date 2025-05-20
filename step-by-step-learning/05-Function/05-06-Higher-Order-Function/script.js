/**
 *   **************   Higher Order Function   ********************************
 * 
 *    **) Type 1  : Passing function as an argument
 */

let upperCase = function(str){
    return str.toUpperCase();
}
let lowerCase = function(str){
  return str.toLowercase();
}

let transform = function(str, fun){
  return fun(str);
}

console.log(transform("Hello Karan",upperCase));


/**
 *    Type 2  : Function  returing other function
 */

let compliment = function(msg){
   return function(name){
    console.log(` ${msg} ${name}`);
   }
}
compliment("Hello Guys !")("My Name is Karan"); // 2nd argument is necessary , else not execute