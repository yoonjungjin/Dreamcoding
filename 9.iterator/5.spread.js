// Spread 연산자, 전개구문
// 모든 Iterable은 Spread될 수 있다.
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다.
// func(......iterable)
//[....iterable]
//{...obj}

// EcmaScript 2018 추가 됨.
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

//Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4, 5, 6, 7);

// Array Concat
const fruits1 = ['사과', '키위'];
const fruits2 = ['정진', '바보'];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, '이런', ...fruits2];
console.log(arr);

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(updated); //새로운 배열을 만들었기 때문에, 엘리 안바뀜
console.log(ellie);
