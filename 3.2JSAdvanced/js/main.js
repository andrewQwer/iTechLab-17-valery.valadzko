// Currying
var sum = function () {
  let result = 0;
  for (let i =0; i < arguments.length; i++) {
    result+=arguments[i];
  }
  return result;
};

var constr = function (fn) {
  let args = [];
  return function currying(arg) {
    if (arg === undefined) {
      return fn.apply(this, args);
    } else {
      args.push(arg);
      return currying;
      }
    };
  };

var sum3 = constr(sum);

console.log(sum3(6)(7)(8)(20)());