//?================================================================================

class Calculator {
  //* helper function
  #checkInt(a,b) {
    if (!Number.isInteger(a) && !Number.isInteger(b)) {
      const typeError = new Error('매개변수는 정수타입이어야 합니다.');
      throw typeError;
    }
  }
  add(a,b) {
    this.#checkInt(a,b);
    return a + b;
  }
  minus(a,b) {
    this.#checkInt(a,b);
    return a - b;
  }
  divide(a,b) {
    this.#checkInt(a,b);
    return a / b;
  }
  multiply(a,b) {
    this.#checkInt(a,b);
    return a * b;
  }
}

//* ?
const test = new Calculator();
console.log(test.add(5,6));
// console.log(test.#checkInt(5,6))

//? Q.2 ================================================
//* 1. Calculator의 helper function으로 ( checkInt )제작
//*   - checkInt 함수는 2개의 매개변수를 받고 매개변수가 모두 정수형이 아니면 에러를 발생시킵니다
//*     checkInt 함수는 add, minus등과 같은 연산함수에 들어가 연산함수의 매개변수가 정수가 아니라면 에러를 발생시킵니다.
//*
//* 2. helper function의 장점?
//*   - 제작하면서 느끼게 된 것은 각 연산함수를 만들 때 마다 타입검사를 해야하는데, 이는 코드가 중복될 뿐만 아니라
//*     물리적인 코드 길이가 길어서 가독성을 해칩니다. 중복하여 반복되는 연산을 하나의 함수로 묶고,
//*     이를 참조하는 식으로 중복된 코드를 없앰으써 가독성을 증가시킵니다. (코드를 입력하는 귀찮음이 줄어듭니다...)
//*
//* 3. helper function을 사용하지 않고 구현할 수 있는 방법으로 당장 떠오르는 것은
//*   - 모든 과정을 전부 작성하면 가능하다고 생각합니다.