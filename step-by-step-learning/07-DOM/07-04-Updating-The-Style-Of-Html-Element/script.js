/**
 *   **************   DOM Manipulation ********************************
 *   
 *      
 */

/**  
 *     Updating and changing style  of the Html Element
 * 
 * */ 

  // Change the Style
  
  let heading = document.querySelector('h1');
  console.log(heading)

  heading.style.color = 'white ';
  heading.style.backgroundColor = "black";

  // Add the class

  heading.classList.add("newclass")
  heading.classList.add("born")

  //Remove the class
  heading.classList.remove("born")

  //Replace the class
  heading.classList.replace("newclass","main")