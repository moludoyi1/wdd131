'use strict';  // Add 'use strict' to the top of the script to prevent certain errors.

const one = 1;
const two = "2";  // 'two' is a string "2".
const three = "e";  // 'three' is a string "e".
let result = one + two;  // Adding a number and a string will concatenate them as a string.
console.log(result);  // This logs "12".
output("ln7", result);

// Manually change the type of the string "2" into a number using parseInt.
result = one + parseInt(two);  // This will correctly add 1 and 2, resulting in 3.
output("ln10", result);

// We didn't get any output from line 9 above. That's because the output function is writing to the DOM, not the console.
// To view the output, ensure you have an HTML element with the class ".output" in your document.
// If you don't see anything in the output, check the console for errors.

// Let's try multiplication.
result = one * two;  // JavaScript will coerce the string "2" into a number, so this will result in 2.
output("ln16", result);

// The result should be 2, which is expected since JavaScript converted the string "2" to the number 2.

// What about this?
result = one * three;  // "e" cannot be converted into a number, so the result will be NaN (Not-a-Number).
output("ln21", result);
// NaN means "Not a Number", which occurs when you try to perform a numeric operation with a non-numeric value.

// Let's try changing the value of two.
let too = 4;  // Use 'let' or 'var' to declare new variables. 'too' was not declared, which causes an error in strict mode.

result = one + too;  // This will now correctly add 1 + 4, which is 5.
output("ln27", result);

// We got the value we expected, 5. The reason it didn’t work before was because 'too' was not declared, which caused a reference error in strict mode.

const myArray = [1, 2, 3, 5];
// Add the number 4 to the end of the array.
myArray.push(4);  // This adds 4 to the end of the array.

console.log(myArray);  // Logs [1, 2, 3, 5, 4].

// Let's remove the last two items and then add them back in the correct numerical order.
myArray.pop();  // Remove the last item (4).
myArray.pop();  // Remove the second last item (5).
myArray.push(4);  // Add 4 to the end.
myArray.push(5);  // Add 5 to the end.

console.log(myArray);  // Logs [1, 2, 3, 4, 5].


// The code below is used to aid in displaying the results.
function output(line, content) {
  const outputElement = document.querySelector(".output");
  if (outputElement) {
    outputElement.innerHTML += `<p>${line} : ${content}</p>`;
  } else {
    console.log(`${line} : ${content}`);
  }
}
