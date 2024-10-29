import { services } from "./services.js";

// function to generate service elements
function generateServiceElements(services) {
  const serviceContainer = document.querySelector(".services_container");

  services.forEach((service) => {
    const serviceTemplate = getServiceTemplate(service);
    serviceContainer.innerHTML += serviceTemplate;
  });
}
generateServiceElements(services);

function getServiceTemplate(service) {
  // <img alt ="${service.name}" src="${service.img}" />
  return `
    <a href="/book_form">
      <div class="we-card"> 
        <img  alt="${service.name}" src="${service.img}" />
          <h3>${service.name}</h3>
          <p>${service.price}</p>
      </div>    
    </a>
    `;
}

function createCarousel() {
  let currentCardIndex = 0;
  const cards = document.querySelectorAll(".we-card");
  const totalCards = cards.length;

  function updateCarousel() {
    // Remove all the previous classes
    cards.forEach((card) => {
      card.classList.remove(
        "active",
        "prev-1",
        "next-1",
        "prev-2",
        "next-2",
        "prev-3",
        "next-3"
      );
    });

    // Add the relevant classes to the current and surrounding cards
    cards[currentCardIndex].classList.add("active");

    const prevIndex_1 = (currentCardIndex - 1 + totalCards) % totalCards;
    const nextIndex_1 = (currentCardIndex + 1) % totalCards;
    const prevIndex_2 = (currentCardIndex - 2 + totalCards) % totalCards;
    const nextIndex_2 = (currentCardIndex + 2) % totalCards;
    const prevIndex_3 = (currentCardIndex - 3 + totalCards) % totalCards;
    const nextIndex_3 = (currentCardIndex + 3) % totalCards;

    cards[prevIndex_1].classList.add("prev-1");
    cards[nextIndex_1].classList.add("next-1");
    cards[prevIndex_2].classList.add("prev-2");
    cards[nextIndex_2].classList.add("next-2");
    cards[prevIndex_3].classList.add("prev-3");
    cards[nextIndex_3].classList.add("next-3");
  }

  updateCarousel();

  // Handle right button click
  document.querySelector(".right").addEventListener("click", function () {
    currentCardIndex = (currentCardIndex + 1) % totalCards;
    updateCarousel();
  });

  // Handle left button click
  document.querySelector(".left").addEventListener("click", function () {
    currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    updateCarousel();
  });
}

createCarousel();

// smooth scrolling for navigation links
// When a user clicks on one of the navigation links (e.g., "Services," "About," "Contact"), we can smoothly scroll to the respective section of the page.
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // e.preventDefault();
    const targetID = this.getAttribute("href").substring(1); // Remove the '#' from the href
    const targetSection = document.getElementById(targetID);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// sticky navigation
// We want the navigation bar to stick to the top of the page when the user scrolls down.
const header = document.querySelector("header");
const stickyNav = () => {
  const scrollY = window.scrollY;
  if (scrollY > header.offsetHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
window.addEventListener("scroll", stickyNav);

// Interactive Button Effects (for "Book Now")
// When the user hovers over the "Book Now" button, we want it to change color
const bookBtn = document.querySelector(".book-btn");
// bookBtn.addEventListener("click", function () {
//   alert("Booking feature coming soon!");
// });

// Back-to-Top Button
const backToTopButton = document.createElement("button");
const footer_btn = document.querySelector(".back2top_btn");
backToTopButton.textContent = "Back to Top";
backToTopButton.classList.add("back-to-top");
footer_btn.appendChild(backToTopButton);

// Show or hide the back-to-top button based on scroll position
const toggleBackToTop = () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
window.addEventListener("scroll", toggleBackToTop);

// Smooth scroll to top when the back-to-top button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Initially hide the back-to-top button
backToTopButton.style.display = "none";

//booking form validation

// function to handle submission
function handleFormSubmit(event) {
  // prevent default form submission
  event.preventDefault();

  //check if the form is valid
  if (event.target.checkValidity()) {
    // if the form is valid, send the form data to the server
    alert("Thank you for booking! We’ll contact you soon.");

    //reset the form after successful submission
    event.target.reset();
  } else {
    //if form is invalid, display an alert
    alert("Please fill out all fields correctly.");
  }
}

//attach the event listener to the form
document
  .querySelector("bookingForm")
  .addEventListener("submit", handleFormSubmit);

// document.getElementById("bookingForm").addEventListener("submit", function(event) {
//   event.preventDefault();
//   alert("Thank you for booking! We’ll contact you soon.");
//   this.reset();
// });

document.getElementById("phone").addEventListener("input", function () {
  const phoneNumber = this.value;
  if (!isValidPhoneNumber(phoneNumber)) {
    this.setCustomValidity("Please enter a valid 10-digit U.S. phone number.");
  } else {
    this.setCustomValidity("");
  }
});

document
  .getElementById("#bookForm")
  .addEventListener("submit", function (event) {
    const phoneNumber = document.getElementById("phone").value;
    if (!isValidPhoneNumber(phoneNumber)) {
      event.preventDefault();
      alert("Please enter a valid 10-digit U.S. phone number.");
    }
  });

// // A function to check if the phone number is valid
// function isValidPhoneNumber(phoneNumber) {
//   // Normalize the phone number by removing non-digit characters
//   const normalizedNumber = phoneNumber.replace(/\D/g, '');

//   // Define a pattern for a valid phone number (10 digits)
//   const phonePattern = /^\d{10}$/;

//   // Check if the normalized number matches the pattern
//   return phonePattern.test(normalizedNumber);
// }
