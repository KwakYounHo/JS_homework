//* 짝수인지 홀수인지 점검하는 함수
function checkOddsEvens(number) {
  if (typeof number !== 'number') {
    const typeError = new Error('짝/홀수 체크 함수의 매개변수는 숫자형이어야 합니다.');
    throw typeError;
  }
  let result = number % 2
  switch (result) {
    case 0 :
      return 'even';
    default :
      return 'odds';
  }
}

//* 짝/홀수 점검하는 함수 테스트
// console.log(checkOddsEvens('나는 문자열이지롱'))
// let test = [];
// for (let i=0; i<10; i++) {
//   test.push(Math.floor(Math.random() * (101)))
// }
// console.log(test.map(e=>e + ' : ' +checkOddsEvens(e)));
// console.log(checkOddsEvens(-4152322));
// console.log(checkOddsEvens(-4152321));


//* 엘레베이터
function oddElevator(floorNumber) {
  
}

function evenElevator(floorNumber) {

}