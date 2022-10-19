//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 안좋음
// 상태변경이 필요한 경우에는 , 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 함
// 원시값은 - 값에 의한 복사 ( copy by value)
//객체값 - 참조에 의한 복사 (메모리주소가 복사된거임-> 즉 진짜 값 자체가 아니라 주소라는 말)

function display(num) {
    num = 5; // 정말 인좋음 !!!!!!!!!!!!!!!!
    console.log(num);
}
const value =4;
display(value);
console.log(value);

function displayObj(Obj){
    obj.name = 'Bob'; // 외부로 부터 주어진 인자 (오브젝트)를 내부에서 변경하면 절대 안됨!!!!!
    console.log(obj);
}

console ellie = {name: 'Ellie'};
display(ellie);
console.log(ellie);

function changeName(obj) { //이름부터 변경하는 느낌을 주도록!
    return {...obj, name: 'Bob'}; //반환할때는 새로운 오브젝트 만들기!
}