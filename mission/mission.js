// Select the dropdown for theme changing
const themeSelector = document.querySelector('#theme');

// Select the body element
const bodyElement = document.body;

// Select the logo
const logo = document.querySelector('.footer-img');

// Function to change the theme
function changeTheme() {
    // Check if the selected option is "dark"
    if (themeSelector.value === 'dark') {
        // Add the "dark" class to the body
        bodyElement.classList.add('dark');
        // Change the logo to the white version
        logo.src = 'byui-logo_dark.png';
    } else {
        // If not dark, remove the "dark" class
        bodyElement.classList.remove('dark');
        // Change the logo back to the blue version
        logo.src = 'byulogo_img.webp';
    }
}

// Add event listener for the theme selector
themeSelector.addEventListener('change', changeTheme);
