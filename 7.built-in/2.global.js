console.log(globalThis);
console.log(this); // 전역 객체를 가리킨다.
console.log(Infinity);
console.log(NaN);
console.log(undefined);


eval('const num = 2; console.log(num)')
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));


// URL (URI, Uniform Resource Identifier 하위 개념)
// 어떤 리소스를 나타낼 수 있는 단 하나의 고유한 주소나 ID 같은 걸 가리킨다. 
//URL 은 아스키 문자로만 구서오디어야 함
//한글이나 특수문자는 이스케이프 처리 해야 한다.

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);


// 전체 URL 이 아니라 부분적인 것은 component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));