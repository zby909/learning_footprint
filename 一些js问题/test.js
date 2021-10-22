class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, callBackFn) {
    if (this.events[type]) {
      this.events[type].push(callBackFn);
    } else {
      this.events[type] = [callBackFn];
    }
  }

  off(type, callBackFn) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter(i => i != callBackFn);
    }
  }

  emit(type, p) {
    this.events[type] &&
      this.events[type].forEach(fn => {
        fn.call(this, p);
      });
  }
}

let myfun = p => {
  console.log('p', p);
};
let myfun2 = p => {
  console.log('p2', p);
};

let myEvent = new EventEmitter();
myEvent.on('click', myfun);
myEvent.on('click', myfun2);
myEvent.emit('click', 99);
myEvent.off('click', myfun2);
myEvent.emit('click', 99);
