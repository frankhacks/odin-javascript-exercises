const palindromes = function (string) {
let lower = string.toLowerCase();
let periods = lower.split(".").join("");
let commas = periods.split(",").join("");
let exclaim = commas.split("!").join("");
let stringy = exclaim.split(" ").join("");
if (stringy === stringy.split("").reverse().join("")) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
