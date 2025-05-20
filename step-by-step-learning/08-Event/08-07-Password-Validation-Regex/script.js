/**
 *   **************   Event Delegation ********************************
 *   
 *      
 */
  let form = document.querySelector('.signup-form');
 // console.log(form)


  // Password regex: min 8 chars, at least 1 lowercase, 1 uppercase, 1 digit
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let password = form.password.value;
    console.log("password :"+form.password.value)

     if(!passwordPattern.test(password)){
         alert("Weak password . Follow the rules")
     }

  })

  // Key-Up Event , while writing it will tell whether the entering matches the pattern or not.

  let email = document.querySelector('#email');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  email.addEventListener('keyup',(e)=>{
    if(emailPattern.test(e.target.value)){
        e.target.style.border="5px solid green"
         console.log("Success");
         email.setAttribute('class','success'); // adding a success class for styling
    }
    else{
       e.target.style.border="5px solid red"
      console.log("failed")
      email.setAttribute('class','failed')
    }
  })
