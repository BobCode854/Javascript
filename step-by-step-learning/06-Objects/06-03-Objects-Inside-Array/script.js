/**
 *   **************   Objects inside array  ********************************
 *   
 */

let blockList = [
    {
    "userName" : "John",
    "reason" : "abusive"
},
{
    "userName" : "Paul",
    "reason" : "Sexual content"
}
]

console.log(blockList);
blockList.forEach(userObject=>{
    console.log(` User : ${userObject.userName}  is blocked due to ${userObject.reason}`);
})

