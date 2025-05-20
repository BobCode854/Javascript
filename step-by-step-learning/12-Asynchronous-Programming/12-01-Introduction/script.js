/**
 *                                   Asynch Programming
 * ====================================================
 * 
 * 
 */

   console.log(1);
   console.log(2);
   setTimeout(()=>{
    console.log("Hola amigo from callback ! Async code")
   },3000);
   console.log(4);
   console.log(5);



   /**
    *   Making Http request
    */


   let apiCall = ()=>{
    let request = new XMLHttpRequest();
    console.log(request);
 
    request.open("Get","https://jsonplaceholder.typicode.com/todos");
    request.send();
 
    /**
     *    Now readyState is a property inside request and it constains 4 states
     * =======================================================
     *      0   :    Unsent                                       :    When request is not sent to server
     *      1   :    Opened                                     :    open() method is called
     *      2   :    header_recieved                    :    send() has been called
     *      3   :    Loading downloading           :     responseText holds partial data
     *      4   :    Done                                          :     all response data downloaded
     * 
     * Also we will have to add a listener to get the response once all data recieved
     * 
     */
    request.addEventListener('readystatechange',()=>{
         if(request.readyState === 4  && request.status == 200){
                     console.log(request.responseText)
         }
         else if(request.readyState === 4  && request.status != 200){
            console.log("Data could not be fetched due to falsy response")
         }
    })
   }
  

/**
 *                  Http Response status codes
 * ===============================================
 *     100-199    :     Information response 
 *     200-299    :     Success Response
 *     300-399    :     Redirection response
 *     400-499    :     Client Error Response
 *     500-599    :     Server Error Response
 */

 apiCall();
