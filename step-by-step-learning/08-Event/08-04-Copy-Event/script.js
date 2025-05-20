/**
 *   **************   Event Delegation ********************************
 *   
 *      
 */
  let description = document.querySelector('#location');
  console.log(description)

  description.addEventListener('copy',function(e){
    description.style.backgroundColor='red'; // change style on element
     e.target.style.backgroundColor = 'red';  // change style by fetching event 
    alert("You cannot copy the content, copyright issue")
  })

   

