// Sum of random numbers
var fn = function (previousValue, currentValue, index, array) {
  return previousValue + currentValue;
};

var createRandomArray = function (large) {
  let arr = [];
  for (let i = 0; i < large; i++) {
    arr.push(Math.floor(Math.random()*10));
  }
  return arr;
};

var F = function (count, callback) {
  let newarr = createRandomArray(count);
  console.log(newarr);
  return newarr.reduce(callback);
};

console.log(F(10,fn));