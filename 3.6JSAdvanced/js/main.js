// Filter
var fn = function (num) {
  return num > 2;
};

var F = function (array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(array[i])
    }
  }
  return newArr;
};
// alternative built-in
// var F = function (array, callback) {
//   return array.filter(callback)
// };

console.log(F([1,2,3,4,5],fn));