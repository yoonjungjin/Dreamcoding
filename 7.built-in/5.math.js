// Math   => 많이 만들일은 없다. 
// static properties, methods   => 여기서 많이 사용함.

console.log(Math.E); //오일러의 상수, 자연로그의 밑
console.log(Math.PI); //원주율 PI 값

//static method
//절대값
console.log(Math.abs(-10));

//소수점 이하를 올림
console.log(Math.ceil(1.4));

//소수점 이하를 내림
console.log(Math.floor(1.4));

//소수점 이하를 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.7));

//정수만 반환(소수점 아래 다버리는거)
console.log(Math.trunc(1.342355234));


//최대, 최솟값을 찾기
console.log(Math.max(1, 2, 3, 4,5));
console.log(Math.min(1, 2, 3, 4,5));


// 거듭제곱
console.log(3** 2);
console.log(Math.pow(3, 2));

//제곱근   ( 어떤 숫자를 두번 곱해야 아래의 9가 나오는지를 찾는거)
console.log(Math.sqrt(9));

//랜덤한 값을 반환  === 랜덤은 0-1 까지
console.log(Math.random());   


//1-10까지의 값을 구하려면?
console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10 + 1));