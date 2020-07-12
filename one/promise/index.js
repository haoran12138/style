//  片段1
// const promise = new Promise((resolve, reject) => {
// 	console.log(1);
// 	resolve();
// 	console.log(2);
// });

// promise.then(() => {
// 	console.log(3);
// });
// console.log(4);

// // then 接收两个参数(可选) 如果参数不是函数类型会忽略

// const promise = Promise.resolve(1)
// 	.then(2)
// 	.then(Promise.resolve(3))
// 	.then(console.log);

// const promise1 = Promise.resolve(1);
// const promise2 = promise1.then(2);
// const promise3 = promise2.then(Promise.resolve(3));
// const promise4 = promise3.then(console.log);

function f1(x) {
	console.log(x);
	return "a";
}
function f2(x) {
	console.log(x);
	return x + "b";
}
function f3(x) {
	console.log(x);
	return x + "c";
}
function f4(x) {
	console.log(x);
	return x + "d";
}

let arr = [f1, f2, f3, f4];
let pr = Promise.resolve();
while (arr.length) {
	let item = arr.shift();
	pr = pr.then(item);
}
