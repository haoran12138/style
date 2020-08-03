/**
 * 是否为数组类型
 * @param {*} val
 */
function isArray(val) {
  return Object.prototype.toString.call(val) === "[object Array]";
}

/**
 * 是否为基础对象类型
 * @param {*} val
 */
function isPlainObject(val) {
  return Object.prototype.toString.call(val) == "[object Object]";
}

/**
 * 是否为对象类型
 * @param {*} val
 */
function isObject(val) {
  return val !== null && typeof val === "object";
}

/**
 * 是否为日期类型
 * @param {*} val
 */
function isDate(val) {
  return Object.prototype.toString.call(val);
}

function isString(val) {
  return typeof val === "string";
}

export default isType = {
  isArray,
  isPlainObject,
  isObject,
  isDate,
  isString
};
