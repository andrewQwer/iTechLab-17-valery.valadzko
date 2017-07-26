// Linear unfold
var fn = function (counter) {
  if (counter < 5) {
    counter++;
    return counter;
  } else {
    return false;
  }
};

var F = function (callback, initialValue) {
  let result = [initialValue];
  let currentArg = initialValue;
  while (currentArg) {
    currentArg = callback(currentArg);
    if (currentArg !== false) {
      result.push(currentArg);
    }
  }
  return result;
};

console.log(F(fn,1));