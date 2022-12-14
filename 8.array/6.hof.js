const fruits = ['π', 'π', 'π', 'π'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//λ°°μ΄μ  λΉκΈλΉκΈ λλ©΄μ μνλκ²μ ν λ
// fruits.forEach(function (value) {
//   console.log(value);
// });

fruits.forEach((value) => console.log(value));

//μ‘°κ±΄μ λ§λ (μ½λ°±ν¨μ) μμ΄νμ μ°Ύμ λ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: 'π', price: 2 };
const item2 = { name: 'π', price: 3 };
const item3 = { name: 'π', price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => value.name === 'π');
console.log(result);

//findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν

result = products.findIndex((value) => value.name === 'π');
console.log(result);

//λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄μ λ§λμ§ νμΈ
// λ°°μ΄ μ΄λ¦μ΄ νλλΌλ λΈκΈ°λ©΄ true
result = products.some((item) => item.name === 'π');
console.log(result);

//λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄μ λ§λμ§ νμΈ
result = products.every((item) => item.name === 'π');
console.log(result);

//μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
result = products.filter((item) => item.name === 'π');
console.log(result);
