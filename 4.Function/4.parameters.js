//매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본값 Default Parameters a=1, b=2

function add(a ,b) {
    console.log(a);
    console.log(b);
    console.log(arguments)
    return a + b;
}
add(2,2);

//Rest 매개변수 Rest Parameters
// Numbers를 인자로 설정하면, 얼마나 많은 인자가 들어올지 모를때 씀
function sum(a,b, ...numbers) { 
    console.log(a);
    console.log(b);
    console.log(numbers)
}
sum(1,2,3,4,5,6,7,8,9);