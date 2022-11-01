/*
DataTypes in JavaScript
--------------------------------

Six DataTypes  that are primitives
*****************************************

1) undefined : typeof instance === "undefined"
2) Boolean   : typeof instance === "boolean"
3) Number    : typeof instance === "number"
4) String    : typeof instance === "string"
5) BigInt    : typeof instance === "bigint" (Comes in Ecmascript)
6) Symbol    : typeof instance === "symbol" (Comes in Ecmascript)

*/


var myName="Karan Raj Sinha";
console.log("Name : ",myName,"\nType of Name: "+ typeof(myName))

var myAge=12
console.log("Age : ",myAge,"\nType of Age : "+ typeof(myAge))

var isTrue=14>12
console.log("Condition : ",isTrue,"\nType of condition : ",typeof(isTrue))

var isTrue2=true
console.log("Condition 2: ",isTrue2,"\nType of condition 2 : ",typeof(isTrue2))
console.log(isTrue2)


//Challenges
console.log("---------------------------------------Challange Answers-----------------------------------------")
var a=10+"20";  
console.log("a",a," type of a : ",typeof(a))  //1020 and string

var a1="10"+20;
console.log("a1",a1," type of a1 : ",typeof(a1)) //1020 and string

// In Number With String  (+) works as a concatenation

var b=9-"5";
console.log("b",b," type of b : ",typeof(b))  //4 and number

var b1="9"-5;
console.log("b1",b1," type of b1 : ",typeof(b1)) //4 and number

//In Number with String (-) works as a Number behaviour

var c="Java"+"Script";
console.log("c",c," type of c : ",typeof(c)) //Javascript and string

var c1="Java         "+" Script";
console.log("c1",c1," type of c1 : ",typeof(c1)) //Javascript and string

//  In String  (+) works as string concatenation

var d=" "+ " "
console.log("d",d," type of d : ",typeof(d)) //   and string

var e= " "+0
console.log("e",e," type of e: ",typeof(e)) // 0 and string

var f="vinod" - "thapa";
console.log("f",f," type of f : ",typeof(f)) //NaN and Number


// If you are performing addition , subtraction, multiplication, division and Modulos operation with boolean then It behaves like number only
// where true=1 and false =0

var g=true+true
console.log("g",g," type of g : ",typeof(g)) //2 and number

var h=true+false
console.log("h",h," type of h : ",typeof(h)) //1 and number

var i=false+true
console.log("i",i," type of i : ",typeof(i)) //1 and number

var j=false - true
console.log("j",j," type of j : ",typeof(j)) //-1 and number

var k =false+false
console.log("k",k," type of k : ",typeof(k)) //0 and number

var l=false-false
console.log("l",l," type of l : ",typeof(l)); //0 and number

var m=false-false+true-true
console.log("m : ",m," type of m : ",typeof(m)); //0 and number

var n=false*false
console.log("n : ",n ," type of n: ",typeof(n)); //0 and number

var o=true*true
console.log("o : ",o ," type of o: ",typeof(o)); //1 and number

var p=true*false
console.log("p : ",p," type of p: ",typeof(p)); //0 and number



// NaN
console.log("-----------Checking For NaN scenario ----------------------")
var phoneNumber=7979732450;
var data="Karan";

console.log("PhoneNumber : ",phoneNumber, "is PhoneNumber Not a number :", isNaN(phoneNumber));
console.log("Data  :",data, "Is Data Not a Number ",isNaN(data))




console.log("------------Challenge Question in NaN-----------------------")
console.log("typeof(NaN)  :",typeof(NaN))
console.log("NaN===NaN :",NaN===NaN)
console.log("Number.NaN === NaN",Number.NaN === NaN)
console.log("Number.NaN === Number.NaN",Number.NaN === Number.NaN)
console.log("isNaN(NaN) :",isNaN(NaN))
console.log("isNaN(Number.NaN) : ",isNaN(Number.NaN))
console.log("Number.isNaN(NaN) : ",Number.isNaN(NaN))




/*

Ques 1 ) Difference between null and undefined
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Undefined is a variable that refers to something that doesn't exist, 
and the variable isn't defined to be anything. Whereas

Null is a variable that is defined but is missing a value

Ques 2 ) typeof check
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  typeof(null) = object
  typeof(undefined)= undefined

Ques 3) null == undefined
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Both undefined and null are falsy by default. 
So == returns true.

Ques 4 ) null === undefined
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

when we use the strict equality operator (===) 
which checks both type and value, since undefined and null 
are of different types (from the typeof Operator section), 
the strict equality operator returns false 

Ques 5 ) Arithmetic operation with null and undefined
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Using Arithmetic, undefined will result in  NaN
whereas
null is converted to 0,

Example : 
undefined +1 = NaN
null+1=1


Ques 5 : How to check default value of null and defined
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Using conditional logic

Example
var a=null;
var b;

!a =(Not of a)= true(It will return true which means default value is false)
!b= (Not of b)= true(It will return true which means default value is false)

Also can be check with the If-else condition

if(a){

}
else{

}


Ques 6 . Why Null is an Object
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

As it then indicates that null must be an object, which is not true. 
In fact, null is one of the primitive values in JavaScript.

It is actually a bug in the language and unfortunately can’t be fixed that easily, 
as it will break the existing codebase.

However, there is actually one logical explanation behind why null is an object in javascript.
................................................................................................
In the initial version of JavaScript, values were stored in 32 bit units. 
The first 3 bits represented the data type tag followed by the remaining bits 
that represented the value.

.) For all objects it was 000 as the type tag bits
.) Null simply meant nothing or void and was represented by all 0’s.
.) Hence all its 32 bits were 0’s. So whenever the JavaScrit interpreter reads null, 
   it considers the first 3 bits as type “object”. 
   That is why typeof null returns “object”.


7. What is NaN
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

-) NaN is a property of the global object.
-) In other words, it is a variable in global scope.
-) The initial value of NaN is Not-A-Number .



There are five different types of operations that return NaN:

(Condition 1 ) Failed number conversion 
***************************************
(e.g. explicit ones like parseInt("blabla"), Number(undefined), or implicit ones like Math.abs(undefined))

(Condition 2) Math operation where the result is not a real number 
********************************************************************
(e.g. Math.sqrt(-1))

(Condition 3) Indeterminate form
****************************************** 
(e.g. 0 * Infinity, 1 ** Infinity, Infinity / Infinity, Infinity - Infinity)

(Condition 4)A method or expression whose operand is or gets coerced to NaN 
******************************************************************************
(e.g. 7 ** NaN, 7 * "blabla") — this means NaN is contagious

(Condition 5) Other cases where an invalid value is to be represented as a number 
*********************************************************************************
(e.g. an invalid Date new Date("blabla").getTime(), "".charCodeAt(1))


Ques 8 : Difference between isNaN() and Number.isNaN() :
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

IsNaN() will return true if the value is currently NaN, 
or if it is going to be NaN after it is coerced to a number, 

while the Number.isNaN() will return true only if the value is currently NaN:

For Example : 
---------------------
isNaN("hello world"); // true 
Number.isNaN("hello world"); // false (hello world is currently a string which is Not Not-a-number currently)


Ques 9 : Some operations on NaN
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
( NaN == NaN )        // false
( NaN === NaN )       // false
Number.NaN == NaN      //false
Number.NaN === NaN      // false
Number.NaN == Number.NaN // false
Number.NaN === Number.NaN // false

 isNaN(NaN)           // true
 isNaN(Number.NaN);   // true
 Number.isNaN(NaN);   // true
 isNaN('karan')       // true
 Number.isNaN('karan')// false

 const arr = [2, 4, NaN, 12];
  arr.indexOf(NaN); // -1
  arr.includes(NaN); // true



*/