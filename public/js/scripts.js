// Hamburger Menu

const { addListener } = require("../../models/outreach-model");

// alert("OMG- Are you ready to see what's going on in this realm of cosmic deliciousness? If you're ready, click ok!");
// console.log("You're doing a great job, Kit");

// DOM Event Steps:

// 1. select hamburger icon --> event target
const hamburgerIcon = document.querySelector(".menu");
const navUl = document.querySelector(".nav-bar");

// 2. event handler --> show/hide

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
hamburgerIcon.addEventListener("click", () => {
    console.log("this has been clicked");
    navUl.classList.toggle("open-sesame");
});

// Date Method Test --> works 5/2
// let currentDate = Date();
// alert (currentDate);

// Post-Grad Button Functionality
// 11/26/2022: alert when delete
let deleteButton = document.getElementById("delete-button");
function deleteAlert() {
  let warning;
  if (confirm("Are you sure you want to delete me?")) {
    alert(warning = "Pressing OK means this will be deleted. If unsure, message Kit for help.");
  } else {
    alert(warning = "You've decided to cancel this action.");
  }
}
// 11/18/2022: https://www.w3schools.com/JSREF/prop_pushbutton_disabled.asp
// disable button to block entry
function blockedButton() {document.getElementById("blocked-button").disabled = true; 
}
// figure this out 

//Get the button
let scrollbutton = document.getElementById("scroll-button");

// When the user scrolls down 2px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // 200 works
    // limit
  if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}