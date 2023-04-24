const basicData = [
  { number : 1,  name : "코카콜라",     price: 1500 },
  { number : 2,  name : "사이다",       price: 1200 },
  { number : 3,  name : "포카리스웨트", price: 1000 },
  { number : 4,  name : "칸쵸",        price: 800 },
  { number : 5,  name : "오예스",      price: 1000 },
  { number : 6,  name : "초코파이",    price: 1200 },
  { number : 7,  name : "허니버터칩",  price: 1500 },
  { number : 8,  name : "새우깡",      price: 900 },
  { number : 9,  name : "치즈볼",      price: 1200 },
  { number : 10, name : "신라면",      price: 900 }
];

const currency = {
  thousand     : { value: 1000, name: "일천원권" },
  fiveThousand : { value: 5000, name: "오천원권" },
  tenThousand  : { value: 10000, name: "일만원권" },
  fiveHundred  : { value: 500, name: "오백원" },
  hundred      : { value: 100, name: "일백원" }
};

function exampleOne(inputPrice, currency, basicData) {
  let totalInputPrice = 0;
  switch (inputPrice) {
    case 100 :
      totalInputPrice += 100;
      console.log(`${currency.hundred.name}을 넣었습니다.`);
      break
    case 500 :
      totalInputPrice += 500;
      console.log(`${currency.fiveHundred.name}을 넣었습니다.`);
      break
    case 1000 :
      totalInputPrice += 1000;
      console.log(`${currency.thousand.name}을 넣었습니다.`);
      break
    case 5000 :
      totalInputPrice += 5000;
      console.log(`${currency.fiveThousand.name}을 넣었습니다.`);
      break
    case 10000 :
      totalInputPrice += 10000;
      console.log(`${currency.tenThousand.name}을 넣었습니다.`);
      break
  }
  
  const affordableProduct = basicData.filter(element => element.price <= totalInputPrice);
  // console.log(affordableProduct);
  if (affordableProduct.length > 0) {
    console.log(`구매 가능한 제품 : ${affordableProduct.map(element=>element.name)}`)
  } else {
    console.log(`잔액이 부족합니다.`)
  }
  if (affordableProduct.length === basicData.length) {
    console.log(`당신은 부자입니다.`)
  }
}

exampleOne(50000,currency,basicData);