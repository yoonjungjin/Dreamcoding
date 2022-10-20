//symbol 심벌
//유일한 키를 생성할 수 있음

const map = new Map();
// const key1 = 'key'; // 원시타입이라 값이 똑같아 아래와 같이 출력됨.
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2));
console.log(key1 === key2);

//동일한 이름으로 하나의 키를 사용하고 싶다면,, Symbol.for
// 전역 심벌 레지스트릐 (Global Symbol Registry)

const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);
