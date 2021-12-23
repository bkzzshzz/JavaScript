// if 

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

// console.log(trueOrFalse(false));

// comparison with equality operator

function testEqual(val) {
    if (val === 12) {
        return "equal";
    }
    return "Not Equal";
}

// console.log(testEqual(12));

// triple equals to sign gives false is the type don't match

// Logic

function testLogicalAnd(val) {
    if(val <= 50 && val >= 25) {
        return "Yes";
        }
    }

// else

function testElse(val) {
    var result = "";

    if (val >5) {
        result = "Bigger than five";
    } else {
        result = "5 or smaller";
    }

    return result;
}

// console.log(testElse(5))

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    }else {
        return "Between 5 and 10";
    }
}

// console.log(testElseIf(6));

function checkNumber(val) {
    if (val < 5) {
        return "Tiny";
    } else if (val < 10) {
        return "Small";
    } else if (val < 15) {
        return "Medium";
    } else if (val < 20) {
        return "Large";
    }else {
        return "Huge"
    }
}

// console.log(checkNumber(2))

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (par == strokes){
        return names[3];
    } else if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes - par == 1) {
        return names[4];
    } else if (strokes - par == 2) {
        return names[5];
    }else {
        return names[6];
    }
}

// console.log(golfScore(5, 8));

// switch statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        case 5:
            answer = "sigma";
            break;
    }
    return answer;
}
// console.log(caseInSwitch(5))

function swtichOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cake";
            break;
        case "d":
            answer = "dog";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

// console.log(swtichOfStuff("e"))

// default if no values correspond to the given value

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "Large";
            break;
        default:
            answer = "Larger than 9 or less than 1";        
    }
    return answer;
}

// console.log(sequentialSizes(0))

// returning boolean from functions

function isLess(a, b) {
    return a < b;
}

// console.log(isLess(20, 15))

function abTest(a ,b) {
    if (a< 0 || b < 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, -5))