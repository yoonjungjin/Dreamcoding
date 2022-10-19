// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환 

// 약하게 타입이 결정되어있음. 타입이 있는데 할당된 값에 따라 달라짐
let variable;
console.log(typeof variable);

variable= '';
console.log(typeof variable);

variable= 123;          // 할당된 값에 따라 타입이 결정됨
console.log(typeof variable);

variable= {};         
console.log(typeof variable);

variable= Symbol ();         
console.log(typeof variable);

variable= function () {};         
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');


//dynamic, weakly typed(어떤값을 할당되느냐에따라 값이 달라짐)
// programming language


