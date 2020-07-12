var obj = {};
Object.defineProperty(obj, "age", {
	value: 2,
	writable: false
});
obj.age = 12;

console.log(obj.age);
