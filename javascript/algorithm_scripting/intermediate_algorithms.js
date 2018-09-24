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

// DNA Pairing
function pairElement(str) {

    let pair = str.split("");
    for(let i = 0; i < pair.length; i++) {
        if (pair[i] === "A") {
            pair[i] = ["A", "T"];
        }
        else if (pair[i] === "T") {
            pair[i] = ["T", "A"];
        }
        else if (pair[i] === "C") {
            pair[i] = ["C", "G"];
        }
        else if (pair[i] === "G") {
            pair[i] = ["G", "C"];
        }
    }
    return pair;
}

// Missing Letters
function fearNotLetter(str) {
    for (let i = 1; i < str.length; i++) {
        // If there is more than a 1 letter difference between adjacent letters.
        if ((str.charCodeAt(i) - str.charCodeAt(i - 1)) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
    return undefined;
}

// Convert HTML entities
function convertHTML(str) {
    let newString = str.split("");
    for (let i = 0; i < newString.length; i++) {
        switch (newString[i]) {
            case "&":
                newString[i] = "&amp;";
                break;
            case "<":
                newString[i] = "&lt;";
                break;
            case ">":
                newString[i] ="&gt;";  
                break;
            case '"':
                newString[i] = "&quot;";
                break;
            case "'":
                newString[i] = "&apos;";
                break;
        }
    }

    return newString.join("");
}

// Sum of All Odd Fibonacci Numbers
function sumFibs(num) {
    let sum = 0;
    let prev = 0;
    let temp = 0;
    let current = 1;
    while (current <= num) {
        if (current % 2 !== 0) {
            sum += current;
        }
        temp = current;
        current += prev;
        prev = temp;
    }
    return sum;
}

// Sum of Primes
function sumPrimes(num) {
    // Create function to check if number is prime.
    const isPrime = number => {
        for(let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0) return false; 
        }
        return number !== 1 && number !== 0;
    }

    let sum = 2;
    // Adding up the prime numbers
    for(let i = 3; i <= num; i++) {
        if(isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// Sorted Union
function uniteUnique() {
    let newArray = [];
    let i = 0;
    while (arguments[i]) {
        newArray = newArray.concat(arguments[i]);
        i++;
    }
    console.log(newArray);

    return newArray.filter((item, position) => {
        return newArray.indexOf(item) == position;
    })
  }


  // Least common multiple
  function smallestCommons(arr) {
    // insert the range of numbers into an array.
    let range = [];
    for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
        range.push(i);
    }

    let lcm = range[0];

    for (let i = 1; i < range.length; i++) {
        let GCD = gcd(lcm, range[i]);
        lcm = (lcm * range[i]) / GCD;
    }

    return lcm;

    function gcd(x, y) { // Euclid's algorithm, keeps diving until no remainder
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// Drop the first element until it's true
function dropElements(arr, func) {
    // Drop them elements.
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
      return arr;
  }
  
  // Truth Checker
  function truthCheck (collection, pre) {
    for(let i = 0; i < collection.length; i++) {
        if (!Boolean(collection[i][pre])) {
            return false;
        }
    }
    return true;
}

// Create a Person - function and class notation
function Person (firstAndLast) {

    let fullName = firstAndLast;
  
    this.setFullName = function(name) {
      fullName = name;
    }
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(first) {
      fullName = first + " " + fullName.split(" ")[1];
    }
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    }
  
    this.setLastName = function(last) {
      fullName = fullName.split(" ")[0] + " " + last;
    }
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    }
    return firstAndLast;
  };

class Person1 {
    constructor (firstAndLast) {
        this.fullName = firstAndLast;
        return firstAndLast;
    }

    get fullName() {
        return this.fullName;
    }

    set fullName (name) {
        this.fullName = name;
    }

    get firstName() {
        return this.fullName.split(" ")[0];
    }

    set firstName(first) {
        this.fullName = first + " " + this.fullName.split(" ")[1];
    }

    get lastName() {
        return this.fullName.split(" ")[1];
    }

    set lastName(last) {
        this.fullName = this.fullName.split(" ")[0] + " " + last;

    }


  }
