let arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduce((prev, cur) => {
  return prev + cur;
}, 0);
console.log(sum);

let arr2 = [1, 2, 3, 4, 1, 4, 2, 6, 47, 2, 4, 5, 5];

let newArr = arr2.reduce((prev, cur) => {
  if (prev.indexOf(cur) === -1) prev.push(cur);
  return prev;
}, []);

console.log(newArr);
