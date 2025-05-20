  /**  *************** Type Coercion ************************ */

  let a ="5";
  let b = 6;

  let c = b+a ; // concat m string precedence is more so it will change to string.
  console.log(c);

   c = a-b ; //  Number precedence is more in subtract operation
  console.log(c);

  c= a*b ; // Number precedence is more in multiplication;
  console.log(c);