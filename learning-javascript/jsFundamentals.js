// // "use strict"; // must be at the top and not necessary

// // //JS Fundamentals 06/02/2024

// // console.log("hello");
// // console.log("world" + "Bro");

// // console.log(3 + 2 + "\n");

// // //variables

// // // multiple lines

// // let message = "The number you have dialled is ";
// // let reason1 = "busy";
// // let reason2 = "switched off";
// // let reason3 = "unavailable";

// // console.log(message + reason1);
// // console.log(message + reason2);
// // console.log(message + reason3 + "\n");

// // //single line variable declaration

// // let messageA = "The number you have dialled is ",
// //   reasonA = "busy",
// //   reasonB = "switched off",
// //   reasonC = "unavailable";

// // console.log(messageA + reasonC);
// // console.log(messageA + reasonB);
// // console.log(messageA + reasonA);

// // // cannot declare the same variable multiple times with using "let"
// // // but can without "let"

// // message = "nice";

// // console.log("\n" + message);

// // // using const

// // const pi = 3.14;

// // let radius = 5;
// // let area = pi * radius * radius;
// // console.log(area);

// // // tasks for variables section

// // // 1. Declare two variables: admin and name

// // let admin;
// // let name;

// // // 2. Assign the value "John" to name

// // name = "John";

// // // 3. Copy the value from name to admin

// // admin = name;

// // // 4. Show the value of admin using console.log()

// // console.log(admin);

// // // Data types

// // // number

// // let num = 123;
// // console.log(num);

// // num = 456;
// // console.log(num);

// // const _ = 129082893789346873648734n; //bigInt "n" at the end

// // console.log(_);

// // // String

// // let str = "Hello";
// // let str2 = "hoW are you?";
// // let greeting = `${str}, ${str2.toLowerCase()}`; // backticks are important here
// // console.log(greeting);

// // // Boolean

// // let isGoodStudent = true;
// // let isAthelicStudent = false;

// // if (isGoodStudent) {
// //   console.log("Rahul is a Good Student");
// // }

// // // typeof to know the type of data

// // console.log(typeof str);
// // console.log(typeof isAthelicStudent);

// // // tasks

// // let country = "Rwanda";
// // console.log(`hello from ${1}`);
// // console.log(`hello from ${country}`);
// // console.log(`hello ${"country"}`);

// // // type conversion

// // let string1 = "12345";
// // let num1 = Number(string1);
// // console.log(typeof num1);

// // let truth = true;
// // let verdict = String(truth);
// // console.log(typeof verdict);

// // // concatenation with +

// // console.log(2 + 2 + "1");
// // console.log("2" + 2 + 1);

// // let apples = "4";
// // let oranges = "6";
// // console.log(+apples + +oranges);

// // // operators

// // let n = 4;
// // n = n + 5;
// // n = n - 1;
// // console.log(n);
// // n += 5;
// // n -= 2;
// // n *= 2;
// // console.log(n);
// // n++;
// // console.log(n);

// // let counter = 1;
// // let randomValue = ++counter; // increases counter first and then passes the value
// // console.log(randomValue);

// // counter = 1;
// // randomValue = counter++; // passes old value and increment later
// // console.log(randomValue); // old value of counter
// // console.log(counter); // increment of counter

// // // equality

// // let a = 5;
// // let b = 5;
// // console.log(a === 5);

// // // if statement

// // let river = "Bagmati";
// // let isDirty = true;

// // if (isDirty === false) {
// //   console.log(`${river} is dirty`);
// //   console.log(`hello`);
// // } else {
// //   console.log(`${river} is clean`);
// // }

// // let number = 24;

// // if (number % 2 == 0) {
// //   console.log(`${number} is divisible by 2`);
// // } else if (number % 3 == 0) {
// //   console.log(`${number} is divisible by 3`);
// // } else {
// //   console.log(`${number} is not divisble by 2 or 3`);
// // }

// // let age = 20;

// // // use ? for condition
// // let canVote = age > 18 ? true : false;
// // if (canVote) {
// //   console.log(`The person can vote.`);
// // } else {
// //   console.log(`The person cannot vote.`);
// // }

// // let laptopCharge = 90;

// // let chargeAlert =
// //   laptopCharge >= 90
// //     ? `Sufficient`
// //     : laptopCharge < 80
// //     ? `Get charger ready`
// //     : laptopCharge < 50
// //     ? `Plugin in the charger`
// //     : laptopCharge < 20
// //     ? `Charge right away`
// //     : ``;
// // console.log(`Laptop battery status is ${chargeAlert}`);

// // // task

// // let result = a + b < 4 ? `Below` : `Over`;

// // console.log(`The value of a is ${a} and b is ${b} and a + b is ${result} 4`);

// // // Logical operator
// // a = true;
// // b = false;
// // result = a && b; // and
// // console.log(result);

// // result = a || b; // or
// // console.log(result);

// // console.log(!a);

// // // double question mark nullish operator

// // let user;

// // console.log(user ?? "Anonymous");

// // user = "Tilak";

// // console.log(user ?? "Anonymous");

// // let height = null;
// // let width = null;

// // area = (height ?? 100) * (width ?? 50);

// // console.log(area);

// // // while...loop
// // let i = 1;
// // while (i <= 10) {
// //   console.log(i++);
// // }

// // i = 10;
// // while (i) {
// //   console.log(`${i} is not 0 yet`);
// //   i--;
// // }

// // console.log(`${i} is 0`);

// // // do while
// // i += 1;
// // do {
// //   console.log(i);
// //   i++;
// // } while (i <= 10);

// // // for loop

// // for (i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// // // inline variable example

// // for (let j = 7; j < 10; j++) {
// //   console.log(j);
// // }

// // // console.log(j); // shows an error, cuz j is declared locally within for
// // let j = 2;
// // for (; j < 5; j++) console.log(j); // omit j as j is already declared // shorthand

// // // for (;;); // infinite loop

// // // break a loop with break
// // for (; j < 20; j++) {
// //   if (j == 15) break;
// // }
// // console.log(`We reached ${j}`);

// // // continue

// // for (let i = 0; i <= 10; i++) {
// //   if (i % 2 == 0) continue;

// //   console.log(i);
// // }

// // // labelname

// // outside: for (let k = 0; k < 10; k++) {
// //   for (let l = 0; l < 10; l++) {
// //     if (k == 4) break outside;

// //     console.log(k, l);
// //   }
// // }

// // // swtich case

// // let randomNum = 4;
// // let remainder = 0;

// // switch (randomNum) {
// //   case 1:
// //   case 2:
// //   case 3:
// //     console.log(`${randomNum} is prime`);
// //     break;
// //   default:
// //     for (let i = 3; i <= randomNum - 1; i++) {
// //       remainder = randomNum % i;
// //       if (remainder == 0) {
// //         console.log(`${randomNum} is not prime`);
// //         break;
// //       }
// //     }
// // }
// // if (remainder != 0) {
// //   console.log(`${randomNum} is prime`);
// // }

// // the above code is not perfect for now

// // functions
// let m = "loud";
// let n = "clear";
// function showMessage(a, b) {
//   // console.log(`Message is ${a} and ${b}`);
// }

// showMessage(m, n);

// // return in functions

// function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(5, 6));

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let age = 18;

// if (checkAge(age)) {
//   // console.log(`You can drink`);
// } else {
//   // console.log(`You cannot drink`);
// }

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     console.log(i);
//   }
// }

// // showPrimes(105);

// function sayHi() {
//   console.log("Hello!");
// }

// let func = sayHi; // interesting

// // func(); // call functions with a variable
// // sayHi();

// // call back functions

// function ask(question, yes, no) {
//   if (question) yes();
//   else no();
// }

// function showOk() {
//   console.log("You agreed");
// }

// function showCancel() {
//   console.log("You cancelled the excecution");
// }

// // ask(false, showOk, showCancel);

// // Function Expression vs Function Declaration

// // Function Declaration

// function addNum(a, b) {
//   return a + b;
// }

// let addTwoNum = addNum(4, 6);
// console.log(addTwoNum);

// // console.log(`${addNum(4, 5)} and ${addTwoNum(4, 6)}`);
// // console.log(typeof addTwoNum, typeof addNum);

// // arrow functions !important

// let sum = (a, b) => a + b;
// console.log(sum(4, 5));

// let cube = (a) => a * a * a;
// console.log(cube(33));

// let message = () => "Message";
// console.log(message()); // empty arrow function with empty parenthesis

// let age = 21;

// let citizenship =
//   age < 16
//     ? () => console.log("You cannot have citizenship")
//     : () => console.log("You can have citizenship");

// citizenship();

// JavaScript Specials
