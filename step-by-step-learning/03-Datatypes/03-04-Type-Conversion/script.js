   
/**  *************** Numbers ************************ */
let score = 50;
console.log(score , typeof score);

let str = "my number is : "+score;
console.log(str) 

// Loose equality and strict equality

let age = 22;
console.log(age == "22"); // loose equality (datatype will not check , only data check)
console.log(age === "22") // strict equality (data and datatype both will be checked)

// Type conversion

   /**
    *   Number To String
    */
  let number = "54";
  let string = "stringdata"
  let getTheNumber = Number(number);  // Number constructor to change string number to number dtaatype
  console.log(getTheNumber,typeof getTheNumber);
  let getTheNumberFromStringData = Number(string); 


  // It will throw NaN. We are trying to work like a number on a non number data type

  console.log(getTheNumberFromStringData);

  /**
   *  String to Number
   */
     let convertedString = String(age);
     console.log(convertedString , typeof convertedString);


/**
 *   **) String , Number ----> Boolean
 *   **) Except empty string every value is truthy value.
 *   **) Except 0 every number is truthy value on conversion.
 */

      let emptyString = "";
      let datastring="hi";
      let zero = 0;
       number = "25";
       let negativeNumber = -2;
       let undefinedtype ;

     console.log("empty String conversion to boolean : "+Boolean(emptyString));
     console.log("data String conversion to boolean : "+Boolean(datastring));
     console.log("zero number conversion to boolean : "+Boolean(zero));
     console.log(" positive number conversion to boolean : "+Boolean(number));
     console.log(" negative number conversion to boolean : "+Boolean(negativeNumber));
     console.log(" undefined conversion to boolean : "+Boolean(undefinedtype));