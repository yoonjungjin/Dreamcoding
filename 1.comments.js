// 주석 Comments
// 한줄 짜리 주석을 작성할 때 씀
// todo(엘리) : 해야할 일을 작성
// todo(엘리) :xx기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라 ,
 * 왜(WHY), 와 어떻게(HOW)를 설명하는 것이 좋음
 * (단, 정말 필요한 경우에만)
 */

//외부에서 많이 쓰이는 함수 API 인 경우 JSDOC을 사용하면 좋음
/**
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
function add(a, b) {
  return a + b;
}
