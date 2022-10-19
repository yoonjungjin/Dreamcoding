// UTC 기준(협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
// console.log(new Date());
// console.log(new Date('2022-12-17T03:24:00'));

// console.log(Date.now());
// console.log(Date.parse('2022-12-17T03:24:00'));
// 특정한 데이터를 문자열로 표현해주면, 밀리초 단위로 표현해줌.

const now = new Date();
now.setFullYear(2023);
now.setMonth(9); // 0부터 시작함 0이 1월임.
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());
console.log(now);
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toLocaleDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString('ko-KR'));

//나중에 블로그를 만들다던지 . 블로그를 작성한 시간을 적는다던지. 유용하게 쓰임.
