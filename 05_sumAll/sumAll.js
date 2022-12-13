const sumAll = function(x, y) {
var theSum = 0;
if (x<0 || y<0) {
    theSum = 'ERROR';
} else if (!Number.isInteger(x) || !Number.isInteger(y)){
    theSum ='ERROR';
} else if (x > y) {
    for (i=y; i<(x+1); i++) {
        theSum += i;
    }
} else if (x < y) {
    for (i=x; i<(y+1); i++) {
        theSum += i;
    }
} else {
    theSum = x;
}
return theSum;
};

// Do not edit below this line
module.exports = sumAll;
