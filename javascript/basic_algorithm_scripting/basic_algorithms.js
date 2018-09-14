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


