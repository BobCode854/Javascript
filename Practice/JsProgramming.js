// 1 💃  Reverse of a string in a sentence **/
// NOTE : Reverse function will be applied to array.
//  So will convert string into array first and then apply reverse method.
function reverseString(string) {
  const individualString = string.split(" ");
  return individualString.map((arrayofString) =>
    arrayofString.split("").reverse().join("")
  );
}

//console.log(reverseString("bob the builder"));

// 2 💃  Write your own reverse method.

function reverse(arr) {
  try {
    if (arr instanceof Array) {
      if (arr.length == 0 || arr.length == 1) {
        return arr;
      }
      let length = arr.length;
      ["h", "e", "l", "l", "o"];
      let newArr = [];
      for (i = length - 1; i >= 0; i--) {
        newArr[length - 1 - i] = arr[i];
      }
      return newArr;
    } else {
      throw TypeError;
    }
  } catch (TypeError) {
    console.log("exception : ", TypeError);
  }
}
const arr1 = ["h"];
const arr2 = ["h", "e", "l", "l"];
const arr3 = [];
console.log(reverse(arr1));
console.log(reverse(arr2));
console.log(reverse(arr3));
reverse("abc");

// 3 💃 Check Repeated word and count in map in javascript

function findRepeatedWord(str) {
  console.log("str : ", str);
  let map = new Map();
  const splitWords = str.split(" ");
  for (singleWord in splitWords) {
    if (map.has(splitWords[singleWord])) {
      map.set(splitWords[singleWord], map.get(splitWords[singleWord]) + 1);
    } else {
      map.set(splitWords[singleWord], 1);
    }
  }
  return map;
}
let str = "Ravi had been saying that he had been there";
console.log(findRepeatedWord(str));

// 4 💃 . Write a Javascript program to find the extension of a filename
function findExtension(str) {
  let extension = str.split(".");
  return extension[1];
}
console.log("Extensions ", findExtension("abc.txt"));
console.log("Extensions ", findExtension("karan.gif"));
console.log("Extensions ", findExtension("data.php"));
console.log("Extensions ", findExtension("abc.docx"));

// 5 💃 . Write a program to print next follwing alphabet in a string.

function nextAlphabet(str) {
  const strInArray = str.split("");
  const nextAlpha = strInArray.map((character, index, strInArray) => {
    return String.fromCharCode(str.charCodeAt(index) + 1);
  });
  return nextAlpha.join("");
}

console.log("next Alphabet : ", nextAlphabet("abc"));

// 6 . 💃  FIZZBUZZ problem.
// Number divisible by 3 FIZZ.
// Divisible by 5- BUZZ.
//Divisible by both . FIZZBUZZ
//Divisible by nothing . - Return the Number.

const checkFizzBuzz = (number) =>
  number % 3 != 0 && number % 5 != 0
    ? number
    : number % 3 == 0 && number % 5 == 0
    ? "FIZZBUZZ"
    : number % 3 == 0
    ? "FIZZ"
    : "BUZZ";
console.log("********** Checking for FIZZBUZZ *********************");
console.log(checkFizzBuzz(5));
console.log(checkFizzBuzz(3));
console.log(checkFizzBuzz(15));
console.log(checkFizzBuzz(7));
console.log(
  "********** Checking for FIZZBUZZ in 2nd way *********************"
);
function fizzBuzz(number) {
  let name = "";
  if (typeof number !== "number") {
    name = NaN;
  } else {
    if (number % 3 == 0) name += "FIZZ";
    if (number % 5 == 0) name += "BUZZ";
  }
  return name == "" ? number : name;
}
console.log(fizzBuzz("5"));
console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

/* 7 💃 . Speed Limit count.
           
            till 70 - ok
            after 70 - after every 5 speed count give 1 point
            If it is 72 get it down to 70.
            After 12 points remove the license.

 */

console.log(" ********* Checking for the Speed **********");

function checkSpeed(speed) {
  let speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    return "OK";
  }
  point = Math.floor((speed - 70) / 5);
  if (point >= 12) {
    return " License suspended ";
  }
  return "Point : " + point;
}

console.log(checkSpeed(72));
console.log(checkSpeed(70));
console.log(checkSpeed(80));
console.log(checkSpeed(180));

console.log(checkSpeed(130));
console.log(checkSpeed(96));
console.log(checkSpeed(93));

//Above method in optimsed form.

console.log("********* optimised way : *******");
const checkSpeedOptimised = (speed) => {
  if (typeof speed !== "number") {
    return NaN;
  }
  let speedLimit = 70;
  const kmPerPoint = 5;

  let data =
    speed < speedLimit + kmPerPoint ? "OK" : Math.floor((speed - 70) / 5);

  if (typeof data === "number") {
    if (data >= 12) {
      return "License Suspended";
    }
    data = "Point : " + data;
  }
  return data;
};

console.log(checkSpeedOptimised(72));
console.log(checkSpeedOptimised(70));
console.log(checkSpeedOptimised(80));
console.log(checkSpeedOptimised(180));

console.log(checkSpeedOptimised(130));
console.log(checkSpeedOptimised(96));
console.log(checkSpeedOptimised(93));
console.log(checkSpeedOptimised("data"));

// 8. Show Odd even till the number passed as a  parameter.
console.log("******* Find the  even odd number : ***** ");

function oddEven(number) {
  if (number >= 0) {
    if (number % 2 == 0) {
      oddEven(number - 1);
      console.log("Even : " + number);
    } else {
      oddEven(number - 1);
      console.log("Odd : " + number);
    }
  }
  return;
}
oddEven(10);

/* 9 .💃 Count truthy value in an array.
    
Hint : 
   0
   null
   undefined
   NaN
   false
   ''

    these are falsy value.
*/
console.log("******** Count Truthy Element *******");
const countTruthy = (array) => {
  let count = 0;
  for (data of array) {
    if (
      !(
        data == 0 ||
        data == null ||
        data == undefined ||
        data == NaN ||
        data == false ||
        data == ""
      )
    ) {
      count++;
    }
  }
  return count;
};

// alternate way or best way
const countTruthy2 = (array) => {
  let count = 0;
  for (data of array) {
    if (data) {
      count++;
    }
  }
  return count;
};
array = [null, undefined, 1, 2, 3];
console.log(countTruthy(array));
console.log(countTruthy2(array));

// 9. Return String properties from an Object
console.log("***** Dealing with Objects *****");
let movie = {
  title: "a",
  releaseYear: 2015,
  rating: 4.5,
  director: "b",
};
function stringPropsFromObject(movie) {
  for (props in movie) {
    if (typeof movie[props] == "string") console.log(props, movie[props]);
  }
}
stringPropsFromObject(movie);

/* 10. 💃 Sum of the factor of number 3 and 5 till the given number.
        
    For example : argument =10.
     so for 3 factor till number is 3,6,9
     and similarly for 5- 5,10.

     adding both the numbers we have to return.
*/

console.log("**** Returing sum of factor of numbers :  ***** ");
const sumOfFactor = (number) => {
  let sum = 0;
  for (i = 1; i <= number; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }

  return sum;
};
console.log(sumOfFactor(10));

/*
 11. 💃 Calculate Grade of Student
 
    90-100 --A
    80-89  --B
    70-79  --C
    60-69  --D
    0-59   --F

*/
console.log("*********** Grade Program **************");

const calculateGrade = (marks) => {
  // this consist of 2 small work.
  // 1. find the average ( will make different func to utilize)
  //2.  assign grade based on average.

  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
};

const calculateAverage = (array) => {
  let sum = 0;
  for (value of array) {
    sum = sum + value;
  }
  return sum / array.length;
};
let marks = [35, 30, 90];
console.log(calculateGrade(marks));

/*

12.💃  Pattern Programming
        
        *
        **
        ***
        ****
*/
console.log("********* Pattern Programmming **********");
const pattern = (number) => {
  for (i = 1; i <= number; i++) {
    let counter = 0;
    let string = "";
    while (counter < i) {
      string = string + "*";
      counter++;
    }
    console.log(string);
  }
};
pattern(5);

/*
 13 💃  Prime Number
*/
console.log("******* show Prime ********");
const showPrime = (limit) => {
  for (number = 2; number < limit; number++) {
    let isPrime = true;
    for (factor = 2; factor < number; factor++) {
      if (number % factor == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(number);
    }
  }
};
showPrime(20);

// alternate way for prime

console.log("******* show Prime alternate way ********");
const showPrime2 = (limit) => {
  for (number = 2; number < limit; number++)
    if (isPrime(number)) console.log(number);
};
//we are making isPrime out of the showPrime to reuse
const isPrime = (number) => {
  for (factor = 2; factor < number; factor++)
    if (number % factor == 0) return false;

  return true;
};
showPrime2(20);

/**
 * 14. 💃  Access Address Object and show its properties and values
 *
 *         Create Address Object using literals
 */
console.log("\n ***** Printing Address Object *****\n");
const address = {
  city: "Daltonganj",
  zipcode: 822101,
  street: "Verma chowk, Kandu Muhalla",
};
function showAddress(address) {
  for (let props in address) {
    console.log(props, address[props]);
  }
}
showAddress(address);

/**
 * 15. 💃  Access Address Object and show its properties and values
 *
 *         Create Address Object using Factory Function.
 */
console.log("\n*** Creation of Address Object using factory function ***** \n");
function factoryAddress(city, zipcode, street) {
  return { city, zipcode, street };
}
function showFactoryAddress(address) {
  for (let props in address) {
    console.log(props, address[props]);
  }
}

const address2 = factoryAddress(
  "Daltonganj",
  822101,
  "Verma chowk, Kandu Muhalla"
);
showFactoryAddress(address2);

/**
 * 16. 💃  Access Address Object and show its properties and values
 *
 *         Create Address Object using Constructor Function.
 */
console.log(
  "\n*** Creation of Address Object using constructor function *****\n"
);
function Address(city, zipcode, street) {
  (this.city = city), (this.zipcode = zipcode), (this.street = street);
}
function showConstructorAddress(address) {
  for (let props in address) {
    console.log(props, address[props]);
  }
}

const address3 = new Address(
  "Daltonganj",
  822101,
  "Verma chowk, Kandu Muhalla"
);
showFactoryAddress(address3);
//or
console.log(address3);

/**
 * 17. 💃  Compare 2 Address object for equality
 */

const AddressNew = {
  street: "Verma Chowk",
  zipCode: 822101,
  city: "Daltonganj",
};
const AddressNew2 = {
  street: "Verma Chowk",
  zipCode: 822101,
  city: "Daltonganj",
};
addressNew3 = { ...AddressNew };
// same reference of object we will get from "=" operator.
address4 = AddressNew;
function areEqual(address1, address2) {
  if (address1.length == address2.length) {
    for (let key in address1) {
      if (!(address1[key] === address2[key]) || !(key in address2)) {
        return false;
      }
    }
    return true;
  }
}

function areSame(address1, address2) {
  let keys = Object.keys(address1);
  address1[keys[0]] = "dabar";
  if (address1[keys[0]] === address2[keys[0]]) {
    return true;
  }
  return false;
}
//or

function areSame2(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(AddressNew2, AddressNew));
console.log(areSame(address4, AddressNew));
console.log(areSame2(address4, AddressNew));

/**
 * 18. 💃 Post Object creation using constructor.
 */

function Post(title, body, author, views, comments, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.comments = comments;
  this.isLive = isLive;
}

/**
 * 19. 💃 Find array of elements between the range.
 */
console.log("**** Array of elements between the range **** ");
function arrayFromRange(min, max) {
  if (min > max) {
    return "Wrong Input";
  }
  const arr = [];
  for (i = min; i <= max; i++) arr.push(i);

  return arr;
}
console.log(arrayFromRange(-10, -1));

/**
 * 20. 💃 Create custom method Like includes.
 *
 * includes help in searching element
 */
console.log("*** Searching element *****");
const arrInclude = [1, 2, 3, 4];

function customInclude(arr, searchElement) {
  for (element of arr) if (element === searchElement) return true;
  return false;
}
console.log(customInclude(arrInclude, 11));

/**
 * 21. 💃 Moving Elements of Array
 *
 *
 */
console.log("*** Moving Elements of Array *****");

const elementMove = [1, 2, 3, 4];

function moveElement(arr, index, offset) {
  if (index + offset < 0 || index + offset >= arr.length) {
    console.error("Invalid Offset");
    return;
  }
  // element ko main location se delete karna h
  // aur offset jitna location p put karna  h

  //splice - index, delete, data
  arr.splice(offset + 1, 0, arr[index]);
  arr.splice(index, 1);
  return arr;
}
console.log(moveElement(elementMove, 1, -1));

/*
💃 Count the Occurence of given element in an array.
*/
console.log("**** find occurence of given eleemnt in an array ****");
array = [1, 2, 3, 4, 1, 1];

function occurence(arr, searchElement) {
  return arr.reduce((accumulator, currentElement) => {
    count = currentElement == searchElement ? 1 : 0;
    return accumulator + count;
  }, 0);
}
console.log(occurence(array, 1));

/*
💃 Find Max value inside an array
*/
arrMax = [2, 8, 25, 9];
console.log("***** Find Max value inside an array *****");
function getMax(array) {
  if (array.length <= 0) {
    return;
  }
  tempMax = 0;
  for (element of arrMax) if (element > tempMax) tempMax = element;
  return tempMax;
}
console.log(getMax(arrMax));

// Alternate way
console.log(" *** Find Max of array element alternate **");
function maxElement(array) {
  return array.reduce((accumulator, currentElement) => {
    return currentElement > accumulator ? currentElement : accumulator;
  });
}
console.log(maxElement(arrMax));

/**
 * 💃  Operation on movie object
 *
 *               Sorting, condition searching,
 */
console.log("*** Some operation on Movie object *******");
const movies = [
  { title: "a", year: 2018, rating: 3 },
  { title: "e", year: 2018, rating: 4.9 },
  { title: "f", year: 2018, rating: 4.4 },
  { title: "b", year: 2019, rating: 4.1 },
  { title: "c", year: 2017, rating: 3 },
  { title: "d", year: 2020, rating: 4.8 },
];

function findMovie(movies) {
  // find movie on 2018 and have rating > 4
  return movies.filter((movie) => {
    if (movie.year === 2018 && movie.rating > 4) {
      return movie;
    }
  });
}

function findMovieAndSortByRatingAndGetTheTitle(movies) {
  // find movie on 2018 and have rating > 4
  const tempMovies = [];
  movies.filter((movie) => {
    if (movie.year === 2018 && movie.rating > 4) {
      tempMovies.push(movie);
    }
  });
  // After sorting to ascending order find the title of the movies.
  // we can make descending order after sorting to ascending and use reverse() method.
  return tempMovies
    .sort((movie1, movie2) =>  movie1.rating - movie2.rating)
    .map((movie) => movie.title);
}
console.log(findMovie(movies));
console.log(findMovieAndSortByRatingAndGetTheTitle(movies));
