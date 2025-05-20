/**
 *     fetch api call
 * =====================================================
 * 
 *     **)  It uses XmlHttpRequest Internally.
 *     **)  we can directly call the api of local json file with fetch
 *     **)  It is simple to use.
 *     **)  It also returns promise object .
 *     **)  No need to create ready state and all which we have donr in XmlHttpRequest.
 *      
 */

fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>{
    
    // response is an object which can be pending state
    // response.json is a promise object which we again have to put .then to extract the data

    return response.json();
    
    }).then((data)=>{
        console.log("Data : "+data)
 data.forEach((element)=>{
            console.log("============")
            console.log(element.id)
            console.log(element.title);
        })
    }).catch((error)=>{
      console.log("Error : "+error)
    })



