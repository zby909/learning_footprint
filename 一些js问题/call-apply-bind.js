/*
 * @Description:
 * @Author: zby
 * @Date: 2021-10-19 14:53:48
 * @LastEditors: zby
 * @Reference:
 */
Function.prototype.myCall = function (context, ...arr) {
  if (context === null || context === undefined) {
    context = window;
  }

  const fn = Symbol('fn');
  //这里的this是指要调用的函数
  context[fn] = this;
  let result = context[fn](...arr);
  delete context[fn];
  return result;
};

let obj = {
  a: 1,
  b: 2,
};

function f1(a) {
  console.log(a);
  console.log(this);
}

/////////////////////////apply
Function.prototype.myApply = function (context, arr = []) {
  if (context === null || context === undefined) {
    context = window;
  }

  const fn = Symbol('fn');
  //这里的this是指要调用的函数
  context[fn] = this;
  let result = context[fn](...arr);
  delete context[fn];
  return result;
};

//////////////bind
Function.prototype.myBind = function (objThis, ...params) {
  let thisFn = this;
  let fToBind = function (...secondParams) {
    let isNew = this instanceof fToBind;
    let context = isNew ? this : Object(objThis);
    return thisFn.call(context, ...params, ...secondParams);
  };
  if (thisFn.prototype) {
    fToBind.prototype = Object.create(thisFn.prototype);
  }
  return fToBind;
};
