/*
------------- ES6 Features ---------------------
1) Let keyword
2) Template Literals
*/

/* 
**************  var vs let difference  ************************

    var => function scope
    let and const => block scope

*/

console.log("------------ Dealing with VAR keyword---------------")
function biodata()
{
    var myFirstName="Karan";
     if(true)
     {
         var myLastName="sinha";
         console.log("Inner location : my FirstName : ",myFirstName)
         console.log("Inner location : my LastName : ",myLastName)
     }
     console.log("Outer location : my LastName : ",myLastName)
      // var is of function scope so there will be no issue.

}
biodata();


console.log("-----------Dealing with LET keyword----------------------------")

function biodata2()
{
    let myFirstName="Karan";
     if(true)
     {
         let myLastName="sinha";
         console.log("Inner location : my FirstName : ",myFirstName)
         console.log("Inner location : my LastName : ",myLastName)
     }
     console.log("Outer location : my LastName : ",myLastName)
     // as let is only block scope so it will not allow to print the block scope
     //variable at anything out of block scope.

}
//biodata2(); // It will not allow me to print myLastName at outerLocation as 
            //let only provide block scope thing.


/*
 ******************** Template Literals (Template String)****************************

*/
console.log("--------_Dealing with template literals-------------")
// for variable use ${} 
// and in general put everything normally in ``( backtick)
var tableof=8
counter=0;
for(var i=1;i<=10;i++)
{
  console.log(`${tableof} * ${i} = ${tableof*i}`);
  
}


/* -------------------------Default arguments-------------------------- */
console.log("-----------Default argument scenario---------------------")
 var sumresponse=function(a,b=5){
    return a+b
}
console.log("the  sumresponse with default arguments : ",sumresponse(5))


