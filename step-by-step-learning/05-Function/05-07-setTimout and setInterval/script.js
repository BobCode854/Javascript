/**
 *   **************  setTimout and setInterval   ********************************
 *    
 *     **)  Run Function once after interval of time.   - setTimeOut
 *     **)   Run Function repeatadly ,starting after interval , then repeating - setInterval()
 */


/**
 *    setTimeout( fun|Code , delay ,  arg1,arg2 ,....)
 */

function greeting(){
  console.log("Welcome to coding ......")
}

setTimeout(greeting,5000);

// same syntax in another way

setTimeout(function greeting(){
  console.log("Welcome to coding ......")
},2000);

// by arrow function
setTimeout(()=>{
  console.log("Welcome to coding ......")
},3000);

// with parameter we have to pass in the 3rd argument

function greetingWithArgument(name){
  console.log(`Welcome ${name} to coding ......`)
}
setTimeout(greetingWithArgument ,4000,"Karan")



/**
 *     setInterval(fun|code , delay , args1,args2 , ....) 
 */

setInterval(greeting,7000);
setInterval(greetingWithArgument,8000,"Mahi");

