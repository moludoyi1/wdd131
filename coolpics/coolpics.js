const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide"); // Toggle the 'hide' class
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide"); // Show the menu on wider screens
    } else {
        menu.classList.add("hide"); // Hide the menu on narrower screens
    }
}

// Add an event listener to the menu button
menuButton.addEventListener("click", toggleMenu);

// Add resize event listener to the window
window.addEventListener("resize", handleResize);

// Call handleResize immediately to set the correct menu visibility on page load
handleResize();