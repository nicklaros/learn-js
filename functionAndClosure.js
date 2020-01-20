// ----------------------------------------
// Function declaration
// named function and anonymous function
// ----------------------------------------
// function showMessage() {
//   console.log("Hello friends!");
// }

// const showMessage = () => {
//   console.log("Hello friends!");
// }

// ----------------------------------------
// Function parameters
// ----------------------------------------
// function showMessage(from, message) {
//   console.log(from + ": " + message);
// }

// ----------------------------------------
// String template
// ----------------------------------------
// function showMessage(from, message) {
//   console.log(`${from}: ${message}`);
// }

// ----------------------------------------
// Default value
// ----------------------------------------
// function showMessage(from, message) {
//   console.log(`${from}: ${message}`);
// }
// showMessage("Ali");

// function showMessage(from, message = "Empty message") {
//   console.log(`${from}: ${message}`);
// }
// showMessage("Ali");

// ----------------------------------------
// Passing undefined vs. other falsy values
// ----------------------------------------
// function showMessage(from, message = "Empty message") {
//   console.log(`${from}: ${message}`);
// }
// showMessage("Ali", undefined);
// showMessage("Ali", null);
// showMessage("Ali", "");

// ----------------------------------------
// Function call as default value
// ----------------------------------------
// let numberOfEmptyMessage = 0;

// function getDefaultMessage() {
//   numberOfEmptyMessage += 1;

//   return `Empty message - ${numberOfEmptyMessage}`;
// }

// function showMessage(from, message = getDefaultMessage()) {
//   console.log(`${from}: ${message}`);
// }
// showMessage("Ali");
// showMessage("Bummi");
// showMessage("Fauzi");
// showMessage("Eko");

// ----------------------------------------
// Parameters are available to later default parameters
// ----------------------------------------
// function showMessage(from, message = `Empty message from ${from}`) {
//   console.log(`${from}: ${message}`);
// }
// showMessage("Ali");

// ----------------------------------------
// Returning value
// ----------------------------------------
// function add(number1, number2) {
//   return number1 + number2;
// }
// const result = add(3, 5);
// console.log(result);

// ----------------------------------------
// Returning function
// ----------------------------------------
// function addGenerator(numberToAdd) {
//   return function add(number) {
//     return numberToAdd + number;
//   };
// }

// const addFive = addGenerator(5);

// const result1 = addFive(3);
// console.log(result1);

// const result2 = addFive(10);
// console.log(result2);

// const result3 = addFive(50);
// console.log(result3);

// ----------------------------------------
// Closure - Lexical scoping
// ----------------------------------------
function counterGenerator(numberToAdd) {
  let state = 0;

  return function count() {
    return state++;
  };
}

const letsCount = counterGenerator();
console.log(letsCount());
console.log(letsCount());
console.log(letsCount());
