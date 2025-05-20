   
/**  *********** String ************************ */

    var string = "Hi Karan";  // double quote data
    console.log(string);

    var string = 'Hi Karan'; // single quote data
    console.log(string);

    var firstname = 'karan'; var lastname = 'sinha';
    console.log(firstname,lastname); // console.log will create automatic space b/w 2 variables


/**  *********** String concatenation ************************ */

        // 1 . Using  + operator
            
                var fullName = firstname + " "+lastname;
                console.log(fullName);
        
    // 2 . Using template literals
                
                var fullName = `${firstname} ${lastname}`;
                console.log(fullName);

/**  ******************* Getting String Characters *************** */

     console.log(firstname[2]);
     console.log(firstname[5]); // It wil not find the data so it will through undefined.

/**   ****************  String Methods **********************/

       console.log("************* String Methods **************")
       console.log("toUpperCase : "+firstname.toUpperCase());
       console.log("toLowerCase : "+firstname.toLowerCase());
       console.log("toLocaleLowerCase : "+firstname.toLocaleLowerCase()); 
        
        /**
         *  The toLocaleLowerCase() method returns the value of the string converted to
         *   lower case according to any locale-specific case mappings
         **/ 

        console.log(" indexOf : "+firstname.indexOf('a'));

       // trim method

        var data = "       karan raj sinha         ";
        console.log("to trim up space use trim method : "+data.trim());

       /**
        *   lastIndexOf("")  
        *   ==================
        *   **) return Integer , If exist position , else -1
        *   **) It is case sensitive
        *   **) If exist return the position
        *    
        *  */
         console.log("lastIndexOf a in Karan : "+firstname.lastIndexOf("a"));
         console.log("lastIndexOf character not present : "+firstname.lastIndexOf("z"));
        
        /**
         *  includes()
         *  ===========
         *  **) return boolean 
         *  **) It will tell whether character or string exist in main string or not. 
         *  **) It is case sensitive
         *   **) used to verify @ in email and other cases .
         */

         let hobbies = "reading writing cricket";
         console.log("includes method : "+hobbies.includes("writing"));

         /**
          *  slice method
          * =================
          * **) It return substring 
          * **) data.slice(0,5); // Including the 0th index and excluding the 5th index. 
          */
            fullName = "karanRajSinha";
            console.log("slice method : "+fullName.slice(0,5));

       /**
        *  split method
        * ================
        *  **)  It does not modify the original string.
        *  **) separator (optional): A string or regular expression that specifies 
        *                            where to split the string.
        * 
        *  **) limit (optional): An integer that limits the number of splits.
        */
       
       let favColor = "Brown black red green";
       let colorArray = favColor.split(" "); // space is  a separator .
       console.log("split method :  : "+colorArray);