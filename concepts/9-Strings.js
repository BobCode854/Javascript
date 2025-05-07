/**
 * ************  String In Js *******************
 * Javascript strings are used for storing and manipulating text.
 * you can use single or double quotes
 * 
 * Strings can be created as 
 * --------------------------------
 * 1) Primitive
 * 2) String Literals
 * 3) Objects
 * 4) Using String() constructor.
 * 
 */

console.log("------Dealing with String Creation------------------")
let myName="Karan Raj Sinha";
let myFirstName=new String('karan');
console.log(myName)
console.log(myFirstName)

/**
 *    Some of the String Operations
 * ------------------------------------------
 * 1) Escape Character
 * 2) Finding a String in a String
 * 3) Searching for a String in a String
 * 4) Extracting string parts
 * 5) Replacing  string contents
 * 6) Other useful methods
 */

// If you want to pass a text in double quotes inside string you should use 
// ***** ESCAPE CHARACTER ******
console.log("----------Dealing with the ESCAPE CHARACTER -----------")
myName="Karan Raj Sinha";
let data="we are one of the \"BADEST PERSON\" in the planet"
console.log("Printing text in double Quotes inside string with ESCAPE CHARACTER: ",data)

console.log("\n---------or we can do with single quotes without ESCAPE CHARACTER-----")
let data2='we are one of the "BADEST PERSON" in the planet';
console.log("Printing text in double Quotes inside string without ESCAPE CHARACTER: ",data)

// ********* Finding a string inside a string **********
// -----IndexOf() method
myName="Karan Raj Sinha";
// return -1 If it does not find data
// return index If it find the data.
console.log("-----Dealing with Text search in String using \"indexOf()\" method")
let str="Hi Karan How are you. you  are from Daltonganj right ?";
console.log("Index Of gives first occurence of searched text : ",str.indexOf("are"));
console.log("Index Of  with 2nd argument to find element after the first occurence : ",str.indexOf("are",14));


/* lastIndexOf() method
   
   -) The lastIndexOf() method, given one argument: a substring to search for, 
      searches the entire calling string, and returns the index of the last occurrence 
      of the specified substring. Given a second argument: a number, the method returns 
      the last occurrence of the specified substring at an index less than or equal to 
      the specified number
      
      
      lastIndexOf(searchString)
      lastIndexOf(searchString, position)
      
    
    
      ********* LOOP HOLES ********************

   -) If the method is called with no arguments, 
      searchString is coerced to "undefined". 
      Therefore,"undefined".lastIndexOf() returns 0
       because the substring "undefined" is found at 
       position 0 in the string "undefined".

   -) But "undefine".lastIndexOf(), returns -1 — 
      because the substring "undefined" is not found in the string "undefine".

   

*/
str="Hi Karan How are you. you are from Daltonganj right ?";
console.log("Index Of  with 2nd argument to find element after the first occurence : ",str.lastIndexOf("are",14));
console.log("lastIndex of method with no searchString : ",str.lastIndexOf()) // -1 because undefined is no where in string and if there will  be 
// no argument then lastIndexOf method will search for undefined in the given string. 


'hello world hello'.lastIndexOf('world', 4)
 // returns -1 — because, while the substring world does occurs at index 6, 
 // that position is not less than or equal to 4.

 'hello world hello'.lastIndexOf('hello', 99) 
 // returns 12 — because the last occurrence of hello at a position less 
 // than or equal to 99 is at position 12.

 'hello world hello'.lastIndexOf('hello', 0) 
 'hello world hello'.lastIndexOf('hello', -5) 
  //both return 0 — because both cause the method to only look for hello at index 0.

  /*
  ------------Some Other Examples for lastIndexOf() method ------------------------

        'canal'.lastIndexOf('a');     // returns 3
        'canal'.lastIndexOf('a', 2);  // returns 1
        'canal'.lastIndexOf('a', 0);  // returns -1
        'canal'.lastIndexOf('x');     // returns -1
        'canal'.lastIndexOf('c', -5); // returns 0
        'canal'.lastIndexOf('c', 0);  // returns 0
        'canal'.lastIndexOf('');      // returns 5
        'canal'.lastIndexOf('', 2);   // returns 2


  */

  /*
     -)lastIndexOf() method is case-sensitive. For example, the following expression returns -1:

         'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1

  */

  

/* 
*************  search() method **********************

            -) return index of the search element if present
            -) If not return -1
            -) It is case sensitive
            console.log("---Dealing with \"search() method\" ");
            console.log("Index of the with search method is : ",str.search("are"));

*/

// Extracting String parts

 /* 
There are 3 methods to extract string parts : 
-----------------------------------------------------
1) slice(start,end)
2) substring(start,end)
3) substr(start,end)

1) slice method extract a part of string and return the extracted part in new string.
2) slice() method selects data from the starting index to the last but excluding the
    last index provided.
*/
 console.log("-------Slice method ------------")
 var str1="karan raj sinha";
 console.log("Slice method example : ",str1.slice(0,5));
 console.log("Slice method example with negative 2nd arg: ",str1.slice(6,-2));
 console.log("Slice method example with negative 1st arg: ",str1.slice(-3,5));
 console.log("Slice method example with negative both arg: ",str1.slice(-3,-5));

 const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// Using slice() on sparse arrays
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]


 //2 Substring() method
 // substring cannot accept negative value as argument
 var str3="karan raj sinha";
 console.log("-----------Dealing with substring------------")
 console.log("trying positive index",str3.substring(0,5));
 console.log("trying negative index",str3.substring(9,-2));
 //If we are giving negative value then chracter are counted from 0th index 
 //and manipulated as per 2nd argument


 //3.substr() method

console.log("-----------Dealing with replace method : ------------")
 //replace method
 //return the entire string upon replacement
 //It will update only the first occurence of the string.
 // replace method does not change the  main string. It returns a main string.
 //By default, it will replace the first occurence.
 //
 //
 var str4="karan Raj Sinha checking for second karan update";
 console.log("replace method : ",str4.replace('karan','Karan'))

 

/* Converting String to an array */
 str="heelo man how are you";
let arrRes=str.split(" ");
console.log("array response of String : ",arrRes)
