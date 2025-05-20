/**
 *   **************   Event Delegation ********************************
 *   
 *      
 */
document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("You clicked on: " + event.target.textContent);
  }
});

