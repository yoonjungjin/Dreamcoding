//반복문 loop statement
//for (변수선언문; 조건식; 증감식) {}
//실행순서:
// 1.변수선언문
//2. 조건식의 값이 참이면 {} 코드블럭을 수행
//3. 증감식을 수행
//4. 조건식이 거짓이 될때까지 2번과 3번을 반복한다.
// 변수는 for문을 얼마만큼 반복할지 기억하는 변수
// for (let i = 0; i < 5; i = i+2) {
//     console.log(i);
// }

for (let i = 0; i < 5;  i++) {
    for(let j = 0; j < 5; j++) {
        console.log(i,j);
    }
}

// 무한루프 똥
// for(;;) {
//     console.log('');
// }

// 반복문 제어: continue, break;
for(let i = 0; i < 20; i++){
    if(i === 10) {
        continue;
        console.log('i가 드디어 10이 되었다');
        continue;
        // break; //반복문을 특정한 조건에 그만두고 싶을 때
    }
    console.log(i);
}