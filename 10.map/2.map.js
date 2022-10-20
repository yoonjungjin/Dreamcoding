const map = new Map([
  ['key1', '사과'],
  ['key', '바나나'],
]);
console.log(map);

//사이즈 확인
console.log(map.size);

//존재하는지 확인
console.log(map.has('key'));
console.log(map.has('key19'));

//순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

//찾기
console.log(map.get('key1'));
console.log(map.get('key'));
console.log(map.get('key123'));

//추가
map.set('key3', '마우스');
console.log(map);

//삭제
map.delete('key3');
console.log(map);

//전부삭제
map.clear();
console.log(map);

//오브젝트와의 차이?
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
