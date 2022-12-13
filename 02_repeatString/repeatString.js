const repeatString = function(string, x) {
var stringContainer = '';
if (x < 0) {
    stringContainer += 'ERROR';
} else {
for (i=0; i<x; i++) {
        stringContainer += string;   
}
}
return stringContainer;
};
repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
