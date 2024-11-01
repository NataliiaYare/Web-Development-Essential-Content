// console.log("Script Loaded");

// // form validation

// function validateForm() {
//   // reset previous error messages
//   document.getElementById("nameError").textContent = "";
//   document.getElementById("emailError").textContent = "";
//   document.getElementById("messageError").textContent = "";

//   // new part
//   let isValid = true;

//   // get form values
//   // The trim() function in JS is used to remove whitespace (spaces, tabs, and newlines) from both the beginning and the end of string. It is often used to clean up input or to remove unnecessary whitespace.
//   let name = document.getElementById("name").value.trim();
//   let email = document.getElementById("email").value.trim();
//   let message = document.getElementById("message").value.trim();

//   // validate name
//   // regular expression too check if the name contains only letters
//   let namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
//   if (!namePattern.test(name)) {
//     document.getElementById("nameError").textContent =
//       "Name must contain only letters and have at least two words";
//     isValid = false;
//   }

//   // Email validation
//   let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!emailPattern.test(email)) {
//     document.getElementById("emailError").textContent = "Invalid email address";
//     isValid = false;
//   }

//   // Validate message
//   if (message === "") {
//     document.getElementById("messageError").textContent = "Message is required";
//     isValid = false;
//   }
//   if (isValid) {
//     window.location.href = "confirmation.html";
//   }

//   return isValid;

//   //   // Form is valid, save data to local storage
//   //   saveDataLocally(name, email, message);

//   //   // If form is valid, save data and redirect
//   //   window.location.href = "./confirmation.html";
//   //   return false;

//   //   // Prevent the form from submitting traditionally
//   // }

//   // function saveDataLocally(name, email, message) {
//   //   // Create an object to represent the form data
//   //   let formData = {
//   //     name: name,
//   //     email: email,
//   //     message: message,
//   //   };

//   //   // Convert the object to a JSON string and save to local storage
//   //   localStorage.setItem("formData", JSON.stringify(formData));
// }
function validateForm() {
  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  let isValid = true;

  // Get form values and use trim() function to remove whitespace
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Name validation: Allow letters, apostrophes, hyphens, and at least two words
  const namePattern = /^[a-zA-Z]+([ '-][a-zA-Z]+)* [a-zA-Z]+([ '-][a-zA-Z]+)*$/;
  if (!namePattern.test(name)) {
    document.getElementById("nameError").textContent =
      "Name must contain only letters, and at least two words";
    isValid = false;
    console.log("Name validation failed");
  }

  // Email validation: simple regex to check the format of the email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address";
    isValid = false;
    console.log("Email validation failed");
  }

  // Message validation: field must not be empty
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
    console.log("Message validation failed");
  }

  // Form is valid, save data to local storage

  saveDataLocally(name, email, message);

  // If the form is valid, redirect to the confirmation page
  if (isValid) {
    console.log("Form is valid. Redirecting...");
    window.location.href = "/confirmation_page.html"; // Redirect to confirmation page
  } else {
    console.log("Form is invalid. No redirect.");
  }

  // Prevent form submission if validation fails
  return isValid;

  function saveDataLocally(name, email, message) {
    // Create an object to represent the form data

    let formData = {
      name: name,
      email: email,
      message: message,
    };

    // Convert the object to a JSON string and save to local storage
    localStorage.setItem.getItem("formData", JSON.stringify(formData));

    // Retrieve datafrom local storage
    let storedData = localStorage.getItem("formData");

    // Display the stored data
    if (storedData) {
      let parsedData = JSON.parse(storedData);
      document.getElementById("storedName").textContent = parsedData.name;
      document.getElementById("storedEmail").textContent = parsedData.email;
      document.getElementById("storedMessage").textContent = parsedData.message;
    } else {
      document.getElementById("storedData").textContent = "No data stored.";
    }
  }
}
