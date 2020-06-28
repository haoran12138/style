let calculate = x => (x + 10) * 10;
console.log(calculate(10));

let add = x => x + 10;
let multiply = y => y * 10;
console.log(multiply(add(10)));

// let compose = (f, g) => {
//   return function (x) {
//     return f(g(x));
//   };
// };
// console.log(compose(multiply, add)(10));

const compose = function () {
  let args = [...arguments];
  return function (x) {
    return args.reduceRight(function (res, cb) {
      return cb(res);
    }, x);
  };
};
console.log(compose(multiply, add)(10));

const pipe = function () {
  let args = [...arguments];
  return function (x) {
    return args.reduce(function (res, cb) {
      return cb(res);
    }, x);
  };
};

console.log(pipe(multiply, add)(10));
