// Map
var fn = function (num) {
  return num**2;
};

var F = function (arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
};

// alternative built-in
// var F = function (array, callback) {
//   return array.map(callback);
// };

console.log(F([1,2,3,4,5],fn));