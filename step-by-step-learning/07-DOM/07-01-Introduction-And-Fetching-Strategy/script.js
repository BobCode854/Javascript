/**
 *   **************   DOM Manipulation ********************************
 *   
 *      
 */

/**  
 *     Getting HTML element using querySelector / querySelectorAll
 * 
 * */ 

  // Access element using tag

  let result_For_P_Tag = document.querySelector('p'); // get first occurence of p tag
  console.log(result_For_P_Tag)

  let result_For_Fetch_Multiple_P_Tag = document.querySelectorAll('p');
  console.log(result_For_Fetch_Multiple_P_Tag); // It will return Node List

  
  //Access element by class

  let result_by_class = document.querySelector('.box');
  console.log(result_by_class)

  // Access element by Id

  let result_by_id = document.querySelector('#main-section');
console.log(result_by_id)


/**
 *     Other ways to get Html Element
 * =============================
 *  Most convenient   === querySelector .. It will return node on which we can iterate.
 *   
 *  Others
 * ========
 *   getElementsByTagName    // these will return html collection on which we cannot iterate.
 *    getELementsByClassName
 *   
 *  getElementById  // This will return single element
 */

let getElementByTagName = document.getElementsByTagName('div');
console.log(getElementByTagName[0])

let getElementByClassName = document.getElementsByClassName('highlight');
console.log(getElementByClassName);

let getElementObjectById = document.getElementById('page-footer');
console.log(getElementObjectById);