/**
 *   **************   Events ********************************
 *   
 *      
 */

 // Fetch the button

 let button = document.querySelector('.button');

 // add event , like on click what should happen

 button.addEventListener('click',function(){
  console.log("You clicked the button"); // this callback function will execute when you click the button.
 })

 // on multiple elements

 let all_li_element = document.querySelectorAll('li');
 
 all_li_element.forEach(function(element){
  // In order to add event we will have to first find individual element

  element.addEventListener('click',function(e){ // Now add event listener to each element
      console.log(e)
      e.target.style.textDecoration= 'line-through'
  })
 })


 // remove element on event

 all_li_element.forEach(function(element){
  // In order to add event we will have to first find individual element

  element.addEventListener('click',function(e){ // Now add event listener to each element
      console.log(e)
      e.target.remove();
  })
 })

 // add element on event
  let parent = document.querySelector('ul');  //where you have to add find it.
  let buttonq = document.querySelector('.check'); // on button click I want to add
   
  buttonq.addEventListener('click',function(){
      let element = document.createElement('li');  // created the element which I have to add
      element.textContent = " Hi Karan";   // adding some text to empty element
      parent.append(element); // appended to ul element If I want to add at bottom
      parent.prepend(element); // append at top
  })