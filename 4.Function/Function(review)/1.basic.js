// 사용예제 1

function sum (a,b) {
    return a + b;
}
const result = sum(1,2);
console.log(result);


// 사용예제 2
function fullName(firstName, lastName) {
    return `${lastName}${firstName} 하이`;
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '윤';
let firstName2 = '정진';
console.log(fullName(firstName2, lastName2));