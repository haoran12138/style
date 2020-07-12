function* f1() {
	yield 1;
	console.log(1);
	yield 2;
	console.log(2);
	yield 3;
	console.log(3);
	return "aa";
}

let a = f1();
a.next();
a.next();
a.return();
