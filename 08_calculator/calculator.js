const add = function(x, y) {
let	addition = x + y;
  return addition;
};

const subtract = function(x, y) {
let	subtraction = x - y;
  return subtraction;
};

const sum = function(array) {
  let sums = 0;
	for (items of array) {
    sums+=items;
  }
  return sums;
};

const multiply = function(array) {
  let multplication = 1;
for (items of array){
 multplication*=items;
}
return multplication;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	let fact = 1;
  for (i = x; i>0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
