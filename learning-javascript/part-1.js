// My first line of JavaScript
// tutorial link https://www.youtube.com/watch?v=PkZNo7MFNFg
// console.log("Hello World!")
// Use of semicolon at the end of each line is preferrred. 

// comments
var number = 5; // commenting lines

/* Multiple lines comment
if given this way */

// Data Types

// Declare a variable with var

var myName = "Bikesh";

myName = "Okay"; // changeable variable

let OurName = "Shrestha"; 

OurName = "What?";

const e = 2.17;

// console.log(myName + "\t" + OurName, e)

// Store data using Assigining operator

var a;
var b = 3;
// console.log(a)

a = 7;
// console.log(a, b)

// variables are case sensitive

// variables in properCamelCase 

var sum = 20 - 10;
// console.log(sum)

// increment a number

var myVar = 87;
myVar++;
myVar--;
// console.log(myVar)

// floating number

var myDecimal = 0.009;
var myDecimal2 = 0.007;
var product = myDecimal * myDecimal2;
// console.log(product)

// escpaing literal quotes
var myString = "Hello \"double\" quotes"; // use of backspace
var myString1 = '"Hello? Is there anybody in there?", asked a man.'; // use of single quotes
// console.log(myString)
// console.log(myString1)

// escape sequence

/****
CODE    OUTPUT
\'      single quote
\"      double quotes
\\      backslash
\n      next line
\r      carriage return
\t      tab
\b      backspace
\f      form feed
****/

var myString = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myString)

// lenght of a string

var firstNameLength = 0;
var firstName = "Bikesh";

firstNameLength = firstName.length;

// console.log(firstNameLength)

// Bracket notation

firstLetterOfFirstName = firstName[0] // starts from zero indexing
// console.log(firstLetterOfFirstName)

// String Immutability - Meaning strings cannot be altered. The invidual letter cannot be changed

var myStr = "Hello World!";

myStr[0] = "J";

// console.log(myStr[myStr.length - 1]) // To get he last character

// console.log(myStr)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = myNoun + myVerb + myAdjective + myAdverb;

    return result;
}

// console.log(wordBlanks("Apple", " sweet", " tastes", " in the morning."));

// Array

var myArray = ["Hello", 11, "Welcome"];
// console.log(myArray);

// Nested array

var ourArray = [["String", "Number"], [23, 43], 26, "Love"];
// console.log(ourArray[ourArray.length - 3]);
ourArray[0] = "Hey";
// console.log(ourArray)

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// console.log(myArray[3][2])

// push() to append elements to an array

var ourArray = ["Nepal", "is", "my", "country", "all", "Nepalese", "are", "my", "brothers", "and", "sisters"];
// pop() to remove the last element

var lastElement = ourArray.pop();
console.log(lastElement);
console.log(ourArray)


// shift() to remove the first element

var firstElement = ourArray.shift();
console.log(firstElement);
console.log(ourArray);

// unshift() to add element at the beginning

ourArray.unshift("Nepal");
console.log(ourArray)









