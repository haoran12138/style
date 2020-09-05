export default {
  install
};

function install(Vue) {
  Vue.prototype.$notify = function(txt) {
    let el = document.createElement("div");
    el.innerHTML = txt;
    el.className = "notify";
    document.body.appendChild(el);
    // setTimeout(() => {
    //   document.body.removeChild(el);
    // }, 2000);
  };
}
