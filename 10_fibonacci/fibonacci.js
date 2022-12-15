const fibonacci = function(x) {
let first = 1;
let second = 1;
if (x<0){
    return "OOPS";
} else {
for(i=2;i<x;i++){
var fib = first + second;
first = second;
second = fib;
}
return second;
}
};

// Do not edit below this line
module.exports = fibonacci;
