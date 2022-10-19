// 코딩할때 중요한 컨셉 
//  unchangable
//  Im (변경할 수 없는)   mutable ( 변경할 수 있는)


//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 안된다.
//상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함
// 원시값 값에의한 복사
//객체값 - 참조에 의한 복사 (메모리주소)
function display(num) {
    num = 5;
    console.log(num);
}
const value = 4;
display(value);
console.log(value);


function displayObj(obj) {
    obj.name = 'Bon';       // 외부로부터 주어진 인자(오브젝트)를 내부에서 변경하면 안됨 *********
    console.log(obj);
}
const ellie = {name: 'Ellie'}
displayObj(ellie);
console.log(ellie);

function changName(obj) {
    return {...obj, name: 'Bob'};     // 함수내부에서 무언갈 바꿔야한다면 , 이름부터 변경하는 느낌을 주도록
}                                      // 반환할때는 새로운 오브젝트 만들기 !