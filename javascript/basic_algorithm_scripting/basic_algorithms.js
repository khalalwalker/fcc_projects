// Convert celsius to fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}

// Reverse a string
function reverseString(str) {
    //turn string into an array, reverse the array, join to make a string, remove commas
    let reverse = str.split("").reverse().join().replace(/,/g, "");
    return reverse;
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
    return str.substring(str.length - target.length) == target;
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