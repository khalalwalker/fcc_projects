// Palindrome Checker
function palindrome (str) {
    let str1 = str.replace(/[\]\[]/g, '');

    if (str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')) {
        return true;
    } else return false;
}

// Roman Numeral Converter
function convertToRoman(num) {
    let romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let romanConv = '';

    for (let i = 0; i < numbers.length; i++) {
        while (numbers[i] <= num) {
            romanConv += romanNumerals[i];
            num = num - numbers[i];
        }
    }
    return romanConv;
}

// Caeser's Cipher
function rot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Z]/g, i => String.fromCharCode((i.charCodeAt(0) % 26) + 65));
}

// Telephone Validator - Regex Fun!
function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
