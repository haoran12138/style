class Pub {
  constructor() {
    this.events = {};
  }
  on(eventname, callback) {
    if (this.events[eventname]) {
      this.events[eventname].push(callback);
    } else {
      this.events[eventname] = [callback];
    }
  }
  emit(eventName, ...data) {
    let eventList = this.events[eventName];
    if (eventList) {
      eventList.forEach(item => {
        item.call(null, data);
      });
    }
  }
  once(eventName, callback) {
    let f = data => {
      callback.call(null, data);
      this.off(eventName, f);
    };
    this.on(eventName, f);
  }
  off(eventName, callback) {
    if (!arguments) {
      this.events = Object.create(null);
    }
    if (eventName instanceof Array) {
      eventName.forEach(item => {
        this.off(item, callback);
      });
    }
    if (!callback) {
      delete this.events[eventName];
    } else {
      this.events[eventName] = this.events[eventName].filter(item => {
        return item !== callback;
      });
    }
  }
}

let pub = new Pub();
let f = function (data) {
  console.log("1", data);
};
pub.on("aa", f);

pub.once("aa", function (data) {
  console.log("2", data);
});

pub.once("aa", function (data) {
  console.log("3", data);
});
pub.off("aa", f);
setTimeout(() => {
  pub.emit("aa");
  pub.emit("aa", "cc", "asdf");
}, 1000);
