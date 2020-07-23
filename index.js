// 惰性单例
// var getSingle = function (fn) {
// 	var result;
// 	return function () {
// 		return result || (result = fn.apply(this, arguments));
// 	};
// };

// function A(name) {
// 	this.name = name;
// }

// var createA = getSingle(function (name) {
// 	return new A(name);
// });

// var a = createA("a1");
// var b = createA("a2");
// console.log(a.name);
// console.log(b.name);
// console.log(a === b);

var obj = {
	car: {
		mobil: ""
	},
	other: [
		{
			mobil: ""
		}
	]
};
let key = "car.mobil";
obj[key.split(".")] = "asdf";
function setDataFn(path, value, obj) {
	const arr = path.split(".");
	const len = arr.length - 1;
	arr.reduce((cur, key, index) => {
		if (typeof cur[key] === "undefined") {
			throw "不存在";
		}
		if (index === len) {
			cur[key] = value;
		}
		return cur[key];
	}, obj);
}
let key = "car.mobil";
obj[key.split(".")] = "asdf";
setDataFn("car.mobil", 1234, obj);
setDataFn("other.0.mobil", 4312, obj);
console.log(obj);

// let arr = "car.mobile.aa".split(".");
// let arg = obj;
// for (let i = 0; i < arr.length - 1; i++) {
// 	arg = arg[arr[i]];
// }

// arg[arr[arr.length - 1]] = "123";

// console.log(obj.car.mobile.aa);
var obj = {
	car: {
		mobile: {
			aa: ""
		}
	},
	other: [{ mobil: "1234" }]
};

function f1(path, val, obj) {
	let keys = path.split(".");
	let endKeys = keys.pop();
	keys.forEach((item, index) => {
		obj = obj[item];
	});
	obj[endKeys] = val;
}

f1("car.mobile.aa", 1234, obj);
