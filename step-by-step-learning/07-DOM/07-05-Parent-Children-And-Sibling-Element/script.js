/**
 *   **************   DOM Manipulation ********************************
 *   
 *      
 */

/**  
 *    Parent, Children, And Sibling Element
 * 
 * */ 


//Access the parent and then children

let parent =  document.querySelector('.parent');
  console.log(parent)

  //get children
  console.log(parent.children) 

  /**
   *      **)  As parent.children will return HtmlCollection on which we cannot iterate . 
   *      **)  We will have separate method called Arrays.from(htmlCollection) , convert to array
   *  */ 

  let htmlCollectionArray = Array.from(parent.children);
  htmlCollectionArray.forEach((element)=>{
    element.classList.add("hi")
  })
 
  // get parent from children

  let children = document.querySelector('.child');
  console.log(children.parentElement);

  // find next sibling
  console.log(children.nextElementSibling);

  // previous element sibling

  console.log(children.previousElementSibling)