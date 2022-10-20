// try catch finally
function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없음');
  return '파일의 내용';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = '기본 내용';
  }
  const result = 'hi' + content;
  console.log(result);
  return result;
}

const result = processFile('경로');
console.log(result);
