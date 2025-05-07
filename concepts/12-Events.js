/*

 ***********  EVENTS *************************
    There are basically 4 ways of writing Events
    --------------------------------------------

    -) alert ();
    -) By Calling a function ()
    -) using Inline Events (0nclick="")
    -) using Event Listener (addEventListener)


*/

<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
</head>
<body>
<div class="container bg-info">

  <button type="button" class="btn btn-success" onClick="changeContent()">Simple Inline alert</button>
  <button type="button" class="btn btn-success" onClick="changeContent()">By Calling a function</button>
  <button type="button" class="btn btn-success" onClick="changeContent()">Inline Event</button>
  <button type="button" class="btn btn-success" onClick="changeContent()">Event Listeners</button>
  
  </div>
  <script>
  function changeContent(){

  }
  </script>
 <script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

 </script>
	 
</body>
</html>