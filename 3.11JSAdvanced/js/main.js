// Memoization
var sum = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log('Calculation instead of getting from cache');
  return result;
};

var F = function (fn) {
  let results = {};
  return function G (...args) {
    return results[args] = results[args] || fn.apply(this, args);
  };
};

var sum2 = new F(sum);
console.log(sum2(1,2));
console.log(sum2(1,3));
console.log(sum2(1,2));
console.log(sum2(1,3));
console.log(sum2(1,4));
