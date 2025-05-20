 /**
  *    Variables , Constants , and Comments
  *   ********************************************************
  *     **) Var allows reassigning and redeclaring  .
  *     **) let allows reassigning but not redeclaring.
  *     **) const does not allow either reassigning or redeclaring  
  *  */ 
   
 var reassigning_var = 20; // assign 20 to num variable
 reassigning_var = 30;   // reassigning 30 to num variable
   
   console.log("reassigning to var " +reassigning_var);

   var redeclaring_var = 40;
   var redeclaring_var = 70;  // again creating same variable with var keyword

   console.log("redeclaring to var "+redeclaring_var);

   let reassigning_let = 4;
   reassigning_let = 5;
   console.log("reassigning to let "+reassigning_let)

   let redeclaring_let = 4;
   //let redeclaring_let = 5;   // not possible with let keyword
   console.log("redeclaring to let is not possible") ; 

   const redeclaring_const = 5;
   //const redeclaring_const = 6; // not possible with const keyword
console.log("redeclaring to const is not possible") ; 

   const reassigning_const = 4;
   //reassigning_const = 5;
   console.log("reassigning to const is not possible");

   
   //Scope of var
   console.log("Scope of var")

   var count =1;
   var age = 20;

   function sum (a,b,c){
      var count = 2;
      return a+b+c;
   }
   sum(1,2,3);
   console.log("count value after method execution : "+count); // value will be 1 because of global scope
  
   if(age>18){
      var count = 2;
      console.log(count);
   }
   
   console.log("count value after if-statement execution : "+count); // vallue will be 2.

   /**
    *   **)  The reason being there is a local scope for method and 
    *            thats why count get disappear after method execution 
    *            but  for conditonal statements there is no local scope and it updates on global scope.
    * 
    *   **) If block get executed and updated the count data.
    * 
    *   **) Same is not applicable in case of let keyword ,  block will be created for If also and function also .
    */


  const person = {};
  person.name = "Karan";
  console.log("person info : "+person.name);

  /**
   *    **) In case of constant , we cannot change the value of variable in constant.
   *    **) But when it works as an reference ,or in case of object type , we can modify it.
   */
  
