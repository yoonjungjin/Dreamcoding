// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1


let result = function add(a, b) {
    // console.log(a);
    // console.log(b);
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments[2]);
    return a + b;
}
add();


let add = function (a,b) {
    return a + b;
};
console.log(add(1,2));

//Rest 매개변수 Rest Parameters
function sum(a,b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1,2,3,4,5,6,7,8,9,10);