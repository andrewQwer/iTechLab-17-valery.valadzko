// Linear fold
var sum = function (previousValue, currentValue) {
  return previousValue + currentValue;
};

var F = function (array, callback, initialValue) {
  let hasInitialvalue = arguments.length > 2;
  let result = 0;
  let i = 0;
  if (hasInitialvalue) {
    result = callback(initialValue, array[i]);
    // alternative built-in
    // result = array.reduce(callback, arguments[2]);
  } else {
    result = callback(array[i], array[i+1]);
    i = 2;
    // alternative built-in
    // result = array.reduce(callback);
  }
    for (i; i < array.length; i++) {
      result = callback(result, array[i]);
    }
  return result;
};

console.log(F([1,2,3],sum));
console.log(F([1,2,3],sum,10));
