   
/**  *************** Arrays ************************ */

let dish1= "Aalu bhujiya";
let dish2 = "Biryani";

// Instead of using individual item , we can store in array object

let storingDishes = ["aalu bhujiya","Biryani"];

console.log(storingDishes , typeof storingDishes); //type will be object.

//access the data
console.log(storingDishes[0],typeof storingDishes[0]);

//modify the array data 
storingDishes[0]="kala khata"; // After modification array data will be updated.
console.log("storingdishes after modification :"+storingDishes);


/**
 *  Array Methods
 */

    // Join method   : return string , need separator
     console.log(storingDishes.join(", "),typeof storingDishes.join(", "));

    // concat method : adding 2 array;
    let newDishes = ["spanish tortiya","chinese noodles"];
      console.log("concatinating 2 dishes : "+storingDishes.concat(newDishes));

    // indexOf  : indexOf element
     console.log("indexOf "+newDishes.indexOf("spanish tortiya"));

     // length property

     console.log("length property : "+newDishes.length);

     /**  
      *   ********** Push Method ***************
      * 
      *   **) return the length of array after modification . 
      *   **) Add data at the last in the existing array.
      *   
      * 
      **/ 
 
     console.log("push method : return length of array after pushing elemnt: "+newDishes.push("pani puri"));
     console.log(newDishes);
   
     /**
      *    ********** Pop Method ***************
      *    
      *   **) remove the last data from the array .
      *   **) return the data which gets deleted.
      * */
     console.log("pop method : return length of array after pushing elemnt: "+newDishes.pop());
     console.log(newDishes);