// 缓存函数   对于需要大量计算的函数  把每次计算的结果存入对象 调用函数时判断 是否存在该key  减少重复计算  (使用到 高阶函数 闭包 概念)

// fn 有且只有一个 参数
let memoize = function (fn) {
  let cache = {};
  return function (key) {
    if (!cache[key]) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  };
};
function fn(a, b) {
  console.log("1");
  return a * b;
}

fn = memoize(fn);
fn(1);
fn(1);
fn(1);
fn(1);

/**
 * Memoization
 *
 * Memoization 是一种将函数返回值缓存起来的方法，在 Lisp, Ruby, Perl, Python 等语言中使用非常广泛。
 * 随着 Ajax 的兴起，客户端对服务器的请求越来越密集（经典如 autocomplete），
 * 如果有一个良好的缓存机制，那么客户端 JavaScript 程序的效率的提升是显而易见的。
 *
 * 请实现一个memo函数，并使得memo.test.js中的单元测试通过
 *
 * @param {Function} func 需要执行的函数
 * @param {Function} hasher 散列函数
 */
function memo(func, hasher) {
  let cache = {};
  return function (key) {
    if (hasher) {
      key = hasher.apply(this, arguments);
    }
    if (!cache[key]) {
      cache[key] = func.apply(this, arguments);
    }
    return cache[key];
  };
}
