function exampleOne(arr, dataType, itemToFind) {
  if (Array.isArray(arr) === false) {
    console.log("배열이 아닙니다");
    return false;
  }
  const isDataTypeMatched = typeof itemToFind === dataType;
  const isItemExist       = arr.includes(itemToFind);

  if (isDataTypeMatched === true && isItemExist === true) {
    console.log(`${itemToFind}은(는) 배열에 존재합니다`)
    return true;
  } else if (isItemExist === false) {
    console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다`)
    return false;
  } else if (isDataTypeMatched === false) {
    console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다`)
    return false;
  }
}

const basicData = ['안녕하세요','어디선가','입력된','데이터를','찾아보는','함수입니다'];

// exampleOne(basicData, 'string', '어디선가');

//? ====================================================================================

class ExampleTwo {
  constructor(arr, dataType) {
    this._arr        = arr;
    this.dataType   = dataType;
  }
  
  set _arr(value) {
    if (Array.isArray(value)) {
      this.arr = value;
    } else {
      console.log('첫 번째 매개변수는 배열이어야 합니다');
    }
  }
  
  typeMatch(itemToFind) {
    if (typeof itemToFind === this.dataType) {
      // console.log(`(${itemToFind})은(는) ${this.dataType} 타입 입니다.`)
      return true;
    } else {
      // console.log(`(${itemToFind})은(는) ${this.dataType} 타입이 아닙니다.`)
      return false;
    }
  }
  
  includesMatch(itemToFind) {
    if (this.arr.includes(itemToFind)) {
      // console.log(`${itemToFind}은(는) ${this.arr}배열에 포함되어 있습니다.`)
      return true;
    } else {
      // console.log(`${itemToFind}은(는) ${this.arr}배열에 포함되어 있지 않습니다.`)
      return false;
    }
  }
  
  searchMatch(itemToFind) {
    if (!this.typeMatch(itemToFind)) {
      return console.log(`(${itemToFind})은(는) ${this.dataType} 타입이 아닙니다.`)
    } else if (!this.includesMatch(itemToFind)) {
      return console.log(`${itemToFind}은(는) ${this.arr}배열에 포함되어 있지 않습니다.`)
    } else {
      return console.log(`${itemToFind}은(는) ${this.dataType} 타입이며\n배열에 포함되어 있습니다.`)
    }
  }
}

const exam1 = new ExampleTwo(basicData, 'string');
// console.log(exam1.searchMatch('안녕하세요'));/

//? ====================================================================================

function exampleThree(arr, dataType) {
  let   inputArr;
  // let   count = 0;
  const inputDataType = dataType;
  if (Array.isArray(arr)) {
    inputArr = arr;
  } else {
    console.log('첫 번째 매개변수는 배열로 입력해 주세요')
  }
  // count++
  // console.log(`함수를 ${count} 번 실행하셨습니다.`)
  return function itemMatch(itemToFind) {
    let typeMatchResult;
    if (typeof itemToFind === inputDataType) {
      typeMatchResult = true;
    } else {
      typeMatchResult = false;
    }
    if (typeMatchResult === true) {
      if (inputArr.includes(itemToFind)) {
        return console.log(`${itemToFind}은(는) ${inputDataType} 타입이며\n배열에 포함되어 있습니다.`)
      } else {
        return console.log(`${itemToFind}은(는) ${inputDataType} 타입이지만\n배열에 포함되어 있지 않습니다.`)
      }
    } else if (typeMatchResult === false) {
      if (inputArr.includes(itemToFind)) {
        return console.log(`${itemToFind}은(는) ${inputDataType} 타입이 아니지만\n배열에 포함되어 있습니다.`)
      } else {
        return console.log(`${itemToFind}은(는) ${inputDataType} 타입이 아니며\n배열에 포함되어 있지 않습니다.`)
      }
    }
  }
}

const exam2 = exampleThree(basicData,'string');
exam2('안녕하세요');
exam2('안녕하세요');
exam2(['안녕하세요']);