// 두 매개변수의 타입을 체크하는 함수
function exampleOne(first, second, dataType='number') {
  if (typeof first !== dataType || typeof second !== dataType) {
    //! and(&&)를 쓰면 둘 중 하나만 데이터 타입이 맞고, 다른 하나가 틀렸을 때 걸러내지 못한다.
    const typeError = new Error(`매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`);
    throw typeError;
  }
}

// 배열의 길이가 짝수일 때 true
function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


// second가 클 때 true가 됨
function isExampleTwo(first, second) {
  exampleOne(first, second);

  let booleanResult;

  if (first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  if (typeof booleanResult === 'boolean') {
    return booleanResult;
  } else {
    const typeError = new Error('조건식이 boolean이 아니어서 리턴하지 못했습니다.');
    throw typeError;
  }
}

let basicData = [4,6,23,5,94,35,44,66];

function exampleThree(array, functionOne, functionTwo) {
  try {
    exampleOne(functionOne,functionTwo,'function');
  } catch (e) {
    return console.error(e);
  }
  if (Array.isArray(array)) {
    if (arrayLengthEven(array) === true) {
      let arrayResult = [];
      for (let i=0; i<(array.length / 2); i++) {
        if (i===0) {
          if (functionTwo(array[i], array[i+1])) {
            arrayResult.push([array[i], array[i+1]]);
          } else {
            arrayResult.push([array[i+1], array[i]]);
          }
        } else {
          if (functionTwo(array[i*2], array[(i*2)+1]) === true) {
            arrayResult.push([array[i*2], array[(i*2)+1]]);
          } else {
            arrayResult.push([array[(i*2)+1], array[i*2]]);
          }
        }
      }
      return arrayResult
    } else {
      return new Error('배열의 길이는 짝수여야 합니다.')
    }
  } else {
    return new Error('첫 번째 매개변수는 배열이어야 합니다.')
  }
}

console.log(exampleThree(basicData, exampleOne, isExampleTwo));
// console.log(exampleOne(isExampleTwo,'isExampleTwo123','function'))


// const movies = [
//   { title : '이상해씨', rating : 9.2},
//   { title : '버터플',   rating : 8.7},
//   { title : '피죤투',   rating : 9.5},
//   { title : '루주라',   rating : 7.8},
//   { title : '냐옹',     rating : 8.3}
// ];

// function exampleOne(minRating) {
//   const filteredMovies = movies.filter(movie => movie.rating >= minRating);
//   const sortedMovies   = [...filteredMovies].sort((a,b) => b.rating - a.rating)
//   const topThree       = sortedMovies.slice(0,3);
//   const topThreeTitle  = topThree.map(element => element.title)
//   return topThreeTitle
// }

// console.log(exampleOne(8))