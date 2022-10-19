//동등 비교 관계 연산자 (Equality operator)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같아야한다. 
// !== 갑과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // 중요함 타입비교 연산자를 쓰는게 좋다.
console.log(true == 1);
console.log(false == 1);
console.log(false === 0);



const obj1 = {
    name: 'js',
}

const obj2 = {
    name: 'js',
}

console.log(obj1 === obj2);
console.log(obj1 == obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);


let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);














