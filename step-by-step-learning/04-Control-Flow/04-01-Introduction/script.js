/**
 *   **************   Control Flow For Loops   ********************************
 */

for(let i=0;i<5;i++){
    console.log(i);
}

let dishes = ["Chat","Pani-Puri","Biryani","Kacha-Dabeli"];
console.log("Using For Loop")
for(let i=0;i<dishes.length;i++){
    console.log(dishes[i]);
}
console.log("Using While Loop")
/** While  loop  */
let j=0;
while(j<dishes.length){
    console.log(dishes[j++]);
}

/**
 *      ************ If- Else Statement ******************
 */
let budget = 6000;

if(budget > 7000){
    console.log("Good budget")
}else if(budget >5000){
    console.log("OK budget")
}else{
    console.log("Nai ho payega")
}