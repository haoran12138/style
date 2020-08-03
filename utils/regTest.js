let nameReg = /^[\u2E80-\u9FFF]{2,10}$/;
let telReg = /^1[23456789]\d{9}$/;
let plateReg = /^([ABCDEFGHJKLMNPQRSTUVWXY][1-9DF][1-9ABCDEFGHJKLMNPQRSTUVWXYZ]\d{3}[1-9DF]|[ABCDEFGHJKLMNPQRSTUVWXY][\dABCDEFGHJKLNMxPQRSTUVWXYZ]{5})$/;
let cardIdReg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
// 汉字名字
export function isNameReg(str) {
  return nameReg.test(str);
}
// 手机号
export function isTelReg(str) {
  return telReg.test(str);
}

// 车牌  （不带 省份）
export function isPlateReg(str) {
  return plateReg.test(str);
}

// 身份证  （不带 省份）
export function isCardIdNumReg(str) {
  return cardIdReg.test(str);
}
