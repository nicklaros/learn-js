// ----------------------------------------
// Function declaration and function expression
// named function and anonymous function
// ----------------------------------------
// function showMessage() {
//   console.log("Hello friends!");
// }

// const showMessage = function() {
//   console.log("Hello friends!");
// };

// const showMessage = () => {
//   console.log("Hello friends!");
// };

// showMessage();

// ----------------------------------------
// Function declaration  can be called before actual declaration
// while function expression can not
// ----------------------------------------
// showMessage();

// function showMessage() {
//   console.log("Hello friends!");
// }

// const showMessage = function() {
//   console.log("Hello friends!");
// };

// const showMessage = () => {
//   console.log("Hello friends!");
// };

// ----------------------------------------
// `this` on named function and anonymous function
// ----------------------------------------
// function showMessage() {
//   console.log(this.process.env);
// }

// const showMessage = function() {
//   console.log(this);
// };

// const showMessage = () => {
//   console.log(this);
// };

// showMessage();

// ----------------------------------------
// Function parameters
// ----------------------------------------
// function showMessage(from, message) {
//   console.log(from + ": " + message);
// }

// showMessage("Eko", "Hello world");

// ----------------------------------------
// String template
// ----------------------------------------
// function showMessage(from, message) {
//   console.log(`${from}: ${message}`);
// }

// showMessage("Eko", "Hello world");

// ----------------------------------------
// Default value
// ----------------------------------------
// function showMessage(from, message) {
//   console.log(`${from}: ${message}`);
// }
// showMessage("Ali", null);

// function showMessage(from, message = "Empty message") {
//   console.log(`${from}: ${message}`);
// }
// showMessage("Ali");

// ----------------------------------------
// Passing undefined vs. other falsy values
// ----------------------------------------
function showMessage(from, message = "Empty message") {
  console.log(`${from}: ${message}`);
}
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
// const addTen = addGenerator(10);
// const addTwenty = addGenerator(20);

// const result1 = addFive(3);
// console.log(result1);

// const result2 = addFive(10);
// console.log(result2);

// const result3 = addFive(50);
// console.log(result3);

// ----------------------------------------
// Closure - Lexical scoping
// ----------------------------------------
// function counterGenerator() {
//   let state = 0;

//   return function count() {
//     return state++;
//   };
// }

// const letsCount = counterGenerator();
// const letsCount2 = counterGenerator();
// console.log(letsCount());
// console.log(letsCount());
// console.log(letsCount());
// console.log(letsCount2());
// console.log(letsCount2());
// console.log(letsCount2());

// ----------------------------------------
// Function as arguments
// ----------------------------------------
// const checkAge = (age, onAdult, onChild) => {
//   if (age > 17) {
//     onAdult();
//   } else {
//     onChild();
//   }
// };

// const onAdultCallback = () => console.log("You are adult. Go ahead!");
// const onChildCallback = () => console.log("Ups, please comeback later");

// console.log(checkAge(15, onAdultCallback, onChildCallback));
// console.log(checkAge(19, onAdultCallback, onChildCallback));

// ----------------------------------------
// How to name a function
// ----------------------------------------
// - brief
// - describe what function does

// showMessage(..)     // shows a message
// getAge(..)          // returns the age (gets it somehow)
// calcSum(..)         // calculates a sum and returns the result
// createForm(..)      // creates a form (and usually returns it)
// checkPermission(..) // checks a permission, returns true/false

// ----------------------------------------
// How to organize a function
// ----------------------------------------
// - A function should do exactly what is suggested by its name, no more.

// const isAllAdult = personAges => {
//   for (let i = 0; i < personAges.length; i++) {
//     if (!(personAges[i] > 17)) {
//       return false;
//     }
//   }
//   return true;
// };

// const isAllAdult = personAges => {
//   for (let i = 0; i < personAges.length; i++) {
//     if (!isAdult(personAges[i])) {
//       return false;
//     }
//   }
//   return true;
// };

// const isAdult = age => age > 17;

// console.log(isAllAdult([15, 19, 20, 25]));
