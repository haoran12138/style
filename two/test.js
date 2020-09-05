function tet() {
  let value = 13;
  return {
    get value() {
      return "123";
    },
    set value(newValue) {
      console.log("asdf" + newValue);
    },
  };
}

let a = tet();

a.value = 12355;
console.log(a.value);
