/**
 *     async await call
 * =====================================================
 * 
 *     **) It also return promise
 *      
 */

let apiCall = async()=>{
      
    let promiseResponse = await fetch("https://jsonplaceholder.typicode.com/todos")
            // fetch("https://jsonplaceholder.typicode.com/todos") will return promise

   let data = await promiseResponse.json();
return data;
}

apiCall().then((data)=>{
    console.log(data) // It willl return entire  data in json format
}).catch((error)=>{
    console.log("error : "+error)
})