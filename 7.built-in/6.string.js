const textObj = new String('hello world');
const text = 'HELLO WORLD!';
console.log(textObj);
console.log(text);
console.log(text.length);
// console.log(text.substring);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);
console.log(text[7]);
console.log(text[8]);
console.log(text[9]);
console.log(text[10]);
console.log(text.charAt(1));

console.log(text.lastIndexOf('D'));

//포함하고 있는지 없는지 집가서 확인
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('he'));
console.log(text.endsWith('!'));

// console.log(text.toLowerCase());

console.log(text.substring(0, 2)); // 이건 2바로 앞까지
console.log(text.slice(2)); // 이건 자리수 부터!
console.log(text.slice(-2));

const space = '               space                  ';
console.log(space.trim());

const longText = 'Get, to, the, point';
console.log(longText.split(' '));
// 스페이스 넣는 이유는 스페이스 별로 끊어서 배열로 반환해줄 수 있음.
//끊어서 첫번째 두개반 받고 싶을 때도 받을 수 있음.
