/*
 --------- How to create an Object ---------------

 -) 1st way ( Object Literal way )
 
 let bioData={
    myName : "Karan Sinha",
    myAge : 26,
    getData : function(){
        console.log(`My name is : ${bioData.myName} and my age  is ${bioData.myAge}`)
    },

    otherInfo(){
        console.log("Other information")
    }
}
bioData.getData()
bioData.otherInfo();
 

*/
let bioData={
    myName : "Karan Sinha",
    myAge : 26,
    getData : function(){
        console.log(`My name is : ${bioData.myName} and my age  is ${bioData.myAge}`)
    },

    otherInfo(){
        console.log("Other information")
    }
}
bioData.getData()
bioData.otherInfo();

// we can also enter object inside object but again with : and not with =
 let bioData2={
    myName :{
        myFirstName : "Karan",
        myLastName : "Sinha"
    },
    myAge :20,
    getData : function(){
        console.log(`My First name is : ${bioData2.myName.myFirstName} , LastName  : ${bioData2.myName.myLastName} and my age  is ${bioData2.myAge}`)
    },

    otherInfo(){
        console.log("Other information")
    }
}
bioData2.getData();

// 2nd way is "this" keyword

var myName="karan" // As this is in global scope to the data method.
// this will be stored inside the window object and we can see value with this.myName
function data(){
    console.log(this);
}
data();