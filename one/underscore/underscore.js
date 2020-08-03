(function (root) {
	var _ = function (data) {
		if (!(this instanceof _)) {
			return new _(data);
		}
		this.wrapper = data;//管道中更新的数据
	};
	_.unique = function (arr, callback) {
		if (Object.prototype.toString.call(arr) !== "[object Array]") {
			throw "unique should be an array type parameter";
		}

		var set = new Set();
		arr.forEach(item => {
			let i = callback ? callback(item) : item;
			set.add(i);
		});
		return Array.from(set);
	};

	_.max = function (arr) {
		if (Object.prototype.toString.call(arr) !== "[object Array]") {
			throw "unique should be an array type parameter";
		}
		let v = arr.sort((a, b) => b - a);
		return v[0];
	};

	_.chain = function (data) {
		var instance = _(data);
		instance._chain = true;
		return instance;
	};

	_.prototype.ending = function () {
		return this.wrapper;
	};

	_.posscess = function (target) {
		var result = [];
		for (var key in target) {
			result.push(key);
		}

		return result;
	};
	var beforeHook = function (keys, callback) {
		for (var i = 0; i < keys.length; i++) {
			callback(keys[i]);
		}
	};
	var model = function (instance, outcome) {
		if (instance._chain) {
			instance.wrapper = outcome;
			return instance;
		}
		return outcome;
	};
	_.mixin = function (object) {
		beforeHook(_.posscess(object), function (key) {
			object.prototype[key] = function () {
				let args = [this.wrapper];
				Array.prototype.push.apply(args, arguments);
				return model(this, object[key].apply(this, args));
			};
		});
	};

	_.mixin(_);

	root._ = _;
})(this);
