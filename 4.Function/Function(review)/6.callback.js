//콜백함수
//나중에 돌아와 나중에 호출해줘
const add = (a,b) => a + b;
const multiply = (a,b) => a*b;


// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨.

// calculator 함수는 정의될 순간에 action 은 어떤 함수일지는 모름, 외부에서 calculator를 호출 할때만 달라짐
function calculator(a, b, action){
    // if (a < 0 || b < 0 ) {
    //     return ;
    // }
    let result = action(a,b);
    console.log(result);
    return result;
}


calculator(-1, -1, add);
// calculator(1, 2, multiply);