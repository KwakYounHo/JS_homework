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
  constructor(a,b) {
    this._a = a;
    this._b = b;
  }

  //* setter
  set _a(value) {
    this.checkInt(value)
    this.a = value;
  }
  set _b(value) {
    this.checkInt(value)
    this.b = value;
  }
  
  //* helper function
  checkInt(data) {
    if (!Number.isInteger(data)) {
      const typeError = new Error('매개변수는 정수타입이어야 합니다.');
      throw typeError;
    }
  }
  add() {
    return this.a + this.b;
  }
  minus() {
    return this.a - this.b;
  }
  divide() {
    return this.a / this.b;
  }
  multiply() {
    return this.a * this.b;
  }
}

//* setter test
// const sample = new Calculator('10',20);
// console.log(sample);


//* helper function test
const sample = new Calculator(243,123);
console.log(sample.add());
console.log(sample.minus());
console.log(sample.divide());
console.log(sample.multiply());

//? Q.2 ================================================
// 