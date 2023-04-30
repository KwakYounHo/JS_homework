import inquirer from 'inquirer';

let basicArray = [
  {
    type: 'input',
    name: 'name',
    message: "당신의 이름은 무엇입니까?"
  },
  {
    type: 'list',
    name: 'like food',
    message: '당신이 좋아하는 음식은 무엇입니까?',
    choices: ['바나나우유', '딸기우유', '초코우유', '흰 우유'],
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: '확실합니까?'
  }
];

// console.log(basicArray.pop());
// console.log(basicArray);

function exampleOne(array) {
  const lastIndex = array.pop();
  for (let i = array.length-1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  array.push(lastIndex);
  return array;
}

// for (let i=0; i<100; i++) {
  // console.log(exampleOne(basicArray));
// }

inquirer
  .prompt(exampleOne(basicArray))
  .then(answers => console.log('대답 : ',answers));