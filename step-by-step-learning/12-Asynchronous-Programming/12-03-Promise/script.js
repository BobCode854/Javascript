/**
 *     calling async method has lots of problem with callback approach
 * =====================================================
 * 
 *        **)  Problem name is callback hell
 *        **)  Promise help to solve this problem
 */


let apiCall = ()=>{
    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();
        console.log(request);
     
        request.open("Get","https://jsonplaceholder.typicode.com/todos");
        request.send();

        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4  && request.status == 200){
                response = JSON.parse(request.responseText);
                resolve(response);
            }
            else if(request.readyState === 4  && request.status != 200){
                 reject("Data could not be parsed ! Some error")
            }
       })
     
    });
}
apiCall().then((successResponse)=>{
    console.log(successResponse)
}).catch((errorResponse)=>{
    console.log(errorResponse)
})