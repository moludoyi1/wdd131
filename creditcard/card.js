function selectYear() {
  let currentYear = new Date().getFullYear();
  for (let i = currentYear; i <= currentYear + 10; i++) {
    document.querySelector("#expirationYear").innerHTML += ("<option value='" + i + "'>" + i + "</option>");
  }
}

// document.getElementById('creditCardForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted!');
// });


document.addEventListener("DOMContentLoaded", selectYear);