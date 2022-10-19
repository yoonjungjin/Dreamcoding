// const apple = {         //사과라는 객체는
//     name : 'apple',         // 이름이라는 속성을 가지고 있고요
//     display: function() {       //display라는 함수를 가지고 있어서, 자기 자신에 대한 정보를 출력 할수가 있음
//         console.log(`${this.name}: 사과`)
//     },
// };
// apple.display();



// 서로 연관있는 속성과 행동을 묶어둔 것이 객체다.
// 객체 안에서 자기 자신의 속성을 접속할때는 this 라는것을 붙여줘야 함.
// this.key


// const calculator = {
//     name : 1,
//     add: function () {
//         console.log(this.name*2)
//     },
// };
// calculator.add();

// const calculator = {
//     plus : 10,
//     subtraction : 20,
//     multi : 30,
//     division : 10,
//     add: function () {console.log(this.plus + 3)},
//     sub: function () {console.log(this.subtraction - 3)},
//     mul: function () {console.log(this.multi * 3)},
//     div: function () {console.log(this.division / 3)},
// };
// calculator.add();
// calculator.sub();
// calculator.mul();
// calculator.div();


const calculator = {
    add: function (a,b) {return a + b},
    sub: function (a,b) {return a - b},
    mul: function (a,b) {return a / b},
    div: function (a,b) {return a * b},
}
console.log(calculator.add(3,4));
console.log(calculator.sub(3,4));
console.log(calculator.mul(3,4));
console.log(calculator.div(3,4));



