let active;
function ref(initValue) {
  let value = initValue;
  let dep = new Dep();
  return Object.defineProperty({}, "value", {
    get() {
      dep.depend();
      return value;
    },
    set(newValue) {
      value = newValue;
      dep.ontify();
    },
  });
}

class Dep {
  deps = new Set();
  depend() {
    if (active) {
      this.deps.add(active);
    }
  }
  ontify() {
    this.deps.forEach((dep) => queueJob(dep));
  }
}
let queue = [];
function nextTick(cb) {
  return Promise.resolve().then(cb);
}
function queueJob(job) {
  if (!queue.includes(job)) {
    queue.push(job);
    nextTick(flushJobs);
  }
}
function flushJobs() {
  let job;
  while ((job = queue.shift()) !== undefined) {
    job();
  }
}

function watch(cb) {
  active = cb;
  active();
  active = null;
}

let x = ref(1);
watch(() => {
  console.log("changeX" + x.value);
});
x.value = 3;
x.value = 4;
x.value = 5;
x.value = 6;
x.value = 7;
