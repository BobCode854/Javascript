/**
 *   **************   Logical Operator   ********************************
 * 
 *   ** )  And &&  ==  both condition should satisfy
 *   ** )  Or ||      ==  any  one condition should satisfy
 *   ** )  Not !       ==   true to false and false to true  
 * 
 *   **) ternary operator  : ? : 
 */
let password = "qwerty@"
if (password.length>5 && password.includes("@") ){
    console.log("Condition satisfied");
}

if (password.length>5 || password.includes("@") ){
    console.log("Condition satisfied");
}

/**  Print even number till 20 */
 for(let i=1;i<=20;i++){
    let result = i%2==0? i : "";
    console.log(result);
 }

const score = 90;
if(5==5){
    const score = 90;
    console.log(score);
}