// 斐波纳切

function fib1(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return fib(n - 1) + fib(n - 2);
}

// 尾调用优化

// 尾递归
function fib2(n, a = 0, b = 1) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return b;
  }
  return fib2(n - 1, b, a + b);
}

let res = fib1(9);
console.log(res);
