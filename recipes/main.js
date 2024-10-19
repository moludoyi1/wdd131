// Import the list of recipes from recipes.js into main.js
import { recipes } from './recipes.js';

// Function to generate a random number >= 0 and < num
function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}

// Function that returns a random recipe
function getRandomRecipe(recipes) {
    const randomNum = getRandomNum(recipes.length);
    return recipes[randomNum];
}

// Function to generate HTML for a recipe
function generateRecipeHTML(recipe) {
    return `
        <section class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipes-informations">
            <div class="tag-names">
                ${recipe.tags.map(tag  => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <h2>${recipe.name}</h2>
            <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${generateRatingHTML(recipe.rating)}
            </div>
                <div class="recipe-details">
                    <p class="description">${recipe.description}</p>
                    <div class="ingredients">
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Function to generate HTML for recipe tags
function generateTagsHTML(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
}

// Function to generate stars for rating
function generateRatingHTML(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            stars += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    return stars;
}

// Function to render the list of recipes
function renderRecipes(recipeList) {
    // Get the element we will output the recipes into
    const recipeContainer = document.getElementById('recipe-container');

    // Use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeHTML = recipeList.map(generateRecipeHTML).join('');

    // Set the HTML strings as the innerHTML of our output element.
    recipeContainer.innerHTML = recipeHTML;
}

// Function to filter recipes based on the query
function filterRecipes(query) {
    // Filter the recipes based on the query
    const filtered = recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase().includes(query);
        const recipeDescription = recipe.description.toLowerCase().includes(query);
        const recipeTags = recipe.tags.some(tag => tag.toLowerCase().includes(query));
        const recipeIngredients = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query));
        
        return recipeName || recipeDescription || recipeTags || recipeIngredients;
    });

    // Sort the filtered recipes by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

// Event handler for the search button
function searchHandler(e) {
    e.preventDefault(); // Prevent page reload
    console.log("hello")

    // Get the search input value
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();

    // Use the filter function to filter our recipes
    const filteredRecipes = filterRecipes(query);

    // Render the filtered list
    renderRecipes(filteredRecipes);
}

// Initialize function to get a random recipe and render it
function init() {
    // Get a random recipe
    const recipe = getRandomRecipe(recipes);

    // Render the recipe with renderRecipes
    renderRecipes([recipe]);
}

// Attach event listener to the search button
document.querySelector('.search-form').addEventListener('submit', searchHandler);

// Call the init function to kick things off
init();
