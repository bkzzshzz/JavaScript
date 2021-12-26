// // inbuilt functions

// // random ()

// function randomFraction() {

//     return Math.random();
// }

// // console.log(randomFraction());

// // to round a fraction use Math.floor()

// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomWholeNumber() {
//     return Math.random() * 10;
// }

// // console.log(randomNumberBetween0and19)
// // console.log(Math.floor(randomWholeNumber()));

// // generate random interger within a range

// function randomIntegerBetweenTwoNumbers(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // console.log(randomIntegerBetweenTwoNumbers(1, 7));

// // parseInt function to convert string into integer

// function convertToInteger(str) {
//     return parseInt(str);
// }

// // console.log(convertToInteger("56"));

// function convertToInteger(str) {
//     return parseInt(str, 2); // 2 species the base, in this case is binary
// }

// // console.log(convertToInteger("111111"))

// // ternary operator

// function checkEqual(a, b) {
//     return a === b ? true : false; // ternary operation
// }

// function checkEquals(a, b) {
//     return a === b; // without the ternary operator 
// }

// // console.log(checkEqual(2, 2), checkEquals(2, 2))

// // Use multiple conditional (Ternary) Operators

// function checkSign(num) {
//     return num > 0 ? "Positive" : num < 0 ?  "Negative" : "Zero";
// }

// // console.log(checkSign(0));

// // var vs let

// // let doesn't allow variable with the same name be declared more than once

// let catName = "Quincy";
// let quote;

// catName = "Beau";

// function catTalk() {
//     "use strict"; // checks coding mistakes like forgetting to declare variables with let, var or const

//     let reck = "";
//     catName = "Oliver";
//     quote = catName + " says Meow!";
// }

// catTalk();

// // const keyword

// function printManyTimes(str) {
//     "use strict";

//     const SENTENCE = str + " is cool!"; 

//     for (let i = 0; i < str.length; i++) {
//         console.log(SENTENCE);
//     }
// };

// // printManyTimes("Hello")

// // Use const when you don't want to reassign that variable again
// // Also use uppercase letters for const variables

// // mutate an array declared with const

// const S = [5, 7, 2];

// function editInPlace() {
//     "use strict";
//     S[0] = 2;
//     S[1] = 5;
//     S[2] = 7;
//     return S;
// }

// // console.log(editInPlace())

// // cannot reassign an array as a whole but with indexes


// // prevent mutation
// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     Object.freeze(MATH_CONSTANTS); // makes the variable immutables

//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch (ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
//     }
// // const PI = freezeObj();

// // console.log(PI);

// // Arrow function

// const magic = () => new Date();

// // console.log(magic())

// // aarrow function with args

// const myConcat = (a, b) => a.concat(b); // concat to concatenate 

// // console.log(myConcat("Hey", " Hello"));
// // console.log(myConcat([1, 2], [3, 4, 5]));

// // arrow functions with higher order

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// // console.log(squaredIntegers);


// // rest operator

// const sum = (function() {
//     return function sum(...args) { // ... is rest operator to be used in a function while passing arguments
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();

// // console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// // use spread opertator

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// (function() {
//     arr2 = [...arr1]; // ...spread operator to make copy of an array
//     arr1[0] = "potato";
// })();

// console.log(arr2);

// // use destruturing assignment to assign variables from objects

// var voxel = { x:3.6, y: 7.4, z: 6.54};

// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54

// // the above method can be destructured as:

// const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {
//     "use strict";

//     const { tomorrow : tempOfTomorrow } = avgTemperatures; // get tomorrow field from avgTemperatures and assign to tempOfTomorrow
    
//     return tempOfTomorrow;
// }

// // console.log(getTempOfTmrw(AVG_TEMPERATURES));

// // destructuring nested objects

// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83 },
//     tomorrow: { min: 73.3, max: 84.6 }
// };

// function getMaxOfTmrw(forecast) {
//     "use strict";

//     const { tomorrow : {max : maxOfTomorrow }} = forecast;

//     return maxOfTomorrow;
// }

// console.log(getMaxOfTmrw(LOCAL_FORECAST));

const [z, x, , y] = [1,2,3,4,5,6];
// console.log(z, x, y);

let a = 2, b = 6;
(() => {
    "use strict";

    [a, b] = [b, a];

})();

// console.log(a);
// console.log(b);

// destrucuring Assignment with the Rest Operator

const source = [1, 2, 3, 4, 5, 6];

function removeFirstTwo(list) {
    const [ , , ...arr] = list;

    return arr;

}

const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

// pass an object as function parameter

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.67,
    min: -0.75,
    average: 35.85
};

const half = ( function () {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();

// console.log(stats);
// console.log(half(stats));


// template literals
const person = {
    name: "Fiona Dekerhome",
    age: 221
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

// console.log(greeting)

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }


    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray)

// simple fields

var createPerson = (name, age, gender) => { // using var to create another function witht the same name
    return {
        name: name,
        age: age,
        gender: gender
    };
};

// The below code simplifies as there is some repitition, we can omit those repitition

var createPerson1 = (name, age, gender) => ( { name, age, gender } );
// console.log(createPerson1("Harry Potter", 15, "male"));

// write concise declarative functions

const bicycle = {
    gear: 2,
    setGear(newGear) { // this is better instead of setGear: function (newGear)
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
// console.log(bicycle.gear);

// use class syntax to define a constructor function

// var SpaceShuttle = function (targetPlanet) { //constructor block
    // this.targetPlanet = targetPlanet; // constructor block
// };

// var zeus = new SpaceShuttle('Jupiter');

// the above constructor can be replaced with class syntax

class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');
// console.log(zeus.targetPlanet);

// getters and setters

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor (temp) {
            this._temp = 5/9 * (temp - 32);
        };
        get temperature() {
            return this._temp;
        };
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

// `this` means that this.var the variable is accessible in the class only
// variables starting with _var is a private variable




