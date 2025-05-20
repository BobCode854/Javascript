/**
 *   **************   DOM Manipulation ********************************
 *   
 *      
 */

/**  
 *     Updating and changing content of the Html Element
 * 
 * */ 

  // innerText  . (// It ignore spaces)

    let fetchDiv = document.querySelector('.box');

   console.log(fetchDiv.innerText)
   fetchDiv.innerText = "Updating the code with innerText"


   
    


  
  //innerHtml . (// It does not ignore spaces . Retrieve the content in html format)
 
  let fetchSpan = document.querySelector('.highlight');
  console.log(fetchSpan.innerHTML)
  fetchSpan.innerHTML = "Updating with innerHtml"

  
 