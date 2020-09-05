// import fObj from "./index";

// console.log(fObj);

class Store {
  constructor() {
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
}
Store.install = null;

console.log(Store.install);

let store1 = new Store();
let store2 = new Store();
console.log(store2 === store1);
console.log(Store.install);
