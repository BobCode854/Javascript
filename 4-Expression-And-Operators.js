/*
 ------------------Expression and Operators------------------------------
   
   5 + 20 = 25

   5 and 20 is an Operand
   + is an operator
   and entirely it is an expression

   Types of Operators
   ------------------------
   -) Assignment Operator
   -) Arithmetic Operator
   -) Comparison Operator
   -) Logical Operator
   -) String Operator
   -) Conditional Operator

   ** Assignment Operator (=)
   --------------------------------------------

    -) An Assignment operator assigns value to left hand side operator.
    -) It assign that value to left hand side operator which is present in right hand side
    -) It assigns with the help of = operator.
    -) Example
     /*
      var x = 5;
      var y = 5;
     /

   ** Arithmetic operator ( +, -, *, %, /, ++, --, -,+,**)
    -----------------------------------
    -) An arithmetic operator takes numerical values either literals or variables 
    -) as operand and return a single numerical value based on the operator operation.
                       
                        + -> Addition
                        - -> Subtraction
                        * -> Multiplication
                        % -> Modulus
                        / -> Division
                       ++ -> Increment
                       -- -> Decrement
                       -  -> Unary Negation
                       +  -> Unary plus
                       ** -> Exponential Operator
    -) Example
     /*
      console.log(3+3) //6
      console.log(5-4) //1
      console.log(20*2) //40
      console.log(20/2) //10
      console.log(20%2); //0
       x=3
      console.log( ++x ) //4
      console.log(x++) //3 and Increase the value after evaluation
      console.log(--x) //2
      console.log(x--) //3 and decrease the value after evaluation
      console.log(-x) // -3
      console.log(+x) // 3 
      console.log(2 ** 3) // 8


     /

    ** Comparison Operator (== , !=, === , !== ,> , >=, <, <=, )
    -------------------------------
    -) A comparison operator compares its operands and returns a logical value 
       based on whether the comparison is true. 

    -) The operands can be numerical, string, logical, or object values.
    -) Strings are compared based on standard lexicographical ordering, using Unicode values
    -) Example
    /*
           3 == '3'   //true
           2!= "3"    //true
           3 !== '3'  //true
           3 === '3'  //false
           "12"> 2    //true
           "12">=3    //true
            "2"<12    //true
            2<="5"    //true
     /
   ** Logical Operator ( &&, ||, !)
   -------------------------------------------
   -)Logical operators are typically used with Boolean (logical) values; when they are, 
     they return a Boolean value.

   -) However, the && and || operators actually return the value of one of the specified 
      operands, so if these operators are used with non-Boolean values, they may return
       a non-Boolean value.

   -) Example
    /*

       LOGICAL AND ( && ) Operator
       .............................................................
         const a1 =  true && true; // t && t returns true
         const a2 =  true && false; // t && f returns false
         const a3 = false && true; // f && t returns false
         const a4 = false && (3 === 4); // f && f returns false
         const a5 = 'Cat' && 'Dog'; // t && t returns Dog
         const a6 = false && 'Cat'; // f && t returns false
         const a7 = 'Cat' && false; // t && f returns false

      LOGICAL OR ( || ) Operator
      .............................................................
         const o1 =  true || true; // t || t returns true
         const o2 = false || true; // f || t returns true
         const o3 =  true || false; // t || f returns true
         const o4 = false || (3 === 4); // f || f returns false
         const o5 = 'Cat' || 'Dog'; // t || t returns Cat
         const o6 = false || 'Cat'; // f || t returns Cat
         const o7 = 'Cat' || false; // t || f returns Cat

      LOGICAL NOT (!) Operator
      ..............................................................
         const n1 = !true; // !t returns false
         const n2 = !false; // !f returns true
         const n3 = !'Cat'; // !t returns false

    /

    ** String Operator 
    -----------------------------------------
      -)In addition to the comparison operators, 
        which can be used on string values, 
        the concatenation operator (+) concatenates two string values together,
        returning another string that is the union of the two operand strings.

      -) Example
       /*

         console.log('my ' + 'string');   //"my string"

       /
    
   ** Conditional (Ternary) Operator
   -------------------------------------------
   -) The conditional operator is the only JavaScript operator that takes three operands. 
      The operator can have one of two values based on a condition. The syntax is: 

       condition ? val1 : val2

   -) If condition is true, the operator has the value of val1. 
      Otherwise it has the value of val2. 
      You can use the conditional operator anywhere you would use a standard operator.

      Example
      /*

      const status = age >= 18 ? 'adult' : 'minor';

      /
*/

var x = 5;
var y = 5;

console.log("whether x and y are equal or not : " + (x === y));

//Arithmetic operator

console.log(3 + 3);
console.log(5 - 4);
console.log(20 * 2);
console.log(20 / 2);
console.log(20 % 2);

// Incrementing and decrementing operator
console.log("---------Dealing with PostFix Increment  Operator--------");
var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);
console.log("---------Dealing with PostFix Decrement  Operator--------");
var num = 15;
var newNum = num--;
console.log(num);
console.log(newNum);

console.log("---------Dealing with PreFIx Increment  Operator--------");
var num = 15;
var newNum = ++num;
console.log(num);
console.log(newNum);

console.log("---------Dealing with PreFix Decrement  Operator--------");
var num = 15;
var newNum = --num;
console.log(num);
console.log(newNum);

// Comparsion Operator
console.log("------Dealing with comparison operator--------------------");
var a = 10;
var b = 30;
//EQUAL (==)
console.log(a == b);
//Not EQUAL(!=)
console.log(a != b);
//GREATER THAN (>)
console.log(a > b);
//GREATER THAN EQUAL TO (>=)
console.log(a >= b);
//LESS THAN (<)
console.log(a < b);
//LESS THAN EQUAL TO (<=)
console.log(a <= b);

console.log("-------------Program to swap 2 numbers : --------------");
var a = 5;
var b = 10;
var c;
var c = a;
var a = b;
var b = c;
console.log("New Value of a after swap : ", a);
console.log("New Value of b after swap : ", b);

console.log(
  "-------------Program to swap 2 numbers without 3rd Variable: --------------"
);
var a = 5;
var b = 10;
b = b - a;
a = a + b;
console.log("New Value of a after swap : ", a);
console.log("New Value of b after swap : ", b);

console.log("-------- Difference between == and === operator ");
var a = 5;
var b = "5";
console.log("a==b : ", a == b);
console.log("a===b : ", a === b);
