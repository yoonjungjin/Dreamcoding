//set - 정보의 집합
const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size);

console.log(set.has(1)); // 존재하는지 확인

set.forEach((item) => console.log(item)); //순회
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6); // 중복이 안된다.
console.log(set);

set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

//전부 삭제
set.clear();
console.log(set);

//오브젝트 세트
const obj1 = { name: '사과', price: 8 };
const obj2 = { name: '바나나', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

//오브젝트의 벨류 값을 바꿔서 set으로 적용시키면 그 값만 바뀌게 되고, 오브젝트는 따로 추가가 되지 않는다.
// 얕은 복사
obj1.price = 10;
objs.add(obj1);
console.log(objs);

//퀴즤
const obj3 = { name: '바나나', price: 5 };
objs.add(obj3);
console.log(objs);
