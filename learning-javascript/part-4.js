// Objects

var ourDog = {
    "name"      : "Camper",
    "legs"      : 4,
    "tails"     : 1,
    "friends"   : ["everything"],
};

// Dot notation
var nameOfDog = ourDog.name;
var numberOfLegs = ourDog.legs;
var numberOfTails = ourDog["tails"]
// console.log(nameOfDog + " has " + numberOfLegs + " legs with " + numberOfTails + " tail")

// Bracket notation

// bracket notation for when the key has space in it

var testObj = {
    "an entree" :   "hamburger",
    "my side"   :   "veggies",
    "the drink" :   "water",
};

var entreeValue = testObj["my side"];
var drinkValue = testObj['the drink'];

// console.log(entreeValue);

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};

var playerNumber = 16;
testObj["16"] = "Ashley"; // edit the object value
var player = testObj[playerNumber];
// console.log(player);


// console.log(player);

testObj["20"] = "Rita"; // add a property
// console.log(testObj);

// delete a property

delete testObj["20"];
// console.log(testObj)

// testing objects for properties using hasOwnProperty() function

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
    "Rick" : "Roll",
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
    return ;
}

// console.log(checkObj("Rick"));

// Complex objects

var myMusic = [
    {
        "artist"    :   "Pink Floyd",
        "title"     :   "Dark Side of the Moon",
        "release_year": 1990,
        "formats"   : [
            "CD",
            "8T",
            "LP"
        ],
        "gold"      :   true
    },
    {
        "artist"    :   "John Denver",
        "title"     :   "Country Roads",
        "release_year": 1990,
        "formats"   : [
            "CD",
            "Youtube"
        ],
        "gold"      : false
    }

];

// console.log(myMusic[0].formats[0])

var myStorage = {
    "car" : {
        "inside" : {
            "glove box": "maps",
            "passenger seat" : "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

// console.log(gloveBoxContents)

// Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion",
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];


var secondTree = myPlants[1].list[1]
// console.log(secondTree)

// Record Collection

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Leti It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
};

console.log(collectionCopy)
console.log("\n\n\n")
console.log(updateRecords(2468, "tracks", "test"))





