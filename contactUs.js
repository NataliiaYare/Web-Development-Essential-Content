// console.log("Script Loaded");

// // form nvalidation

// function validateForm() {
//   // reset previous error messages
//   document.getElementById("nameError").textContent = "";
//   document.getElementById("emailError").textContent = "";
//   document.getElementById("messageError").textContent = "";

//   // get form values
//   // The trim() function in JS is used to remove whitespace (spaces, tabs, and newlines) from both the beginning and the end of string. It is often used to clean up input or to remove unnecessary whitespace.
//   let name = document.getElementById("name").value.trim();
//   let email = document.getElementById("email").value.trim();
//   let message = document.getElementById("message").value.trim();

//   // validate name
//   if (name === "") {
//     document.getElementById("nameError").textContent = "Name is required";
//     return false;
//   }

//   // regular expression too check if the name contains only letters
//   let namePattern = /^[a-zA-Z\s]+$/;

//   //
//   if (!namePattern.test(name)) {
//     document.getElementById("nameError").textContent = "Only letters allowed";
//     return false; // You need to return false here to stop form submission
//   }

//   // counts the number of words
//   let wordCount = name.trim().split(/\s+/).length;

//   if (wordCount < 2) {
//     document.getElementById("nameError").textContent =
//       "Name must have at least two words";
//     return false;
//   }

//   // Validate email
//   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     document.getElementById("emailError").textContent = "Invalid email address";
//     return false;
//   }

//   // Validate message
//   if (message === "") {
//     document.getElementById("messageError").textContent = "Message is required";
//     return false;
//   }

//   // Form is valid, save data to local storage
//   saveDataLocally(name, email, message);

//   // If form is valid, save data and redirect
//   window.location.href = "./confirmation.html";
//   return false;

//   // Prevent the form from submitting traditionally
// }

// function saveDataLocally(name, email, message) {
//   // Create an object to represent the form data
//   let formData = {
//     name: name,
//     email: email,
//     message: message,
//   };

//   // Convert the object to a JSON string and save to local storage
//   localStorage.setItem("formData", JSON.stringify(formData));
// }

function Nav() {
  let mobileClick = document.getElementById("mobile_click");
  let mobileNav = document.querySelector("#mobile_nav");

  mobileClick.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
}
Nav();

// form validation
// validation
function validateForm() {
  // Reset previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  // Get form values
  // The trim() function in JavaScript is used to remove whitespace (spaces, tabs, and newlines) from both the beginning and the end of a string. It is often used to clean up user input or to remove unnecessary whitespace
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validate name

  // Validate name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    return false;
  }

  // Regular expression to check if the name contains only letters
  var namePattern = /^[a-zA-Z ]+$/;

  if (!namePattern.test(name)) {
    document.getElementById("nameError").textContent =
      "Name must contain only letters";
    return false;
  }

  // Counts the number of words
  var wordCount = name.trim().split(/\s+/).length;

  if (wordCount < 2) {
    document.getElementById("nameError").textContent =
      "Name must have at least two words";
    return false;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address";
    return false;
  }

  // Validate message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    return false;
  }

  // Form is valid, save data to local storage
  saveDataLocally(name, email, message);

  // Redirect to confirmation.html
  window.location.href = "confirmation.html";

  return false; // Prevent the form from submitting traditionally
}

function saveDataLocally(name, email, message) {
  // Create an object to represent the form data
  var formData = {
    name: name,
    email: email,
    message: message,
  };

  // Convert the object to a JSON string and save to local storage
  localStorage.setItem("formData", JSON.stringify(formData));
}
///////////////////////////////////// returning data from local storage to confirmation page ////////////////////////////////////////

// Retrieve data from local storage
var storedData = localStorage.getItem("formData");
// Display the stored data
if (storedData) {
  var parsedData = JSON.parse(storedData);
  document.getElementById("storedName").textContent = parsedData.name;
  document.getElementById("storedEmail").textContent = parsedData.email;
  document.getElementById("storedMessage").textContent = parsedData.message;
} else {
  document.getElementById("storedData").textContent = "No data stored.";
}
