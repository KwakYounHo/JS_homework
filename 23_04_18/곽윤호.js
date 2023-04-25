let basicData = {
  count        : 10,
  min          : 1,
  max          : 10,
  divideNumber : 5
}

function exampleOne(count, min, max) {
  let exampleArr = [];
  for (let i=0; i<count; i++){
    exampleArr.push(Math.random() * (max - min) + min);
  }
  const result = exampleArr.map(e=>{return Number(e.toFixed(2))});
  return result;
}

function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: []
  }
  if (!Number.isInteger(divideNumber)) {
    return '두 번째 매개변수는 정수만 입력 가능합니다.'
  }
  if (Array.isArray(array)) {
    array.forEach(element=>{
      if (element < divideNumber) {
        exampleObject.a.push(element);
      } else if (element > divideNumber) {
        exampleObject.b.push(element);
      }
    })
  } else {
    const typeError = new Error('매개변수는 배열이어야 합니다.')
    console.error(typeError);
  }
  return exampleObject;
}

function exampleThree(array) {
  if (Array.isArray(array)) {
    let action = array.reduce((acc,cur)=>acc + cur)
    return Number(action.toFixed(2));
  } else {
    const typeError = new Error('매개변수는 배열이어야 합니다.')
    console.error(typeError);
  }
}

function exampleFour(object) {
  let value;
  for (let p in object) {
    if (!Array.isArray(object[p])) {
      value = '프로퍼티 중 배열이 아닌 요소가 있습니다'
      return value;
    } else if (typeof exampleThree(object[p])!=='number'){
      value = '밸류가 배열이지만 숫자가 아닌 프로퍼티가 있습니다'
      return value;
    } else {
      value = true
    }
  }
  return value;
}

function exampleFive(objectOne, objectTwo) {
  let value;
  let objectOne_Arr = [];
  for (let p in objectOne) {
    objectOne_Arr.push(objectOne[p]);
  }
  const objectOne_result = objectOne_Arr.reduce((acc,cur)=>acc+cur);
  
  let objectTwo_Arr = [];
  for (let p in objectTwo) {
    objectTwo_Arr.push(objectTwo[p].reduce((acc,cur)=>acc+cur));
  }
  const objectTwo_result = objectTwo_Arr.reduce((acc,cur)=>acc+cur);
  return objectOne_result + objectTwo_result
}

console.log('exampleOne : ',exampleOne(basicData.count,basicData.min,basicData.max));
console.log('exampleTwo : ',exampleTwo(exampleOne(basicData.count,basicData.min,basicData.max), basicData.divideNumber));
console.log('exampleThree : ',exampleThree(exampleOne(basicData.count,basicData.min,basicData.max)))
console.log('exampleFour : ',exampleFour(exampleTwo(exampleOne(basicData.count,basicData.min,basicData.max), basicData.divideNumber)))
console.log('exampleFive : ',exampleFive(basicData,exampleTwo(exampleOne(basicData.count,basicData.min,basicData.max), basicData.divideNumber)))