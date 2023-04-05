// built in function for JS, used to set a timer 
// method takes 2 parameters. One is a function, 2nd is delay --> a number, is optional
setTimeout(() => {
  timer = 6000;
  if (timer === 6000) {
    // second, then run the message
  alert("Hello and welcome to the website!");

  // clean up the function
  console.warn("the setTimeout function has been cleaned up")
  return clearTimeout(timeoutId);
  } else {
    alert("The site is under maintenance. Please come back later.")
  }
 
}, 6000); // first you wait 5 seconds --> 5000 milliseconds = 5 seconds