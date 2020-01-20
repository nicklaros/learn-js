// ----------------------------------------
// var is redeclarable
// let and const are not redeclarable
// ----------------------------------------
// var friend1 = "eko";
// console.log("friend1", friend1);
// var friend1 = "ali";
// console.log("friend1", friend1);

// let friend1 = "eko";
// let friend2 = "ali";

// console.log("friend1", friend1);
// console.log("friend2", friend2);

// const friend1 = "eko";
// const friend1 = "ali";

// ----------------------------------------
// var and let can be reassigned
// const can not be reassigned
// ----------------------------------------
// var friend1 = "eko";
// console.log("friend1", friend1);
// friend1 = "ali";
// console.log("friend1", friend1);

// let friend2 = "ilyas";
// console.log("friend2", friend2);
// friend2 = "putra";
// console.log("friend2", friend2);

// const friend1 = "eko";
// console.log("friend1", friend1);
// friend1 = "ali";
// console.log("friend1", friend1);

// ----------------------------------------
// on function var is function scoped
// on function let and const are both block scoped
// ----------------------------------------
// function listFriend() {
//   if (true) {
//     var friend1 = "eko";
//   }
//   console.log(friend1);
// }
// listFriend();

// function listFriend() {
//   let friend1 = "ilyas";
//   const friend2 = "putra";

//   if (true) {
//     let friend3 = "eko";
//     const friend4 = "ali";
//     console.log(friend3);
//     console.log(friend4);
//   }

//   console.log(friend1);
//   console.log(friend2);
//   console.log(friend3); // ReferenceError
//   console.log(friend4); // ReferenceError
// }
// listFriend();

// ----------------------------------------
// const variable can be mutated
// ----------------------------------------
// const friends = ["ali"];
// console.log("friends", friends);
// friends.push("ilyas");
// friends.push("putra");
// console.log("friends", friends);
// friends = [];

// const ali = {
//   age: 20
// };
// console.log("ali", ali);
// ali.age = 23;
// console.log("ali", ali);
// ali = {
//   age: 23
// };

// ----------------------------------------
// var is hoisted tp the top of the enclosing function
// let and const are not hoisted
// ----------------------------------------
// function calculate() {
//   let a = 2;

//   if (true) {
//     let a = 1;
//     let result = a + 5;
//     console.log(result);
//   }

//   console.log(a);
// }
// function calculate() {
//   var a, result;

//   a = 2;

//   if (true) {
//     a;
//     result = a + 5;
//   }

//   console.log(result);
// }
// calculate();

// ----------------------------------------
// Should I use let and const?
// ----------------------------------------
// Server                                                ? YES
// Client with transpiler (babel, traceur, typescript)   ? YES
// Bare client                                           ? CONSIDER BROWSER SUPPORT
