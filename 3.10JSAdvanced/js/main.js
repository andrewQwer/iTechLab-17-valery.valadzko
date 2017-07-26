// Lazy evaluation
var sum = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

var lazyMaker = function(fn) {
  return function () {
    return fn.apply(this, arguments);
  };
};

var lazySum = lazyMaker(sum);

console.log(lazySum(1,2,3,4,5));