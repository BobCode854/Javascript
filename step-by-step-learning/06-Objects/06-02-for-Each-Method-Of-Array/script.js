/**
 *   **************   For Each  ********************************
  *      **) It is another type of loop which we will use to traverse array.
  *  
 */

let dishes = ["Biryani","Chicken Korma","Aalu paneer","Dal Makhani"];

//using for loop

for(var i=0;i<dishes.length;i++){
 console.log(dishes[i])
}

// *****  for Each using arrow function

dishes.forEach(element=>{
    console.log(element);
})

//*******  for each using callback ( function as an argument)

dishes.forEach(function(dish){
console.log(dish)
});

