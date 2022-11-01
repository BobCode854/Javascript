//-----------Control statement and loops-------------//

/*

1)  If else
2)  Switch statement
3)  While loop
4)  Do-While Loop
5)  For Loop
6)  For in Loop
    --------------------
    -) The for...in statements combo iterates (loops) over the properties of an object. 
    -) The code block inside the loop is executed once for each property.

     Example 
     /*
                            const student = {
                                      name: 'Monica',
                                      class: 7,
                                      age: 12
                                  }

                           // using for...in
                            for ( let key in student ) {

                                // display the properties
                                console.log(`${key} => ${student[key]}`);
                            }

                              Output
                              -----------
                              name => Monica
                              class => 7
                              age => 12
                   
                               
                              for...in with Arrays
                              ----------------------------
                                  // define array
                                  const arr = [ 'hello', 1, 'JavaScript' ];

                                  // using for...in loop
                                  for (let x in arr) {
                                      console.log(arr[x]);
                                  }

                                  Output
                                  -----------
                                  hello
                                  1
                                  JavaScript

                     /
7)  For of Loop
-------------------------------
-) The for..of loop in JavaScript allows you to iterate over iterable 
   objects (arrays, sets, maps, strings etc).

   Example
   /*
    // array
    ..............................
          const students = ['John', 'Sara', 'Jack'];

          // using for...of
          for ( let element of students ) {

              // display the values
              console.log(element);
          }

    // string
    .......................................
              const string = 'code';

              // using for...of loop
              for (let i of string) {
                  console.log(i);
              }

   for...of with Map
   .....................
                // define Map
                    let map = new Map();

               // inserting elements
                   map.set('name', 'Jack');
                   map.set('age', '27');

               // looping through Map
                  for (let [key, value] of map) {
                      console.log(key + '- ' + value);
                  }
   /
8)  Conditional (ternary ) operator 



Ques : Difference between for...in and for...of loop
----------------------------------------------------------------
-) The only difference between them is the entities they 
   iterate over: for..in iterates over all enumerable property 
   keys of an object.

   for..of iterates over the values of an iterable object.

   For Enumerable Information Visit below link
   ---------------------------
   https://www.javascripttutorial.net/javascript-enumerable-properties/#:~:text=keys()%20method.,-By%20default%2C%20all&text=In%20this%20example%3A,created%20via%20a%20simple%20assignment.

   -) To change the internal enumerable attribute of a property, 
      you use the Object.defineProperty() method. For example:


      Example
      /*

      const person = {
          firstName: 'John',
          lastName: 'Doe'
      };
      person.age = 25;

      -) The firstName and lastName are enumerable properties because 
         they are created via a property initializer.

      -) The age property is also enumerable because it is created via a simple assignment.

      Object.defineProperty(person, 'ssn', {
          enumerable: false,
          value: '123-456-7890'
      });

      for (const key in person) {
           console.log(key);
        }
           
        output
        ----------
        firstName
        lastName
        age

        ES6 provides a method propertyIsEnumerable() that determines whether or not
        a property is enumerable. It returns true if the property is enumerable; 
        otherwise false. For example


        const person = {
          firstName: 'John',
          lastName: 'Doe'
      };
      person.age = 25;

      Object.defineProperty(person, 'ssn', {
          enumerable: false,
          value: '123-456-7890'
      });

      for (const key in person) {
           console.log(key);
        }

        console.log(person.propertyIsEnumerable('firstName')); // => true
        console.log(person.propertyIsEnumerable('lastName')); // => true
        console.log(person.propertyIsEnumerable('age')); // => true
        console.log(person.propertyIsEnumerable('ssn')); // => false
        

        Summary
        -----------
        A property is enumerable if it has the enumerable attribute sets to true. 
        The obj.propertyIsEnumerable() determines whether or not a property is enumerable.

      /
*/

var tomorrow = "sunny";
if (tomorrow == "rain") console.log("take a raincoat");
else console.log("no need to take the raincoat");

var year = 2022;
if (year % 4 == 0) console.log("Leap Year");
else console.log("Not a Leap Year");

/*
what is truthy and falsy in Javascript
- we have total 5 falsy values in Javascript
-> 0, "",undefined,null, NaN, false
*/
console.log("--------TRUTHY and FALSY -----------");
if (0) {
  console.log("with 0 :pass");
} else {
  console.log("with 0 : fail");
}
if ("") {
  console.log("with '' : pass");
} else {
  console.log(" with '' : fail");
}
if (undefined) {
  console.log("with undefined : pass");
} else {
  console.log("with undefined : fail");
}
if (NaN) {
  console.log("with NaN : pass");
} else {
  console.log("with NaN : fail");
}
if (null) {
  console.log("with null : pass");
} else {
  console.log("with null : fail");
}
if (false) {
  console.log("with false : pass");
} else {
  console.log("with false : fail");
}

// Ternary Operator
console.log("-------------Ternary Operator---------------");
var age = 19;
console.log(
  age >= 18 ? "You are eligible for vote" : "you are not eligible .wait till 18"
);

/*
  ***********  Switch case ****************8
  --> It is again an alternative to if else case


  */

//If else first

var l = 4;
b = 3;
h = 2;
(r = 3), (PI = 3.142);

console.log("-----------Switch statement-----------------");
var area = "aacvv";
if (area == "circle") console.log("Area of circle is : ", PI * r ** 2);
else if (area == "rectangle") console.log("Area of rectangle : ", l * b);
else if (area == "triangle") console.log("Area of triangle : ", (l * b) / 2);
else console.log("enter valid data");

//Similar thing we can write in Switch statement

switch (area) {
}

// Program to write table for 8,9,10,12 with for loop
var table = [8, 9, 10, 12],
  counter = 4;
console.log("----------Table with 2 For Loops---------------------------");
for (var j = 0; j < counter; j++) {
  console.log("Table of ", table[j], "\n");
  for (var i = 1; i <= 10; i++) {
    console.log(table[j], " * ", i, " = ", table[j] * i);
  }
}
//Another way with one for loop
console.log("--------------Table with 1 For Loop-----------------------------");
counter = 0;
for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Table of ", table[counter], "\n");
  }

  console.log(table[counter], " * ", i, " = ", table[counter] * i);

  if (i == 10 && counter < table.length - 1) {
    counter++;
    i = 0;
  }
}

/*
We have total 5 falsy value in Javascript
---------------------------------------------------
1) 0
2) "" -> empty string
3) null 
4) undefined
5) NaN

*/
