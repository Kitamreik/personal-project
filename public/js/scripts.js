// EXPLORE: https://stackoverflow.com/questions/63681387/how-do-i-transfer-data-from-console-log-to-a-json-file 

//  dark mode testing
// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "light");

  // Get our button switcher
  const themeSwitcher = document.getElementById("theme-switcher");

  // When our button gets clicked
  themeSwitcher.onclick = function() {
    // Get the current selected theme, on the first run
    // it should be `light`
    const currentTheme = document.documentElement.getAttribute("data-theme");

    // Switch between `dark` and `light`
    const switchToTheme = currentTheme === "dark" ? "light" : "dark"

    // Set our current theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
  }
});

// Hamburger Menu
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

// 4-2-23: 2nd layer of auth
// 5-23-23: disabing for auth, good to test locally
/*
let adminCredentials = document.getElementById("admin-credentials");
function adminTrigger() {
  let danger = "There has been an error. If you are a student having trouble logging in, please reach out to Kit. You do not have the correct credentials. This page will now render in an infinite loop.";
  let auth = "Request authenticated. Now loading...";

  if (confirm("Prompt loading...")) {
    let confirm = prompt("Please enter the secret passcode now.");
    let record = confirm;
    let passcode = "cookie";
    while (record) {
      if (record === !passcode) {
        alert(danger);
      } else if (record === passcode) {
        // once past, user can see the entries
        alert(auth);
        break;
      } else {
        alert(danger);
      }
    }
    i++;
}};
*/ 


// form confirmation
// for the outreach form
let redirection = document.getElementById("redirect");
function returnHomeET() {
  if (confirm("Your form entry has been received. You will be redirected to the form submission page. Click ok.")) {
    // POST confirmation
    
  }
}

// for the update
let validation = document.getElementById("verify");
function confirmUpdateData() {
  if (confirm("This entry has successfully been updated from the database. You will be redirected to the form submission page. Click ok.")) {
    // update conformation
  }
}

let erase = document.getElementById("bye-bye");
function confirmDeleteData() {
  if (confirm("This entry has successfully been wiped from the database. You will be redirected to the admin-console. Click ok.")) {
    // delete conformation
  }
}

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

function errorAlert() {
  let error;
  if (confirm("You've been guided here from the server. Please click OK")) {
    alert( error = "Please click the Back to Index Button");
  } else {
    alert("Please reach out to Kit for assistance");
  }
}

// 11/18/2022: https://www.w3schools.com/JSREF/prop_pushbutton_disabled.asp
// disable button to block entry

// solved 2/15/2023
function blockedButton() {
  let block;
  if (confirm("This is out of service.")) {
    alert(block ="Thank you!")
  }
  document.getElementById("blocked-button").disabled = true; 
}


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

//Oct 2024 - JS for Card Flipping
const card = document.getElementById("card")

card.addEventListener("click", flipCard)

function flipCard() {
  card.classList.toggle("flipCard")
}