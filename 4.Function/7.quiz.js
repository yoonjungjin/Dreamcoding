//주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해햐 함
//5,  순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음
//function iterate(max, action)

// 아예 감이안온다.. 흠... 일단 계속해보자 똑똑하지 않으니 노력이라도 쏟아부어야지.

// for (let i = 0; i < Number.length i++) {
//     let result = result + Numbers(i);
// }
// console.log(result);
// Numbers (1,2,3,4,5)

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}
function doubleAndLog(num) {
  console.log(num * 2);
}
iterate(3, (num) => console.log(num));
iterate(3, doubleAndLog);

setTimeout;
