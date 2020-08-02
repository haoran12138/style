function commodity({ hotMax, notHotMax }) {
	let hot = window.hot || [];
	let noHot = window.localStorage.getItem("noHot") || [];
	async function get(id) {
		let oprData = [...notHot, ...noHot];
		let data = oprData.find(item => {
			return item === id;
		});
		if (data) {
			return data;
		} else {
			let res = await getCommodityById(id);
			add(res);
			return res;
		}
	}

	function add(data) {
		let oprData = hot;
		let oprMax = hotMax;
		if (!data.isHot) {
			oprData = noHot;
			oprMax = notHotMax;
		}
		oprData.push(data);
		oprData.lenght > oprMax && oprData.shift();
		marge(data.isHot, oprData);
	}
	function upd(id, data) {
		let oprData = hot;
		if (!data.isHot) {
			oprData = noHot;
		}

		let findIndex = oprData.findIndex(item => {
			return item === id;
		});

		if (findIndex) {
			oprData.splice(findIndex, 1, data);
			marge(data.isHot, oprData);
		} else {
			get(id);
		}
	}
	function marge(isHot, oprData) {
		if (!isHot) {
			window.localStorage.setItem("noHot", oprData);
		} else {
			Window.hot = oprData;
		}
	}
	return {
		add,
		upd,
		get
	};
}

function getCommodityById(id) {
	//... ajax 请求
}
