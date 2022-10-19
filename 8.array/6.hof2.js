// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성.
// 맵을 이용하면 특정한 요소를 다른 요소로 맵핑 할 수 있다. (변환 할 수 있다.)
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

//Flatmap: 중
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result.sort());

//sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
//      < 0              a가 앞으로 정렬, 오름차순
//      > 0              b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로 !
// reduce는 각각의 요소들을 우리가 원하는 행동을 한다음에 최종적인 결과값 하나로 접어서 값을 만듬
// sum 은 값을 계속 저장할 인자.
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);

console.log(result);
