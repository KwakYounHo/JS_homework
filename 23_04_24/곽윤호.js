let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function tagMaker(tagName, target, attribute) {
  const element = document.createElement(tagName);
  target.appendChild(element);
  Object.assign(element, attribute);
  return element
}

function exampleOne(object, array) {
  if (object.header.children === null) {
    const value            = object.header.id
    const header           = tagMaker(object.header.type, document.body, {  id : value })
    const logOut           = tagMaker('input',            header,        { type : 'button', value:array[4] });
    const user             = tagMaker('p',                header,        { innerText : `${array[2]} : ` });
    object.header.children = [logOut,user];
  }
  if (object.main.children === null) {
    const value            = object.main.id
    const main             = tagMaker(object.main.type,   document.body, { id : value })
    const board            = tagMaker('a',                main,          { href:'/', innerText:array[0] });
    const homework         = tagMaker('div',              main,          { id : array[1] });
    object.main.children   = [board,homework];
  }
  if (object.footer.children === null) {
    const value            = object.footer.id
    const footer           = tagMaker(object.footer.type, document.body, { id : value })
    const grade            = tagMaker('p',                footer,        { innerText : `${array[3]} : --점` });
    object.footer.children = [grade];
  }
  return object;
}

exampleOne(basicData,elementData);