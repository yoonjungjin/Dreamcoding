// 함수 선언문 function name () {}
// 함수 표현식 const name = function () {}
// 함수도 객체임 - 


let add = function (a,b) {   
    return a + b;
}
console.log(add(1,2));




// 화살표 함수 const name = () => {실행하고자 하는 코드를 작성}
add = (a,b) => {
    return a + b;
};
console.log(add(1,2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다뤄


// IIFE (Immedicately-Invoked Function Expressions)
// 많이 사용되는 표현식은 아님
(function run () {
    console.log('ㅁ');
})();