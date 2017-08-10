// Partial application
let G = (...arg) => {
  let result = '';
  for (let i of arg) {
    result += ' ' + i;
  }
  return result;
};

let constr = (fn, ...argArr1) => {
  return (...argArr2) => {
    return fn.apply(this, argArr1.concat(argArr2));
  }
};

let F = constr(G, 2, 4);

// alternative built-in
// var F = G.bind(null, 4, 5);

console.log('вызов с предустановленными 2,4');
console.log(F(2,3));
console.log(F(1,1,1));
console.log(F(6,7,8,9,10,11,'..etc'));