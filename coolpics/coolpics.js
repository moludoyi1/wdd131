const menuButton = document.querySelector(".menu-button"); // select the menu button
const menu = document.querySelector(".menu");
// const gallery = document.querySelector(".gallery");

// function to toggle the visibilty of the menu
function toggleMenu() {
    menu.classList.toggle("hide"); // Toggle the 'hide' class
}

// Function to handle window resize events
function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide"); // Show the menu on wider screens
    } else {
        menu.classList.add("hide"); // Hide the menu on narrower screens
    }
}

// Call handleResize immediately to set the correct menu visibility on page load
handleResize();
window.addEventListener("resize", handleResize);

// Function to create viewer template for modal
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button> <!-- Close button -->
        <img src="${pic}" alt="${alt}"> <!-- Image to display -->
    </div>`;
}

const modalImage = document.querySelector("#modal-image"); // select the modal image
const closeViewerButton = document.querySelector(".close-viewer"); //  select the close viewer button

// Show the image in the modal
function showImage(src) {
    modalImage.src = src;
    viewer.classList.remove("hide"); // Show the modal
}

// Close the modal
function closeModal() {
    viewer.classList.add("hide"); // Hide the modal
}

// Add click event to gallery images
const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        const fullImageSrc = thumbnail.dataset.full; // Get full image URL from data attribute
        showImage(fullImageSrc);
    });
});

// Add event listener to close button
closeViewerButton.addEventListener("click", closeModal);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}
// function close

// Add an event listener to the menu button
menuButton.addEventListener("click", toggleMenu);
// Add resize event listener to the window
window.addEventListener("resize", handleResize);

// gallery.addEventListener("resize", handleResize);