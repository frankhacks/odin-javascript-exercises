const convertToCelsius = function(faren) {
  let celsius = (faren - 32)*5/9;
  rounded = celsius.toFixed(1);
  return parseFloat(rounded);
};

const convertToFahrenheit = function(cels) {
  let farenheit = (cels * 9)/5 + 32;
  rounded = farenheit.toFixed(1);
  return parseFloat(rounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
