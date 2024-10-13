// function selectYear() {
//   let currentYear = new Date().getFullYear();
//   for (let i = currentYear; i <= currentYear + 10; i++) {
//     document.querySelector("#expirationYear").innerHTML +=
//       "<option value='" + i + "'>" + i + "</option>";
//   }
// }

// // document.getElementById('creditCardForm').addEventListener('submit', function(event) {
// //     event.preventDefault();
// //     // Handle form submission here
// //     console.log('Form submitted!');
// // });

// document.addEventListener("DOMContentLoaded", selectYear);

// Function to check if the card number is valid
function isCardNumberValid(number) {
  // For now, we accept only one valid number for simplicity
  return number === "1234123412341234";
}

// Function to display an error message
function displayError(msg) {
  // Display the error message in the errorMsg <p> element
  document.querySelector(".errorMsg").innerHTML = msg;
}

// Function to handle form submission
function submitHandler(event) {
  event.preventDefault(); // Stop the form from reloading the page

  // Clear previous errors
  displayError("");

  // Fetch values from the form fields
  const cardNumber = this.cardNumber.value;
  const expDate = this.expdate.value;

  let errorMsg = ""; // Initialize an empty error message string

  // Check if the card number is a valid number
  if (isNaN(cardNumber)) {
    errorMsg += "Card number is not a valid number<br>";
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += "Card number is not a valid card number<br>";
  }

  // Check if the expiration date is in the future
  const today = new Date();
  const enteredDate = new Date(expDate);
  if (enteredDate < today) {
    errorMsg += "Expiration date cannot be in the past<br>";
  }

  // If there are errors, stop the form submission and display the error messages
  if (errorMsg !== "") {
    displayError(errorMsg);
    return false;
  }

  // If no errors, submit the form (or process it further)
  return true;
}

// Add event listener to the form for handling submission
document
  .querySelector("#credit-card")
  .addEventListener("submit", submitHandler);
