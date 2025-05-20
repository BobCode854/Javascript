/**
 *   **************   DOM Manipulation ********************************
 *   
 *      
 */

/**  
 *     Updating and changing attribute of the Html Element
 * 
 * */ 


// Fetch the element and get the attribute.

 let getElementAttribute = document.querySelector('a');
 console.log(getElementAttribute.getAttribute('href'));

 // Set the attribute , we can have many attributes , so set the attribute providing the attr. name

 getElementAttribute.setAttribute('href',"https://www.youtube.com");
  console.log(getElementAttribute);
  getElementAttribute.innerText = "Click Me Updated With InnerText"

