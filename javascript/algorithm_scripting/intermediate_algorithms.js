// Sum of all numbers in a range
function sumAll(arr) {
    let sumArray = 0;
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++ ){
        sumArray += i;
    }
    return sumArray;
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
    
    return arr1
        .filter((e) => (!arr2.includes(e)))
        .concat(
            arr2.filter((e) => !arr1.includes(e))
        );
}

// Destroy values in array that are included in the arguments
function destroyer(arr) {
    // Creates an array
    let argsArray = Array.from(arguments).slice(1);

    return arr
        .filter((e) => (!argsArray.includes(e)));
}

// Wherefore art thou
function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);
    
    return collection.filter((obj) => {
        return sourceKeys.every((key) => {
            return (obj.hasOwnProperty(key) && obj[key] === source[key]);
        })
    });
}

function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

// Pig Latin
function translatePigLatin(str) {
    const consonants = /^[^aeiou]+/;
    let matching;

    if(str.match(/^[aeiou]/)) {
        return str + "way";
    }

    matching = str.match(consonants);
    return str
            .slice(matching[0].split("").length) + matching.join("") + "ay";
}

// Search and replace
function myReplace(str, before, after) {

    let newString = str.slice().split(" ");
    if (newString[newString.indexOf(before)][0] === newString[newString.indexOf(before)][0].toUpperCase()) {
        newString[newString.indexOf(before)] = after.charAt(0).toUpperCase() + after.slice(1);
    }
    else {
        newString[newString.indexOf(before)] = after;
    }
    
    newString = newString.join(" ");
    return newString;
}