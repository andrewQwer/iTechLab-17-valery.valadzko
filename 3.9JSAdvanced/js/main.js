// First
var fn = function (num) {
  return num > 5;
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
  let newarr2 = newarr.filter(callback);
  return newarr2[0];
};

console.log(F(10,fn));