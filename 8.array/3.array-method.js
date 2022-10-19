//배열의 함수들

/**
 * 배열 자체를 수정하는건지
 * 반환 된 값으로 새로운 배열을 반환하는지
 *인자를 전달할 때 각 함수마다 정해져있는 규칙들을 이해하고 쓰기.
 */

//배열 자체를 변경하는지 , 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍇'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));

//특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

//배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

//추가 - 제일 뒤에 추가
//배열 자체를 변경하는구나, 수정하는 구나 업데이트해주는 구나. 기존 배열 자체를 수정하는구나, 길이 를 리턴도 해줌
fruits.push('🍎');
console.log(fruits);
console.log(fruits.length);

//추가 - 제일 앞에 추가
fruits.unshift('🍎'); //배열 자체를 변경하는구나
console.log(fruits);
console.log(fruits.length);

//제거 - 제일 뒤
let lastItem = fruits.pop(); //배열 자체를 변경하는구나
console.log(fruits);
console.log(lastItem);

//제거 - 제일 앞
lastItem = fruits.shift(); //배열 자체를 변경하는구나
console.log(fruits);
console.log(lastItem);

//중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits); //배열 자체를 변경하는구나
console.log(deleted);

fruits.splice(0, 0, '🍇', '🍇');
console.log(fruits);
console.log(fruits.indexOf('🍌'));

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // 기존의 배열은 그대로 두고 잘라진 것만 출력해줌
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(-1); // 기존의 배열은 그대로 두고 잘라진 것만 출력해줌
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3));

arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill('과연', 0); // 끝에 있는 값은 포함하지 않는다. // fill은 배열 자체를 수정
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join(' | ');
console.log(text);
