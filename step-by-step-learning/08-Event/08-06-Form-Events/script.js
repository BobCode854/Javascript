/**
 *   **************   Event Delegation ********************************
 *   
 *      
 */
  let form = document.querySelector('.signup-form');
  console.log(form)

  
  form.addEventListener('submit',function(e){
    e.preventDefault();
  console.log("form submitted successfully")

    // get the data

    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    console.log( " Get data from element using querySelector : ")
    console.log("Email : "+email.value);
    console.log("Password : "+password.value)

    // get data from form object

    console.log( " Get data from form object directly : ")
    let emailFromForm = form.email.value;
    let passwordFromForm = form.password.value;

    console.log("Email from form "+emailFromForm);
    console.log("Password from form:"+passwordFromForm)
  })



   

