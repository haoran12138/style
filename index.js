// 惰性单例
var getSingle = function (fn) {
	var result;
	return function () {
		return result || (result = fn.apply(this, arguments));
	};
};

function A(name) {
	this.name = name;
}

var createA = getSingle(function (name) {
	return new A(name);
});

var a = createA("a1");
var b = createA("a2");
console.log(a.name);
console.log(b.name);
console.log(a === b);
