// 논리 연산자 logical operator
// &&    그리고 ~~이면 ~~ 이면 그리고 그리고 그리고 
// \\   또는 둘중에 하나만 true 가되면 됨
// ! 부정(단항연산자에서 온것) 반대로 
// !! 불리언값으로 변환 (단항연산자 응용버전)
let num = 8;
if((num >= 0 || num > 20)) {
    console.log('엄지업')
}
if(num != 9) {
    console.log('박수');
}

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


console.log(!'text');
console.log(!!'text');

