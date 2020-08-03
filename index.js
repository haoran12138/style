function F() {
  let arr = [];
  var add = function () {
    arr.push(1);
  };
  var show = function () {
    console.log(arr);
  };
  return {
    add,
    show
  };
}

export default F();
