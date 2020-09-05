// 实现reactive 方法
let active;

function watch(cb) {
  active = cb;
  active();
  active = null;
}
function reactive(obj) {}
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
      dep.notify();
    },
  });
}

let data = reactive({
  count: 0,
});
for (let index = 0; index < 5; index++) {
  data.count++;
}
watch(() => {
  console.log("data.count" + data.count);
});
