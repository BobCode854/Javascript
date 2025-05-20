/**
 *   **************   Function Declaration and Expression   ********************************
 *     
 *         **) Normal way of declaring a function provide you hoisting feature.
 *         **)  Hoisting :  You can call the function before it's defined in the code.
 * 
 * 
 * 
 *              
 * 2. Splitting Logic and Execution
            
        If you're writing modular or structured code, 
    you might want to declare all logic at the bottom and keep execution flow at the top.


        // Execution flow
        init();
        loginUser();

        // Logic (hoisted)
        function init() { console.log("Initializing..."); }
        function loginUser() { console.log("Logging in..."); }
 *  
 */

  //  Function Declaration

function sayHello() {
    console.log("Hello!");
  }
  sayHello();

greet(); // ✅ Works!

function greet() {
  console.log("Hi!");
}

// Function expression

const sayHi = function() {
    console.log("Hi!");
  };
  sayHi();

  sayByee(); // ❌ Error: Cannot access 'sayHi' before initialization

const sayByee = function() {
  console.log("Hi!");
};
