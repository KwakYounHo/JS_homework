let basicData = {
  header : {},
  main   : {},
  footer : {}
}

let fromJsonData = {
  header : {
    content : 'header 부분입니다.',
    style   : {
        width           : '100vw',
        height          : '100px',
        backgroundColor : '#CCC'
    }
  },
  main   : {
    content : 'main 부분입니다.',
    style   : {
        width           : '100vw',
        height          : '100px',
        backgroundColor : '#666'
    }
  },
  footer : {
    content : 'footer 부분입니다.',
    style   : {
        width           : '100vw',
        height          : '100px',
        backgroundColor : '#666'
    }
  }
}

// ? 호출 부분을 참고하여서 객체를 가공하는 코드...? ================================
// 이 부분이 잘 이해가 되지 않았습니다. 제가 이해하기로는
// fromJsonData는 JSON.parse하여 나온 데이터 이고,
// 호출 부분을 살펴 보니, const element = "";라고 되어 있었는데,
// const는 재할당이 불가능한데 빈 문자열을 선언하였고,
// 아래 element.innerHTML = 구문을 보니 어떤 요소의 innerHTML을 변경하고자 하는 것 인가?
// 라는 임의의 가정을 가지고 진행했습니다.

function exampleOne(basicData, fromJsonData) {
  let value = '';
  basicData.header = fromJsonData.header;
  basicData.main   = fromJsonData.main;
  basicData.footer = fromJsonData.footer;
  value = basicData.header.content;
  return value;
}

// console.log(exampleOne(basicData, fromJsonData));

// const element = document.createElement('p');
// element.innerHTML = exampleOne(basicData, fromJsonData);
// // console.log(element);
// document.body.appendChild(element);
// ? =============================================================================

function StringCheck(value) {
  if (typeof value === 'string') {
    return true
  } else {
    return false
  }
}
class ExampleTwo {
  constructor(content, width, height, backgroundColor) {
    if (StringCheck(content)&&StringCheck(width)&&StringCheck(height)&&StringCheck(backgroundColor)){
      // 생성자 함수로 객체를 초기화 할 때, 객체 안(this.header)에 있는 또 다른 객체(this.header.content)를 setter로 타입이 유효한지 검사한 후 생성하고 싶은데 접근 방법을 모르겠습니다.
      //! 맨 아래 class TEST2 과정을 거치면서 해결하였습니다! --------------- :D
      this.header = {}
      this.header.content = content;
      this.header.style   = {
              width           : width,
              height          : height,
              backgroundColor : backgroundColor
      }
    } else {
      const typeError = new Error('매개변수는 문자열이어야 합니다.')
      console.error(typeError);
      return;
    }
  }
  set content(value) {
    // 객체를 생성 (new ExampleTwo(...))당시 constructor의 매개변수 content의 타입이 문자열이 아니면, 객체 생성을 못하게 하고 싶었는데, 의도한 대로 동작하지 않습니다...
    // setter메서드의 이름을 header.content로 해보려 했으나 실패했습니다.
    // setter메서드의 이름을 header[content]로 해보려 했으나 실패했습니다.
    if (StringCheck(value)) {
      this.header.content = value
    } else {
      const typeError = new Error('매개변수는 문자열이어야 합니다.');
      console.log(typeError);
    }
  }
}

// const myVariable = new ExampleTwo('안녕ㅋㅋㅋ','100vw','100px','#CCC');
// myVariable.content = '바이~';
// console.log(myVariable);


class Test{
  constructor(a,b) {
    this.first = a;
    this.second = b;
  }
  // ? setter 메서드의 이름이 this.- 부분과 같다면 해당 프로퍼티의 밸류가 할당 될 때 동작하는 메서드로 관찰 됨
  set first(value) {
    if (typeof value === 'string') {
      this._first = value;
    } else {
      console.log('문자열 넣어라')
    }
  }
  set second(value) {
    if (typeof value === 'string') {
      this._second = value;
    } else {
      console.log('문자열 넣어라')
    }
  }
}
// const TTest = new Test(['나는','배열이다'],'ㅋㅋ 나는 문자열~');
// console.log(TTest);

// ! 생성 당시 (new Test2(...)) 매개변수의 타입 유효성 검사 후 객체 생성하기
class Test2 {
  constructor(content, width, height, backgroundColor) {
    this.header          = {};
    this.content         = content;
    this.style           = {};
    this.width           = width;
    this.height          = height;
    this.backgroundColor = backgroundColor;
  }

  set header(value) {
    return this._header = value;
  }
  set content(value) {
    if (typeof value === 'string') {
      return this._header._content = value;
    }
  }
  set style(value) {
    return this._header._style = value;
  }
  set width(value) {
    if (typeof value === 'string') {
      return this._header._style._width = value;
    }
  }
  set height(value) {
    if (typeof value === 'string') {
      return this._header._style._height = value;
    }
  }
  set backgroundColor(value) {
    if (typeof value === 'string') {
      return this._header._style._backgroundColor = value;
    }
  }
}

const myVariable = new Test2('안녕ㅋㅋㅋ','100vw','100px','#CCC');
// const myVariable = new Test2(['안녕ㅋㅋㅋ'],['100vw'],['100px'],['#CCC']);
// myVariable.content = '바이~';
console.log(myVariable);