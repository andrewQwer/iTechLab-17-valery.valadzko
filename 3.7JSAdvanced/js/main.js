// Average of even numbers
var fn = function (num) {
  return num % 2 === 0;
};

var F = function (array, callback) {
  var average = function (arr) {
    let sum = 0;
    for (let value in arr) {
      sum += arr[value];
    }
    return sum/arr.length;
  };
  return average(array.filter(callback));
};


console.log(F([1,23,2,6,12,0],fn));