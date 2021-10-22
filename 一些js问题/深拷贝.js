//深拷贝简易版
//不拷贝环的话可以去掉hash相关字段
function deepClone(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Element) return obj.cloneNode(true);
  if (obj === null || typeof obj !== 'object') return obj;

  if (hash.get(obj)) return hash.get(obj);

  let newobj = obj instanceof Array ? [] : {};

  hash.set(obj, newobj);

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      newobj[i] = deepClone(obj[i], hash);
    }
  }
  return newobj;
}

//测试
let p = {
  name: 'zby',
  isMan: true,
  age: 21,
  car: null,
  house: '',
  lang: ['js', 'node'],
  mon: {
    name: 'ly',
  },
  bir: new Date('1999/10/24'),
  rex: /^[a-z]{1,3}$/,
  fun: function () {
    console.log('eat');
  },
  body: document.body,
};
p.o = p;

let a = deepClone(p);
console.log(a);
