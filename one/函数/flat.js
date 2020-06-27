let arr = [1, 3, 4, 5, [5, 2, 7, [99, 23, [11, [22, [33]]]]]];
let arr1 = arr.flat();
console.log(arr1);

let arr2 = arr.flat(2);
console.log(arr2);

let arr3 = arr.flat(Infinity);
console.log(arr3);
