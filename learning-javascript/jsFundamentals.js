"use strict"; // must be at the top and not necessary

//JS Fundamentals 06/02/2024

console.log("hello");
console.log("world" + "Bro");

console.log(3 + 2 + "\n");

//variables

// multiple lines

let message = "The number you have dialled is ";
let reason1 = "busy";
let reason2 = "switched off";
let reason3 = "unavailable";

console.log(message + reason1);
console.log(message + reason2);
console.log(message + reason3 + "\n");

//single line variable declaration

let messageA = "The number you have dialled is ",
  reasonA = "busy",
  reasonB = "switched off",
  reasonC = "unavailable";

console.log(messageA + reasonC);
console.log(messageA + reasonB);
console.log(messageA + reasonA);
