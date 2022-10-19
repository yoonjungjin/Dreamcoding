// 얕은 복사 Shallow copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어진다.
// Array.from. concat slice spread 등등 abject.assign 다 써도 얕은 복사가 이루어진다.
//

const banana = { name: '🍌', price: 2, owner: { name: 'Ellie' } };
const apple = { name: '🍎', price: 3 };
const grape = { name: '🍇', price: 1 };
const store1 = [banana, apple];
const store2 = Array.from(store1); // => 새로운 배열 만듬
console.log('store1', store1);
console.log('store2', store2);

store2.push(grape);
console.log('store1', store1);
console.log('store2', store2);

banana.price = 4;
console.log('store1', store1);
console.log('store2', store2);
