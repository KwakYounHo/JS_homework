function examOne(first, second) {
  if (typeof(first)==='string' && typeof(second)==='string') {
    return '문자열 데이터를 입력하셨습니다.';
  } else {
    return first + second;
  }
}

function examTwo(first, second, third) {    // 매개변수가 숫자여야만 실행되는 함수
  if (typeof(first)==='number' && typeof(second)==='number' && typeof(third)==='number') {
    return first * second * third
  } else {
    const typeError = new Error('매개변수는 숫자로만 이루어져야 합니다.')
    console.error(typeError);
  }
}

function examThree(str) {
  if (typeof(str)==='string') {

    // const search = str.split('');
    // let count=0;
    // for (i=0; i<search.length; i++) {
    //   count++
    // }
    // return count;

    //! 배열의 length프로퍼티마저 사용할 수 없다면,
    const search = str.split('');
    const result = search.unshift('몇 글자일까');
    return result-1;
    } else {
      const typeError = new Error('매개변수는 문자열로만 이루어져야 합니다.')
      console.error(typeError);
    }
}

function examFour(array) {
  let min;
  if (Array.isArray(array)) {
    for (let i=0; i<array.length; i++) {
      if (i===0) {
        min=array[i];
      }
      if (min > array[i]) {   // 최대값으로 바꾸려면 등호만 바꾸면 된다.
        min = array[i]
      }
    }
  } else {
    const typeError = new Error('매개변수는 배열이어야 합니다.');
    console.error(typeError);
  }
  return min;
}

function examFive(array) {
  if (Array.isArray(array)) {
    let result = [0];
    for (let i=0; i<array.length; i++) {
      const plus = result[0]+array[i];
      result.splice(0,1,plus);
    }
    return result[0];
  } else {
    const typeError = new Error('매개변수는 배열이어야 합니다.');
    console.error(typeError);
  }
}

console.log(examOne(2,3));
console.log(examTwo(2,3,4));
console.log(examThree('hello'));
console.log(examFour([3,1,4,2]));
console.log(examFive([1,2,3]));