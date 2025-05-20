/**
 *   **************   Anonymous Function   ********************************
 * 
 *   **)  An anonymous function is a function without a name.
 *   
                *   ❌ Not allowed:

                function () {
                  console.log("Hi");
                } 

                // ❌ SyntaxError: Function statements require a function name
                
  *              **) But they are valid when used as a value, like:


                ✅ Common Use Cases

                1. As a Function Expression

                            const greet = function() {
                              console.log("Hello!");
                            };
                          
                            greet(); // Output: Hello!

                            // Here, the function is anonymous, but it's assigned to the variable greet.


                   2. As a Callback Function

                              setTimeout(function() {
                                console.log("Timer done!");
                              }, 1000);

                          //This is an anonymous function passed directly as an argument 
                          //  to another function.


                 3. Inside Array Methods

                              let numbers = [1, 2, 3];
                              numbers.forEach(function(num) {
                                console.log(num);
                              });
                          
                           //    Here, the anonymous function is executed on each item in the array.
 * 
 *  
 */

const greet = function(){
  console.log("Hi!!!!!!!!!")
}
greet();

setTimeout(function(){
  console.log("Hiii")
},1000);

let numbers = [1,2,4];

numbers.forEach(n=>
{
  console.log(n);   // one way
});

numbers.forEach(function(n)
{
  console.log(n);  //2nd way
});