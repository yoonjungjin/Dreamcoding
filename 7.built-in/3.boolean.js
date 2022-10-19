//Boolean
const isTrue = new Boolean(true); //new 가 래퍼 객체 쓴거임.
console.log(isTrue.valueOf());

/**
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 * 
 */

/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'false' (문자열)
 * [] 텅텅빈 배열
 * {} object 자체가 값임
 */


 //MDN Boolean: 
 //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean