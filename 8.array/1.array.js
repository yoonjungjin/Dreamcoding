// 배열 생성 방법
let array = new Array(3); // 사이즈 전달   => 클래서 생성
console.log(array);

array = new Array(1, 2, 3); //생성자
console.log(array);

array = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //static
console.log(array);

const anotherArray = [1, 2, 3, 4, 5]; // 배열 리터럴을 적용해 만든 것임.
console.log(anotherArray);

array = Array.from(anotherArray); //기존의 배열로부터 새로운 배열을 만들고 싶을 때 쓰는 것임.
console.log(array);

array = Array.from('취업할 수 있어시발'); //기존의 배열로부터 새로운 배열을 만들고 싶을 때 쓰는 것임.
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적을 이어져 있어야 함.
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있고,
// 오브젝트와 유사함.
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다 !
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음.(type Collection)

array = Array.from({
  0: '시',
  1: '발',
  length: 2,
});
console.log(array);
