/*
------------------- Function ------------------------------------

1) Function Definition
 ------------------------------------
-) A function definition (also called a function declaration, or function statement) 
   consists of the function keyword, followed by:

       **) The name of the function.

       **) A list of parameters to the function, enclosed in 
           parentheses and separated  by commas.

       **) The JavaScript statements that define the function, 
           enclosed in curly brackets, {  }.

-) The function in function declaration can be accessed before and after the function definition.

-) Parameters are essentially passed to functions by value — so if the 
    code within the body of a function assigns a completely new value to 
    a parameter that was passed to the function, the change is not reflected globally 
    or in the code which called that function.

-) When you pass an object as a parameter, if the function changes the object's properties,
   that change is visible outside the function, as shown in the following example:

   /*
                function myFunc(theObject) {
                theObject.make = 'Toyota';
                }

                const mycar = {
                make: 'Honda',
                model: 'Accord',
                year: 1998,
                };

                // x gets the value "Honda"
                const x = mycar.make;

                // the make property is changed by the function
                myFunc(mycar);
                // y gets the value "Toyota"
                const y = mycar.make;

   /
-) When you pass an array as a parameter, if the function changes any of the array's values,
   that change is visible outside the function



2) Function Expression
------------------------------------------------------------------------
 -) While the function declaration above is syntactically a statement, 
    functions can also be created by a function expression.

 -) Such a function can be anonymous; it does not have to have a name. 
    For example, the function square could have been defined as:

    /**
             const square = function (number) {
                     return number * number;
                    }

            const x = square(4); // x gets the value 16

     /

 -) However, a name can be provided with a function expression. 
   Providing a name allows the function to refer to itself, 
   and also makes it easier to identify the function in a debugger's stack traces:

   /**
             const factorial = function fac(n) {
                return n < 2 ? 1 : n * fac(n - 1);
                }

             console.log(factorial(3))

   /

   -) The function in function expression can be accessed only after the function definition.


 Function Declaration VS Function Expression
 -------------------------------------------------------

 -) A function declaration must have a function name.
    whereas 
    A function Expression is similar to a function declaration 
    without the function name.

-) Function declaration does not require a variable assignment.
    whereas
    Function expressions can be stored in a variable assignment.

-) These are executed before any other code.
   whereas
   Function expressions load and execute only when the program 
   interpreter reaches the line of code.

-) Function declarations are hoisted
   whereas
   Function expressions are not hoisted

   


3) Calling Function
-------------------------------------------------------------------
 -) Defining a function does not execute it. 
    Defining it names the function and specifies what to do when the function is called.

 -) Calling the function actually performs the specified actions with the indicated 
    parameters. For example, if you define the function square, you could call it as follows:


      square(5);

 -) The preceding statement calls the function with an argument of 5. 
    The function executes its statements and returns the value 25.

 -) Functions must be in scope when they are called, but the function declaration 
    can be hoisted (appear below the call in the code), as in this example:

    Example  
     
    /*
                    console.log(square(5)); //It will return 25 in response
                           
                    // …
                            function square(n) {
                            return n * n;
                            }

                            

    /
 -) This works only when defining the function using the above syntax 
   (i.e., function funcName(){}). The code below will not work.
    This means that function hoisting only works with function declarations—not 
    with function expressions.

    Example : 

    /*
       console.log(square); // ReferenceError: Cannot access 'square' before initialization

            const square = function (n) {
            return n * n;
            }
    /


3) Function Parameter
4) Function Arguments
5) Return Keyword
6) Anonymous Function
7) 

*/

console.log("---------Checking for function hoisting with function declaration way---------")
console.log("Sqaure of 5 is :",square(5))
function square(num){
    return num*num;
}

console.log(square);

console.log("---------Checking for function hoisting with function expression way---------")

//console.log("Sqaure of 5 is :",square2(5)) // this will cause a problem because the calling
                                           //fuction is not a function declaration but function expression  

const square2 = function (n) {
    return n * n;
  }

console.log("------------Dealing with  normal  function---------")
function sum(){
    var fNum=10;
    var sNum=20;
    return fNum+sNum;


}
console.log(sum());   

console.log("--------------------Dealing with function argument and parameter--------")

function sum1(a,b){
    return a+b;
}
console.log("Sum response with function argument and parameter: ",sum1(10,12));
console.log("--------------------Dealing with function expression------------")
//in function expression return is mandatory

function sum2(a,b)
{
    return a+b;
}

var sumresponse=sum2(20,30);
console.log("Sum response with  function expression : ",sumresponse)

console.log("\n\n--------------------Dealing with Anonymous Function------------")
var sumresponse=function(a,b){
    return a+b;
}

console.log("Sum response with anonymous function : ",sumresponse(200,200))

console.log("\n\n-------------Dealing with Anonymous Function with function expression------------")

var sumresult=function(a,b){
    return a+b;
}
var response=sumresult(100,200);
console.log("Sum response with anonymous function and expression : ",response)

console.log("\n\n============== Function Expression ================================")
const checkSum=function adding(a,b){
return a+b;
}
console.log("response from the function expression",checkSum(2,3));

//here adding is the name of the function... this will help in debugging as well as a
//situation where it can refer to itself.

const factorial = function fac(n) {
    debugger;
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
  console.log("Factorial by function calling itself with function expression ",factorial(3))

/*
  # Nested functions and closures
  -----------------------------------------------------
  -) You may nest a function within another function. 
     The nested (inner) function is private to its containing (outer) function.

  -) It also forms a closure. A closure is an expression (most commonly, a function) 
     that can have free variables together with an environment that binds those variables

  -) In other words, the inner function contains the scope of the outer function.

  Summary
  -------------

  -) The inner function can be accessed only from statements in the outer function.

  -) The inner function forms a closure: the inner function can use the arguments 
     and variables of the outer function, while the outer function cannot use the 
     arguments and variables of the inner function.

     Example
     -----------

     /*

     function addSquares(a, b) 
     {
                function square(x) 
                {
                    return x * x;
                }
       return square(a) + square(b);
     }

            const a = addSquares(2, 3); // returns 13
            const b = addSquares(3, 4); // returns 25
            const c = addSquares(4, 5); // returns 41

     /
 
*/
function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  const a = addSquares(2, 3); // returns 13
  const b = addSquares(3, 4); // returns 25
  const c = addSquares(4, 5); // returns 41

  console.log("Sum of square of 2 and 3 is : ",a);
  console.log("Sum of square of 3 and 4 is : ",b);
  console.log("Sum of square of 4 and 5 is : ",c);

  function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(10)); // returns 20 instead of 10

/*
                      # Function parameters
 -------------------------------------------------------------------------------------------
 -) There are two special kinds of parameter syntax: 
      a) default parameters 
      b)  rest parameters

      a) Default Parameters
  -----------------------------------------
 -)  If no value is provided for paramter, its value would be undefined.

 -) COnsider a situation where in multiplication there is no default value for second param

                function multiply(a, b) {
                  b = typeof b !== 'undefined' ?  b : 1;
                  return a * b;
                }

            multiply(5); // 5

            so we have to provide check as we are doing in above example

            but this can be solved with default param as mentioned below.

            function multiply(a, b = 1) {
                return a * b;
                }

            multiply(5); // 5


     b) Rest Parameters
     -----------------------
     -) The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
     
     Quick Points
     -----------------

     -) A function definition can have only one ...restParam.
            foo(...one, ...wrong, ...wrong) => Wrong

     -) The rest parameter must be the last parameter in the function definition.
            foo(...wrong, arg2, arg3) => Wrong

     -) foo(arg1, arg2, ...correct)   => Correct
         
   
*/
function multiply(a, b = 1) {
    return a * b;
  }

  multiply(5, 2); // 10
  multiply(5); // 5
  multiply(5, undefined); // 5

function f(a, b = () => console.log(a)) {
    var a = 1;
    b();
  }
  
  f(); // undefined
  f(5); // 5

 /*******      Rest Param example  **********/
 function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
  
  const arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]


  function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a,"data type is : ",typeof a); //a , one data type is :  string
    console.log("b", b,"data type is : ",typeof b); // b, two data type is :  string
    console.log("manyMoreArgs", manyMoreArgs,"data type is : ",typeof manyMoreArgs);
    // manyMoreArgs ['three', 'four', 'five', 'six'] data type is :  object
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  

  /*
                            # Arrow Function#
    ---------------------------------------------------------------------------------
    -) Arrow functions are always anonymous.

  */

    const gases = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
      ];
      
      const a2 = gases.map(function(s) { return s.length });
      
      console.log(a2); // logs [8, 6, 7, 9]
      
      const a3 = gases.map((s) => s.length);
      
      console.log(a3); // logs [8, 6, 7, 9]


      //Difference between function parameter vs function arguments
      // Function parameters are the name listed in the function defintiion
      //function arguments are the real value passed to function.


      function abc(a,b){ //here a and b are function parameter
          return a+b;
      }
      abc(10,20) ; //  function argument
