// 偏函数  f(a,b,c) =>  f(a,b)(c)  or f(a)(b,c)

function add(a, b, c) {
  return a * b * c;
}
let parAdd = add.bind(null, 1, 5);
let res = parAdd(4);
console.log(res);
