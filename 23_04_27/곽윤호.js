import inquirer from 'inquirer';

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
      return 'odd';
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


//* 엘리베이터
function oddElevator(floorNumber) {

}

function evenElevator(floorNumber) {

}

async function elevator() {
  
  //* 엘리베이터 호출?
  const callElevator = await inquirer.prompt([
    {
      type : 'confirm',
      name : 'call',
      message : '엘레베이터를 호출하시겠습니까?'
    }
  ])

  //* 엘리베이터 호출 거절 -> 종료
  if (callElevator.call === false) {
    return;
  }

  //* 전체 층 배열
  let floor     = [-1,1,2,3,4,5,6,7,8,9,10]
  
  //* 호출 한 층수
  const yourFloor = await inquirer.prompt([
    {
      type    : 'list',
      name    : 'nowFloor',
      message : '현재 몇 층에 계신가요?',
      choices : floor
    }
  ])
  
  //* 모든 층 배열에서 현재 층 제거
  if (yourFloor.nowFloor === -1) {
    floor.splice(0,1);
  } else {
    floor.splice(yourFloor.nowFloor,1);
  }

  //* 지금 있는 층수의 홀/짝
  let nowOddEven = checkOddsEvens(yourFloor.nowFloor)==='even' ? '짝수':'홀수'

  // console.log(nowOddEven)

  //* 짝수층에서 엘리베이터 호출 시 홀수 층 배열에서 제거
  if (nowOddEven === '짝수') {
    floor = floor.filter(element => (element === -1 || element === 1 || checkOddsEvens(element) === 'even'));
  } else {
    floor = floor.filter(element => (element === -1 || element === 10 || checkOddsEvens(element) === 'odd'));
  }
  
  // console.log(floor);

  //* 몇 층으로 가시겠습니까?
  const targetFloor = await inquirer.prompt([
    {
      type    : 'list',
      name    : 'targetFloor',
      message : `현재 타고 계신 엘레베이터는 ( ${nowOddEven} ) 전용 엘리베이터 입니다.\n  몇 층으로 가시겠습니까?`,
      choices : floor
    }
  ])
  // console.log(targetFloor);

  //* 도착하였습니다.
  setTimeout(()=>{
    const message = `( ${targetFloor.targetFloor} ) 층입니다.`
    console.log(message);
    setTimeout(()=>{
      const message = `문이 열립니다.`
      console.log(message);
      setTimeout(()=>{
        const message = '문이 닫힙니다.';
        console.log(message);
      },2000)
    }, 1000)
  }, 2000)

}

elevator();