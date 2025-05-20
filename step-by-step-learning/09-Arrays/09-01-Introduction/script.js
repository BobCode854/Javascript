/**
 *   Working with Arrays
 */

let letters = ["a","b","c","d","e"];

// Reverse an array . reverse() (It mutate the original array)
 letters.reverse();
console.log(letters)

// concat() method  : (non mutating)

let nums = [1,2,3,4];
let concatednated = letters.concat(nums);
console.log(concatednated)


//join() method  :  (non mutating)
 let joinedLetters = letters.join("-")
 console.log(joinedLetters)

 //slice() method : used to extract the part of the array.
 //Array.slice(startIndex , lastIndex(excluded))
 //return new array of extracted elements

 let num = [3,5,7,9,2];
 let extractedArray = num.slice(1,4);
 console.log("original array : "+num)
 console.log("extracted array : "+extractedArray)



 /**
  *           splice() method
  * ======================
  *    **) used to add new element into the array.
  *    **)  It is a mutating method.
  *    **)  Array.splice(startingindexForRemovingElement , 
  *                         endingIndexForRemovingElement,valueToBeAddedAfterRemovingElement)
  *    **)  return deleted item in the form of array.
  **/

 let splicedValue = num.splice(0,3,5);
 console.log("Spliced data : ",splicedValue)
 console.log("num after change : ", num)

 /**
  *            at()  Method
  * ============================
  *   
  */
 let numsData = [23,54,77,85];
 console.log(nums[0]);
 console.log(nums.at(0));

 //Getting last element of the array
 console.log(nums[nums.length-1]);
 console.log(nums.slice(-1)[0]);
 console.log(nums.at(-1));  // easiest way