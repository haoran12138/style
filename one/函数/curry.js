// import _ from "lodash";
const _ = require("lodash");
// 把接送多个参数到函数 转化为接送一个参数的多个函数  叫做 柯里化   一个n元函数 =》 n个一元函数; f(a,b,c) => f(a)(b)(c)

function girl(name, age, single) {
	return `我叫${name}，今年${age}，${single}单身`;
}

function newgirl(name) {
	return function (age) {
		return function (single) {
			return `我叫${name}，今年${age}，${single}单身`;
		};
	};
}

console.log(girl("画风", 12, "是"));
let res = newgirl("格纹")(25)("不是");
console.log(res);

//使用 lodash 封装 curry
let getProp = _.curry((key, obj) => {
	return obj[key];
});

// 我叫a 今年18
// 我叫b 今年18
// 我叫c 今年18
// 我叫d 今年18
// 我叫e 今年18
function getInfo(num) {
	return function (name) {
		console.log(`我叫${name} 今年${num}`);
	};
}

var infoAge = getInfo(18);
infoAge("bbb");
infoAge("ccc");
