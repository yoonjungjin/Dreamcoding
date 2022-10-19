// 제너레이터는 생성기 = 값을 생성할 수 있는.

// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };
// for (const num of multiple) {
//   console.log(num);
// }

function* multipleGenerator() {
  try {
    // 함수에 제너레이터 별 표를 붙이는 순간. 제너레이터가 만들어지고 ,
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2; // 사용자가 원할 때 까지 기다렷다가  next 호출 할 때 하나하나씩 리턴해준다.
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return();
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
