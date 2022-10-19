// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓'];
// output: ['🍌', '🥝', '🍇', '🥝'];

// input = ['🍌', '🍓', '🍇', '🍓'];

//중간에 추가 또는 삭제

// const fruits = ['🍌', '🍓', '🍇', '🍓'];
// const fruits2 = fruits.splice(1, 1, '🥝');
// // 위 배열에서 인덱스 1 자리에 1개의 인자를 삭제하고, 키위를 추가한다.

// // fruits.splice(0, 0, '🍇', '🍇');
// // console.log(fruits);

// let lastItem = fruits.pop(); //배열 자체를 변경하는구나
// // 위에서 키위 추가를 했고, 마지막 딸기를 pop 함수를 써서 제거하고,

// fruits.push('🥝');
// // push 함수를 써서 키위를 마지막에 넣어준다.
// console.log(fruits);

function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🍇');
console.log(result);

//퀴즈2
//배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트하는 함수 만들기
// input: ['🍌','🥝','🍇','🥝'], '🥝'
// output: 2

// const jung = ['🍌', '🥝', '🍇', '🥝'];
// let count = jung.filter((Element) => '🥝' === Element).length;

// console.log(count);

function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

//퀴즤3: 배열1, 배열2, 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌','🥝','🍇'], ['🍌','🍓','🍇','🍓']
//output: ['🍌','🍇']

// arr1 = ['🍌', '🥝', '🍇'];
// arr2 = ['🍌', '🍓', '🍇', '🍓'];
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));
