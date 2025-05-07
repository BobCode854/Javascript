/*
-) Node is a C++ program that embed google v8 runtime engine inside it
   to create runtime environment for backend application using Javascript.

   So basically Node is neither a language nor a framework but it is a
   runtime environemnt where we can write server side application using Javascript.


-) Similarly for firefox it is a spidermonkey.

Where does Javascript code run ?
-) Every browser has a Javascript engine that can executes javascript code.
      
            FireFox - SpiderMonkey
            Chrome -  v8

 
Truthy and Falsy
-------------------------

-) If we are using OR operation and one of the operand is false 
   then If the other operand is : 

   // undefined
   // null
   // 0
   // false
   // ''
   // NaN

   then result will be the VALUE OF THE OTHER OPERAND.

   and it is not only with OR operation but with AND operation also.

   For Example : 
   ------------------
   false || 'karan' (so 'karan' is a truthy for this operation)
                     -- In this kind of scenario truthy value will return.
   -> 'karan'

   false || 1 || 2
   -> 1 ( as soon as first truthy value it will find it will return that only)

   but 

   true && 1 && 2
   ->2

 💃 
  For Object data access we can use 2 ways to access
   object.key
   or 
   object [key]

   Mostly we can access with both the ways but sometime we cannot access data 
   when we dont know the object properties like below  example

   const person={
    'name' : "karan",
     "age" : 12
};

for( key in person){
    console.log(person.key)
} 
-) undefined undefined

for( key in person){
    console.log(person[key])
}

-) karan and 12


💃 
  we use for-of loop to iterate item in an array and maps
   and for - in to iterate item of an object.

   const circle={
       radius : 1,
       draw(){
           console.log("draw")
       }
   }

   for(key in circle){
       console.log(key,circle[key])
   }
   for(key of circle){
       console.log(key) // circle is not iterable error.
                        // But even though we can iterate using Object.keys method.
   }

   for(let key of Object.keys(circle)){
       console.log(key)
   }

// For finding a particular property in Object we use IN keyword

  Exmaple : if( 'radius' in circle){
      console.log("yes")
  }

💃 typeof(NaN) === Number


💃  Difference between function and method.

If the function is a part of object then it is called a method.

let circle={
    radius : 1,
    location : {
        x:1,
        y:1,
    }
    draw : function {
        console.log("draw") // now this draw is a method
    
    }
}

So a method is actually a function inside an Object.
💃  Non Primtive (Object, Function, Array,)

💃  Primitive are copied by their value but 
    Object are copied bt their reference.

     Example : x=10; 
               y=x;
               x=20;

               console.log(x) // 20 (call by value in primitive)
               console.log(y) // 10

         x={value : 20}
         y=x;
         x.value=10;
         console.log(x.value) //10
         console.log(y) //10   (this is call by referecne)

   IN this example At certain memory location value : 20 will be placed
    and its memory location will be stored inside x reference.
    Now when Y = X then Y is reference to the same memory location
    which x reference to. If the value will be changed then
     value will be changed for both X and Y


      Example with function
       number=10
       function increase(number){
           number++;
       } 
       increase(number);
       console.log(number); //it will be 10.
    
       But with reference
       ----------------------
        number={value : 10}
       function increase(number){
           number.value++;
       } 
       increase(number);
       console.log(number); //it will be 11.


💃 Cloning of an Object
-------------------------------------
const circle={
    radius : 1,
    draw(){
        console.log("draw")
    }
}

           1st way
        **************

        -) Using for...in method

                const another={};
                for(let key in circle)
                another[key]=circle[key]

         2nd way
        ***********

        -) Using Object.assign() method.
            with the help of first paramter we can pass other
            key value pair to newly created another object.

              const another= Object.Assign(
                  {'color' : 'yellow'},
                  circle)

        3rd way and the simplest way
        ******************************

        -) using spread operator
           
          const another={...circle}

💃  String

    const string="This is my room";
    const another=new String("hiii how are you")

 ** Searching something inside string

   --) Use includes method for searching and it is case-sensitive
            string.includes("my") // true
            string.includes("not") // false




💃 Arrays
------------------------
const numbers=[3,4];

// Add Numbers at the end
    numbers.push(5,6);

 //Add numbers at middle
     numbers.splice(2,0,'a','b')

// Add Numbers at th Beginnning
    numbers.unshift(1,2);


console.log(numbers)

// Delete operation

start- numbers.shift();
middle- numbers.splice(2,1 or 2);
end- numbers.pop()


//Emptying an array

numbers=[1,2,3]
another=numbers;

//**** 1st way *****

numbers=[]; 
//but it will be recommended if it has no references
with respect to above object... numbers will be [] but another will be [1,2,3].

// **** 2nd way ****
 numbers.length=0;
 It will make empty for both original and reference one.

 // **** 3rd way *****
  while(numbers.length)
     numbers.pop();

// *** 4th way*****
 numbers.splice(0,numbers.length);


 //***** JOIN METHOD   ***** /
 // Used in URL (check stackoverflow question asked and URL)
 var data="what is javascript"
 const arr=data.split(" ");
 const combinedWithHyphen=arr.join("-");
 console.log(combinedWithHyphen)


 //****  */

