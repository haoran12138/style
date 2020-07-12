const fs = require("fs");
// const Thunk = function (fn) {
// 	return function (...args) {
// 		return function (callback) {
// 			return fn.call(this, ...args, callback);
// 		};
// 	};
// };

// const readFileThunk = Thunk(fs.readFile);

// function func(x, callback) {
// 	callback && callback(x);
// }
// func(1, () => {
// 	func(2, () => {
// 		func(3);
// 	});
// });

// function* startGeneragtor() {
// 	let data = [1, 2, 3, 4, 5];
// 	function readFile(x) {
// 		console.log(x);
// 	}
// 	while (data.length) {
// 		yield readFile(data.shift());
// 	}
// }

// let g = startGeneragtor();
// while (true) {
// 	let { done, value } = g.next();
// 	if (done) break;
// }

const Thunk = function (fn) {
	return function (...args) {
		return function (callback) {
			return fn.call(this, ...args, callback);
		};
	};
};
const readFileThunk = Thunk(fs.readFile);

function run(fn) {
	var gen = fn();
	function next(err, data) {
		var result = gen.next(data);
		if (result.done) return;
		result.value(next);
	}
	next();
}

const g = function* () {
	const s1 = yield readFileThunk("./a.txt");
	console.log(s1.toString());
	const s2 = yield readFileThunk("./b.txt");
	console.log(s2.toString());
	const s3 = yield readFileThunk("./c.txt");
	console.log(s3.toString());
};

run(g);
