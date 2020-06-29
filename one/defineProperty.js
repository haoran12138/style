let obj1 = {};
Object.defineProperty(obj1, "aa", {
  value: "2323",
  writable: true,
  configurable: false,
  enumerable
});

console.log(obj1);
