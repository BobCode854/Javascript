/**
 *   **************   Event Bubbling ********************************
 *   
 *      
 */

document.getElementById("child").addEventListener("click", function () {
    console.log("Child Button Clicked");
  });

  document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent Div Clicked (Bubbling)");
  });

  // Without calling parent event , It is captured by child event