// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}
// 화살표 함수 const name = () => {실행하고자 하는 코드}


let add = function (a,b) {
    return a + b;
};
console.log(add(1,2));

//화살표 함수 const name = () => {실행하고자 하는 코드}
// 첫번째 표기 방법
add = (a,b) => {
    return a + b;
};
console.log(add(9,10));

// 두번째 표기 방법
add = (a,b) => a + b;

console.log(add(20,30));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸



// IIFE (Immedicately - Invoked Function Expressions)
// 자바스크립트에서 잘 쓰이지 않고, 프론트엔드에서 가끔씩 웹페이지가 로딩되면서 내가 만듬 함수를 사용해보고 싶을 떄 사용한다.
(function run() {
    console.log('이모지');
})();

