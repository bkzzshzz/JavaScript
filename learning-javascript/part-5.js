// Loops

// While

var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

// console.log(myArray)

// For

var ourArray = []

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

// console.log(ourArray);

var ourArray =[];

for (var i = 1; i <= 10; i += 2) {
    ourArray.push(i);
}

// console.log(ourArray);

// For loop to count backwards

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

// console.log(ourArray)

// iterate through an array with a for loop

var myArray = [1, 2, 3, 4, 5];
myArray.shift()
myArray.push(6)

var theTotal = 0;
for (var i = 0; i < myArray.length; i++) {
    theTotal += myArray[i];
}

// console.log(myArray)
// console.log(theTotal)

// nested for loops

function multiplyAll(arr) {
    var product = 1;
    for (i=0; i<arr.length; i++) {
        for (j=0; j<arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
};

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

// console.log(product);

// Do...While

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while(i<5);

// console.log(i, myArray);

// profile lookup

var contacts = [
    {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "981458788",
        "likes": ["Pizza", "Coding", "Brownies"]
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "988445545",
        "likes": ["books", "glasses", "owls"]
    },
    {
        "firstname": "Sherlock",
        "lastname": "Holmes",
        "number" : "B22",
        "likes": ["mystery", "cases", "violin"]
    },
    {
        "firstname": "Kristen",
        "lastname": "Stewart",
        "number": "987456321",
        "likes": ["Books", "Movies", "Acting"]
    }
];

var property = "";
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++){
        if (name === contacts[i].firstname) {
            property += contacts[i][prop];
        } else {
            property = "Not Found";
        }
    }
    return property;
}

var data = lookUpProfile("Akira", "likes")

console.log(data)

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++){
        if (name === contacts[i].firstname) {
            return contacts[i][prop] || "No Such Property";
        }
        return "No Such Contact"
    } 
}

var data = lookUpProfile("Akira", "likes");

console.log(data);

