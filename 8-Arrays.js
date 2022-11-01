/**
 * 
 */

var myFriends=["Samar","Akanksha","Vishal","Chiku","Manas","Aparna"];
console.log("------------Output with for loop-------------------")
for(var i=0;i<myFriends.length;i++){
    console.log(myFriends[i])
}
console.log("------------Output with for in loop-------------------")
for(let elements in myFriends){
    console.log(elements)  // For In gives Index
}
console.log("------------Output with for of loop-------------------")
for(let elements of myFriends){
    console.log(elements) //For of gives data
}
console.log("------------Output with for each loop-------------------")
/*

myFriends.forEach(function(individualElement,index,arrayName)
{
console.log(individualElement)
});

*/


myFriends.forEach((data,index)=>{
  console.log(data)
});

// Includes method return boolean 
var response=myFriends.includes('Akanksha');
console.log(response);

// we can store filter response in same variable if it is not required in 
//any other place 

 let myFriendss=myFriends.filter((data,index)=>{
    return data.startsWith('A');
})
console.log("FIlter response : ",myFriendss)

//Sorting an array
console.log("MYFriends before sorting : ")
console.log(myFriends)
console.log("MYFriends after sorting : ")
myFriends.sort(); // this method sort the array data.
console.log(myFriends)


//what is the difference between forEach and map method
// forEach on operation changes the original array data while map creates a separate 
//array without disturbing the original one.

//forEach method returns undefined whereas map return the operational array response.


//method chaining we can perform 
console.log("===== dealing with method chaining--------------------")
let numArr=[1,2,3,4,5,6,7,8,9];
let squareOfEven=numArr.filter((data,index)=>{
    return data%2==0;
}).map((data,index)=>{
    return data**2;
})
console.log("Square of even with method chaining",squareOfEven)


// Reduce method is used to 
//--flatten an 3 dimensional or 2 dimensional array into one dimensional array
//-- perform summention, product, division and other mathermatic operation to store in 
//-- single variable without creating any new variable


var arr=[1,2,3,4,5,6,7,8,9];
console.log("----------dealing with reduce method : ")
var data=arr.reduce((accum,currentElement,index,arr)=>{
  return accum+=currentElement
})
console.log("summation with reduce method : ",data)


/*  -------------Array Methods ------------------ */

/* Array.prototype.pop()

 -)The pop method removes the last index from an array and returns that element.
 -) The method changes the length of an array.

*/
console.log("\n")
console.log(" ************* POP Method *********************************")
let friendsList=['appu','vijay','rahul','sneha','preetam'];
console.log("Original List : ",friendsList)
let removedFriend=friendsList.pop();
console.log("\nRemoved friend  return from the pop method : ",removedFriend)
console.log("\nRemaining friendList : ",friendsList)

/*
   Array.prototype.shift()
   ------------------------------
   -) It removes the first element from the array and returns the removed element.
   -) This method changes the length of the array.
*/
console.log("\n")
console.log(" ************* SHIFT Method *********************************")
 friendsList=['appu','vijay','rahul','sneha','preetam'];
 console.log("Original List : ",friendsList)
 removedFriend=friendsList.shift();
console.log("\nRemoved friend  return from the shift method : ",removedFriend)
console.log("\nRemaining friendList : ",friendsList)


/*
   Array.prototype.splice()
   ------------------------------
   -) Add and/or remove element from the array.
   -) The splice() method changes the contents of an array by 
      removing or replacing existing elements and/or adding new elements in place.
   
   -) It returns the array of replaced element.
   
*/
console.log("\n")
console.log(" ************* SPLICE Method *********************************")
 friendsList=['appu','vijay','rahul','sneha','preetam'];
 console.log("Original List : ",friendsList)
 spliceReturn=friendsList.splice(1,0,'mohit');
console.log("\n Splice Return while adding without replace ",spliceReturn)
console.log("\nInsert mohit at index 1 and New friendList: ",friendsList)
spliceReturn=friendsList.splice(4,1,"Akanksha");
console.log("\n Splice Return while adding with one element replace ",spliceReturn)
console.log("\nIt means at location 4 replace one element and add akansksha to it",friendsList)
spliceReturn=friendsList.splice(4,2,"aparna");
console.log("\n Splice Return while adding with 2 element replace ",spliceReturn)
console.log("\nIt means at location 4 replace 2 elements and add akansksha to it",friendsList)

 //Challenge
 const month=['jan','march','april','june','july'];
 month.splice(5,0,'Dec'); //position jahan data add hoga ya remove hoga, replace,data
 console.log('Dec added : ', month)
 month.splice(1,1,"March")
 console.log('March in capital updated with splice : ', month)


 /*
        Array.prototype.map()
        ------------------------
         -) The map() method creates a new array populated with the results 
            of calling a provided function on every element in the calling array.
 */

            const arrFind=[1,5,7,9,11,8,13,24,2];
            
            //find number > 9

            let newArr= arrFind.map((currentElement,index,originalArray)=>{
                  return currentElement >9  ;
            })
            console.log("OriginalArray : ",arrFind)
            console.log("Eleemnt Greater than 9 or not: ",newArr)


             newArr= arrFind.map((currentElement,index,originalArray)=>{
                return currentElement * currentElement ;
          })
          console.log("\nOriginalArray : ",arrFind)
          console.log("newArr with Square : ",newArr)
            

        console.log("trying same thing with foreach")  
        newArrForEach= arrFind.forEach((currentElement,index,originalArray)=>{
            return currentElement * currentElement ;
      })
      console.log("\nOriginalArray : ",arrFind)
          console.log("newArr with Square Using FOrach : ",newArrForEach)

     /* 
     ---------------------- MAP VS FOREACH ---------------------------

        -) Map return new array without mutating the original array 
           whereas forEach returns undefined. 

        -) Map method is chainable . This mean you can attach reduce(),
           sort(),filter() and so on after performing a map() method on an array.

      */    
    
    // Multiply Each element with 2 and returns the element which are greater than 10.

      let arrData=[1,2,3,4,5,6,7,8,9,10];
      let newArrData=arrData.map((element)=> element*2).filter((element)=>element>10)
      console.log("Original array data : ",arrData)
      console.log("newArrData with chain operation : ",newArrData)


   /*
         Reduce method
    -----------------------------------------------
        -) Flatten an array means to convert the 3D or 2D array into a
           single dimensional array
         
        -) It takes 4 arguments
             
                   1) Accumulator
                   2) CurrentValue
                   3) CurrentIndex
                   4) Source Array

        -) Those operation where we want single value like
               Sum of array, Avergae, product we will choose reduce method.

            

   */
  let reduceMethod=[1,2,4,6];
    let sumOfData=reduceMethod.reduce((accumulator,currentElement,currentIndex,originalArray)=>{
        return accumulator+=currentElement
    })

    console.log("Sum of element with reduce method : ",sumOfData)


 // Flatten an array with the help of reduce method

 let originalArray=[
     ['data1','data2'],
     ['data3','data4'],
     ['data5','data6'],
     ['data7',['data8','data9']]
 ]
 let flatArray=originalArray.reduce((accumulator,currentElement,currentIndex,originalArrayCopy)=>{
     return accumulator.concat(currentElement)
 })
 // all 2d or 3d array will be flatten other than the  nested one.
console.log("arrray flattening",flatArray)