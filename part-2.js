// function

function ourReusableFunction(ask){
    // console.log(ask);
}

ourReusableFunction("Real eyes, realise, realize, real lies");

// function with arguments

function ourFunctionWithArgs(a, b) {
    // console.log(a - b);
}

ourFunctionWithArgs(10, 5);

// Global scope and functions

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// fun1();
// fun2();

// using var keyword inside a function makes the variable scoped within the function only
// if var keyword is not used in the funtion then that variable is Global scope

// Local scope and functions

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

// myLocalScope();

// console.log(myVar);

// Local Scope vs Global Scope

var outerWear = "T-shirt"; // Global variable

function myOutfit() {
    var outerWear = "Sweater";
    return outerWear;
}

// console.log(myOutfit()); // calls the local var
// console.log(outerWear); // no change in global var if change is made in a function

// Stand in line?

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After:  " + JSON.stringify(testArr));
