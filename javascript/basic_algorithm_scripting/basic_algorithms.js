// Convert celsius to fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}

// Reverse a string
function reverseString(str) {
    //turn string into an array, reverse the array, join to make a string, remove commas
    return str.split("").reverse().join().replace(/,/g, "");
}

// Factorialize a number
function factorialize(num) {
    if (num == 1 || num == 0) {
        return 1;
    }
    let counter = num;
    while (counter > 1) {
        num *= counter-1;
        counter--;
    }
    return num;
}

// Find the longest word in a string
function findLongestWordLength(str) {
    let strArray = str.split(" ");
    let longest = 0;
        for (let i = 0; i < strArray.length; i++) {
            if (strArray[i].length > longest) {
                longest = strArray[i].length;
            }
        }
    return longest;
}

// Return largest numbers in array
function largestOfFour(arr) {
    let largestArr = [];
    for(let i = 0; i < arr.length; i++) {
        let bigNumber = arr[i][0];
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > bigNumber) {
                bigNumber = arr[i][j];
            }
        }
        largestArr.push(bigNumber);
    }
    return largestArr;
}

// Confirm the ending of a String
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) == target;
}

// Repeat a string
function repeatStringNumTimes(str, num) {
    let repeatStr = "";
    let counter = 0;
    while (counter < num) {
        repeatStr += str;
        counter++;
    }
    return repeatStr;
}

// Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }
} 

// Looks through an array and returns first element to pass the truth test
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
       if (func(arr[i])) {
           return arr[i];
       }
    }
}

// Check boolean primitive
function booWho(bool) {
    return typeof bool == 'boolean';
}

// Title Case Sentence
function titleCase(str) {
    let titleString = str.toLowerCase().split(" ");
    for(let i = 0; i < titleString.length; i++) {
        titleString[i] = titleString[i].replace(/^\w/, character => character.toUpperCase());
    }
    return titleString.join().replace(/,/g, " ");
}

// Franken Splice
function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice();
   arr.splice(n, 0, ...arr1);
   return arr;
}

// Falsy Bouncer
function bouncer(arr) {
    return arr.filter(value => Boolean);
}