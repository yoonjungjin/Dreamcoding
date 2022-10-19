
// 객체를 만드는 방법과 객체에 접근할때 맞침표 표기법과 대괄호 표기법 



// object literal { key : value}
// New object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼 (나중에 배움)
// value - 원시값, 객체(함수)

let apple = {
    name: 'apple',
    'hello-bye': '이모지',
    0: 1,
    ['hello-bye1']: '바이',
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation
apple['name']; // 대괄호 표기법으로도 접근할 수 있따.

// 속성 추가
apple.emoji = '사과';
console.log(apple.emoji);
console.log(apple['emoji']);
console.log(apple);

// 속성 삭제
delete apple.emoji;
console.log(apple);

