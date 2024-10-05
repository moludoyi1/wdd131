import { articles } from "./blog.js"; // import articles from blog.js

// Function to build articles from the array
function displayArticles() {
  const articlesContainer = document.querySelector(".book-review");

  articles.forEach((article) => {
    // Create a new article element
    const articleElement = document.createElement("article");

    // Template literal for article HTML
    articleElement.innerHTML = `
      <ul class="details-container">
      <p class="date">${article.date}</p>
        <li>Age: ${article.ages}</li>
        <li>Genre: ${article.genre}</li>
      </ul>
      <div>
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description}</p>
      </div>
      `;

    // Append the new article to the container
    articlesContainer.appendChild(articleElement);
  });
}

document.addEventListener("DOMContentLoaded", displayArticles);
