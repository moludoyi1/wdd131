// const newParagraph = document.createElement("p");
// newParagraph.innerText = "Added with Javascript!";
// document.body.appendChild(newParagraph);

// Lets add some content to the body. This will be much easier in a javascript file.

const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/200/300";
document.body.append(newImg);

//Try adding an image. We would need to create the img element, then set the src and alt attributes, and finally append the image to the body.

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "A random image");
document.body.appendChild(newImg);

// Step 4 #
// Try it on your own.

// Create a new section element.
// Add an h2 element with the content "DOM Basics"
// Add a paragraph p that says: "This was added through Javascript"
// Add your section to the body.
const newSection =  document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "This was added through Javascript";
newSection.appendChild(newP);
document.body.appendChild(newSection);