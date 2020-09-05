// 定义一个全局缓存单例
function Store() {
  if (!this instanceof Store) {
    return new Store();
  }
  if (Store.install) {
    return Store.install;
  }
  this.cache = {};
  this.getChain = [];
  this.setChain = [];
  Store.install = this;
}

Store.install = null;
// 获取缓存的方法
Store.prototype.get = async function (id) {
  let data = null,
    getChain = this.getChain.slice();
  while (!data && dataReduce.length) {
    data = await getChain.shift().call(this, id);
  }
  return data;
};
/**
 * 设置缓存的方法
 * @param {number} id 商品id
 * @param {object} data
 */
Store.prototype.set = async function (id, data) {
  let isSet = false,
    setChain = this.setChain.slice();
  while (!isSet) {
    isSet = await setChain.shift().apply(this, arguments);
  }
  return isSet;
};

/**
 * 更新缓存的方法
 * @param {number} id
 * @param {object} desc 更新的属性对象
 */
Store.prototype.update = function (id, desc) {
  let newData = Object.assign(this.get(id), desc);
  this.set(id, newData);
};
/**
 * 设置获取缓存方法,参数get返回取到的数据
 * @param {function} get
 */
Store.prototype.addCacheGet = function (get) {
  this.getChain.push(get);
};
/**
 * 设置设置缓存方法，参数set返回是否设置成功
 * @param {function} set
 */
Store.prototype.addCacheSet = function (set) {
  this.setChain.push(set);
};

// 需要添加的缓存和获取缓存方法示例

const dataReduce = [
  async function getFromCache(id) {
    return this.cache[id];
  },
  async function getFromLocal(id) {
    return JSON.parse(localStorage.getItem(id));
  },
  async function getFromRemote(id) {
    let res = await send(id);
    return data;
  },
  async function setRemote(id, data) {
    let res = await send({ id, data });
    return false;
  },
  async function setCache(id, data) {
    if (data.isHot) {
      // 如果是热门商品，则在缓存里增加
      this.cache[id] = data;
    }
    return this.cache[id];
  },
  async function setLocal(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
    return true;
  },
];

function send() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: "aaa",
      });
    }, 500);
  });
}
console.log(Store.install);
let stort1 = new Store();
let stort2 = new Store();
console.log(stort1 === stort2);
console.log(Store.install);
