const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);


//지수표기법 (매우  크거나 작은 숫자를 표기할 때 사용 ,10의 n승으로 표기)
const num3 = 102;   //e+2 10의 2승임
console.log(num3.toExponential()); //  큰숫자를 지수 표기법으로 만드는 함수임 = toExponential


// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수 까지 유효하도록 반올림하는 함수
console.log(num4.toPrecision(3)); // 전체 자릿수가 안될때는 지수표기법

// console.log(Number.EPSILON);// 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if(Number.EPSILON > 0 || Number.EPSILON < 1) {
    console.log(Number.EPSILON);
}


const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(original, expected) {
    return original - expected < Number.EPSILON; // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));


// 결론은 자바스크립트에서 실수 끼리 계산을 할 때는 우리가 예상하지 못한. 정말 작은 미묘한 차이가 발생할 수 있다. 여기 넘버에 저장된 .EPSILON을 사용하면 된다.

// 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
