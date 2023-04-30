//* 짝수인지 홀수인지 점검하는 함수
function checkOddsEvens(number) {
  let result = number % 2
  switch (result) {
    case 0 :
      return 'even';
    default :
      return 'odds';
  }
}

//* 짝/홀수 점검하는 함수 테스트
let test = [];
for (let i=0; i<10; i++) {
  test.push(Math.floor(Math.random() * (101)))
}
console.log(test.map(e=>e + ' : ' +checkOddsEvens(e)));


//* 엘레베이터
function oddElevator(floorNumber) {
  
}

function evenElevator(floorNumber) {

}