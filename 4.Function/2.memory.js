function add(a,b) {return a + b;}
const sum = add; // sum 과 add는 같은 메모리를 가지기 있다. 
//sum 은 add의 메모리 주소를 가지고 있다고 표현, 

// console.log(sum(1,2));
console.log(add(100000000000,1000000000000000));