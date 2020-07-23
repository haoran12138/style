// 命令模式  按键重放 撤销
let commands = {
	"119": "W",
	"115": "S",
	"97": "A",
	"100": "D"
};
let btnObj = document.querySelector("button");
let commandStack = [];
let stateTime = "";

let Ryn = {
	W: function () {
		//  ... 复杂操作
		console.log("w操作");
	},
	S: function () {
		console.log("s操作");
	},
	A: function () {
		console.log("a操作");
	},
	D: function () {
		console.log("d操作");
	}
};

let makeCommad = function (receiver, state) {
	return function () {
		if (receiver[state]) {
			return receiver[state]();
		} else {
			return false;
		}
	};
};

document.onkeypress = function (e) {
	let keyCode = e.keyCode;
	let command = makeCommad(Ryn, commands[keyCode]);
	if (command) {
		stateTime = stateTime ? stateTime : +new Date();
		command();
		commandStack.push({ val: command, time: new Date() - stateTime });
	}
};

btnObj.onclick = function () {
	if (commandStack <= 0) return;
	let maxTime = commandStack[commandStack.length - 1].time;
	while (commandStack.length > 0) {
		let data = commandStack.shift();
		if (data.time > maxTime - 3000) {
			setTimeout(() => {
				data.val();
			}, data.time - 3000);
		}
	}
};
