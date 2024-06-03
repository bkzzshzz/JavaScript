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

// cannot declare the same variable multiple times with using "let"
// but can without "let"

message = "nice";

console.log("\n" + message);

// using const

const pi = 3.14;

let radius = 5;
let area = pi * radius * radius;
console.log(area);

// tasks for variables section

// 1. Declare two variables: admin and name

let admin;
let name;

// 2. Assign the value "John" to name

name = "John";

// 3. Copy the value from name to admin

admin = name;

// 4. Show the value of admin using console.log()

console.log(admin);

// Data types

// number

let num = 123;
console.log(num);

num = 456;
console.log(num);

const _ = 129082893789346873648734n; //bigInt "n" at the end

console.log(_);

// String

let str = "Hello";
let str2 = "hoW are you?";
let greeting = `${str}, ${str2.toLowerCase()}`; // backticks are important here
console.log(greeting);

// Boolean

let isGoodStudent = true;
let isAthelicStudent = false;

if (isGoodStudent) {
  console.log("Rahul is a Good Student");
}

// typeof to know the type of data

console.log(typeof str);
console.log(typeof isAthelicStudent);

// tasks

let country = "Rwanda";
console.log(`hello from ${1}`);
console.log(`hello from ${country}`);
console.log(`hello ${"country"}`);

// type conversion

let string1 = "12345";
let num1 = Number(string1);
console.log(typeof num1);

let truth = true;
let verdict = String(truth);
console.log(typeof verdict);

// concatenation with +

console.log(2 + 2 + "1");
console.log("2" + 2 + 1);

let apples = "4";
let oranges = "6";
console.log(+apples + +oranges);

// operators

let n = 4;
n = n + 5;
n = n - 1;
console.log(n);
n += 5;
n -= 2;
n *= 2;
console.log(n);
n++;
console.log(n);

let counter = 1;
let randomValue = ++counter; // increases counter first and then passes the value
console.log(randomValue);

counter = 1;
randomValue = counter++; // passes old value and increment later
console.log(randomValue); // old value of counter
console.log(counter); // increment of counter

// equality

let a = 5;
let b = 5;
console.log(a === 5);

// if statement

let river = "Bagmati";
let isDirty = true;

if (isDirty === false) {
  console.log(`${river} is dirty`);
  console.log(`hello`);
} else {
  console.log(`${river} is clean`);
}

let number = 24;

if (number % 2 == 0) {
  console.log(`${number} is divisible by 2`);
} else if (number % 3 == 0) {
  console.log(`${number} is divisible by 3`);
} else {
  console.log(`${number} is not divisble by 2 or 3`);
}

let age = 20;

// use ? for condition
let canVote = age > 18 ? true : false;
if (canVote) {
  console.log(`The person can vote.`);
} else {
  console.log(`The person cannot vote.`);
}

let laptopCharge = 90;

let chargeAlert =
  laptopCharge >= 90
    ? `Sufficient`
    : laptopCharge < 80
    ? `Get charger ready`
    : laptopCharge < 50
    ? `Plugin in the charger`
    : laptopCharge < 20
    ? `Charge right away`
    : ``;
console.log(`Laptop battery status is ${chargeAlert}`);
