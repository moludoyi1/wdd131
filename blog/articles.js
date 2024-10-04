import{articles} from  './blog.js'; // import articles from blog.js

document.addEventListener("DOMContentLoaded", () => {
    const articlesContainer = document.querySelector("#articles-container");

    // Function to build articles from the array
    function displayArticles() {
        articles.forEach(article => {
            // Create a new article element
            const articleElement = document.createElement("article");

            // Template literal for article HTML
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p class="date">${article.date}</p>
                <ul class="details-container">
                    <li>Author: ${article.author}</li>
                </ul>
                <img src="${article.image}" alt="${article.title}">
                <p>${article.description}</p>
            `;

            // Append the new article to the container
            articlesContainer.appendChild(articleElement);
        });
    }

    // Call the function to display articles
    displayArticles();
});
