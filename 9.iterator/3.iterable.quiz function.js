//
// 0부터 10이하까지 숫자의 2배를 순회하는, 이터레이터(반복자) 만들기!
// 0,1,2,3,4,5,6,7,8,9
// 0,2,4,6,8......18

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}
const multiple = makeIterable(0, 20, (num) => num * 2); //고차원함수를 쓸 때 짧은 함수는 무엇을 말하는지 확실히 알 수 있기 때문에 이런 경우는 변수를 길게 적기보단 짧게 적어도 상관 없음.
for (const num of multiple) {
  console.log(num);
}

const single = makeIterable(0, 20, (n) => n); //고차원함수를 쓸 때 짧은 함수는 무엇을 말하는지 확실히 알 수 있기 때문에 이런 경우는 변수를 길게 적기보단 짧게 적어도 상관 없음.
for (const num of single) {
  console.log(num);
}
