<html>
  <body>
    <h4> Do you want to know my Name ( TimeOut methods : setTimeout and clearTimeout): Click the below button : </h4>
    <h5 id="myName"></h5>
    <button id="buttonclick">Click</button>
	<button id="stopButton">Stop</button>
    <br></br>

    <script>
      const clickButton=document.getElementById('buttonclick'); 
	  const stopButton=document.getElementById('stopButton'); 
	  const header=document.getElementById('myName');
	  let nameRef=null;
     
      const showMyName=()=>
      {
        myName.innerHTML = "Loading ....."
		nameRef=setTimeout(()=>{
		myName.innerHTML="Karan Raj Sinha";
		},3000)
      
      }
	   clickButton.addEventListener('click',showMyName); 
	   stopButton.addEventListener('click', ()=>{
	   clearTimeout(nameRef)
	   });
    </script>
  </body>
</html>;
