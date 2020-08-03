// 对象方法实现
class Pub {
  constructor() {
    this.handler = {}; // 缓存队列 处理 先发布后订阅情况
    this.events = {}; // 订阅队列
  }
  // 订阅
  on(eventName, callback) {
    let eventList = this.events[eventName];
    let handlerList = this.handler[eventName];

    if (!eventList) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    // 有缓存的情况
    if (handlerList) {
      handlerList.forEach(data => {
        callback.apply(null, data); // data 正常是数组  不可以用call
      });
      delete this.handler[eventName];
    }
  }
  // 发布
  emit(eventName, ...data) {
    let eventList = this.events[eventName];
    let handlerList = this.handler[eventName];
    if (eventList) {
      eventList.forEach(item => {
        item.apply(null, data);
      });
    } else {
      // 事件无订阅  缓存下来
      if (!handlerList) {
        this.handler[eventName] = [];
      }
      this.handler[eventName].push(data);
    }
  }
  // 订阅一次
  once(eventName, callback) {
    let f = data => {
      callback.apply(null, data);
      this.off(eventName, f);
    };
    this.on(eventName, f);
  }
  // 取消订阅
  off(eventName, callback) {
    // 无参数 全部取消
    if (!arguments) {
      this.events = Object.create(null);
    }
    // eventName 为数组
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

// 闭包方法实现
function pubFn() {
  let handler = {};
  let events = {};
  function on(eventName, callback) {
    let eventList = events[eventName];
    let handlerList = handler[eventName];

    if (!eventList) {
      events[eventName] = [];
    }
    events[eventName].push(callback);
    if (handlerList) {
      handlerList.forEach(data => {
        callback.apply(null, data);
      });
      delete handler[eventName];
    }
  }
  function emit(eventName, ...data) {
    let eventList = events[eventName];
    let handlerList = handler[eventName];
    if (eventList) {
      eventList.forEach(item => {
        item.apply(null, data);
      });
    } else {
      if (!handlerList) {
        handler[eventName] = [];
      }
      handler[eventName].push(data);
    }
  }
  function once(eventName, callback) {
    let f = data => {
      callback.apply(null, data);
      off(eventName, f);
    };
    on(eventName, f);
  }
  function off(eventName, callback) {
    if (!arguments) {
      events = Object.create(null);
    }
    if (eventName instanceof Array) {
      eventName.forEach(item => {
        off(item, callback);
      });
    }
    if (!callback) {
      delete events[eventName];
    } else {
      events[eventName] = events[eventName].filter(item => {
        return item !== callback;
      });
    }
  }

  return {
    on,
    emit,
    once,
    off
  };
}

let pub = pubFn();
let f = function (data) {
  console.log(data);
};
// pub.on("aa", f);

// pub.once("aa", function (data) {
// 	console.log("2", data);
// });

// pub.once("aa", function (data) {
// 	console.log("3", data);
// });
// pub.off("aa", f);
// setTimeout(() => {
// 	pub.emit("aa");
// 	pub.emit("aa", "cc", "asdf");
// }, 1000);

pub.emit("a", 123);
pub.emit("a", 234);
pub.on("a", f);
