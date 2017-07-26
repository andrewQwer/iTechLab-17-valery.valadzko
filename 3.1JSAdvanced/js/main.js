// Partial application
var G = function () {
  let result = '';
  for (let i = 0; i < arguments.length; i++) {
    result += ' ' + arguments[i];
  }
  return result;
};

var constr = function (fn, ...argArr1) {
    return function (...argArr2) {
        return fn.apply(this, argArr1.concat(argArr2));
    };
};

var F = constr(G, 2, 4);

// alternative built-in
// var F = G.bind(null, 4, 5);

console.log('вызов с предустановленными 2,4');
console.log(F(2,3));
console.log(F(1,1,1));
console.log(F(6,7,8,9,10,11,'..etc'));