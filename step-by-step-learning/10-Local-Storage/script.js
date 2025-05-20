/**
 *                     Local Storage
 * ==================================
 *     There are  3 method inside it
 *    
 *                   getItem()
 *                   setItem()
 *                   updateItem()
 */

// set the item

localStorage.setItem("password","Karan")
localStorage.setItem("item","24")
console.log(localStorage)

// ** get the item **

let pass=localStorage.getItem("password");
console.log("pass : ",pass)

// ** update the item  **

localStorage.setItem("item",26) // putting different value for same key is updating
console.log(localStorage)

// Note :  only one time set is required , other time it will preserve then value in application/localStorage


// ** remove the  item  **

localStorage.removeItem("item")  // remove one item at a time.
console.log(localStorage)

localStorage.clear(); // delete all item at once
console.log(localStorage)


// ** Storing Object in localStorage.

  // -- Directly it is not possible , we have to convert it to string first to store.

  let vehicle = [{id : 1,name:"Honda"},{id:2,name:"mercedes"}];
 let  vehicleInString = JSON.stringify(vehicle);
 console.log(vehicleInString);
 localStorage.setItem("vehicles",vehicleInString);

 // Get stored item in object format

 let getVehicle = localStorage.getItem("vehicles");
 let parsedObject = JSON.parse(getVehicle);
 console.log("parsedObject :",parsedObject);
 console.log("type :",typeof parsedObject)
