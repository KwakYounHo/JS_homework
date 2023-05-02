// const example = [[1,2,3], [4,[5,6]],7,[8,9]]; // example.length = 4
// function flatten(data) {
//   let output = [];
//   for (let element of data) {
//     if (Array.isArray(element)) {
//       let innerArray = flatten(element);
//       innerArray.forEach(innerElement => {
//         output.push(innerElement);
//       })
//     } else {
//       output.push(element);
//     }
//   }
//   return output;
// }

// console.log(flatten(example));

const example = [[1,2,3],[4,[5,6]],7,[8,9]];
function flatten(data) {
  let output = [];
  data.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element).forEach(innerElement => {
        output.push(innerElement);
      })
    } else {
      output.push(element);
    }
  })
  return output
}
console.log(flatten(example));