//  arrays.js

// Activity 1: Map
const steps = ["one", "two", "three"];
function listTemplate(step){
  return `<li><a href="somepage.html"> ${step} </a></li>`; //converts each step to a list item
}
const stepsHtml = steps.map// map function to convert each step to a list item

document.querySelector("#myList").innerHTML = stepsHtml.join() // join the list of HTML strings into a single string

// Activity 2: Map

//Declare an array with letter grades in it: ['A', 'B', 'A']
const grades = ['A', 'B', 'A'];
// Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in 'A' it should return 4.
function convertGradeToPoints(grade){
    let points = 0;
    if (grade === 'A'){
        points = 4;
    } else if (grade === 'B'){
        points = 3;
    }
    return points;
}
// Use map and our conversion function to convert the array in step 1 to gpa points.
const points = grades.map(convertGradeToPoints);
console.log(points);

// Activity 3: Reduce
// reduce is useful when we need to compress an array into a single value. It is most often used when the array has at least one value that can be mathematically flattened

// 1 - Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
// 2 - Using reduce calculate the GPA from the array of gpaPoints.
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;