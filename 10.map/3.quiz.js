// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  // const array = [...set1].filter((item) => set2.has(item));
  return new Set([...set1].filter((item) => set2.has(item)));
  // item이 set2에도 있는지 없는지 확인을 해서 있는 아이템만 필터를 하고 , 다시
  // return new Set(array);
}
console.log(findIntersection(set1, set2));
