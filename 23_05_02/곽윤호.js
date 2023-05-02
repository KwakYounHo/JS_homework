const add = require('./utility-module/add.js');
const minus = require('./utility-module/minus.js');
const divide = require('./utility-module/divide.js');
const multiply = require('./utility-module/multiply.js');

const a = 10;
const b = 20;

// console.log(add(a,b));
// console.log(minus(a,b));
// console.log(divide(a,b));
// console.log(multiply(a,b));

//?================================================================================

class Calculator {
  //* helper function
  checkInt(a,b) {
    if (!Number.isInteger(a) && !Number.isInteger(b)) {
      const typeError = new Error('매개변수는 정수타입이어야 합니다.');
      throw typeError;
    }
  }
  add(a,b) {
    this.checkInt(a,b);
    return a + b;
  }
  minus(a,b) {
    this.checkInt(a,b);
    return a - b;
  }
  divide(a,b) {
    this.checkInt(a,b);
    return a / b;
  }
  multiply(a,b) {
    this.checkInt(a,b);
    return a * b;
  }
}

//* ?
const test = new Calculator();
console.log(test.add(5,6));

//? Q.2 ================================================
// 