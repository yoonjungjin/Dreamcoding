// const apple = {         //사과라는 객체는
//     name : 'apple',         // 이름이라는 속성을 가지고 있고요
//     display: function() {       //display라는 함수를 가지고 있어서, 자기 자신에 대한 정보를 출력 할수가 있음
//         console.log(`${this.name}: 사과`)
//     },
// };

// const orange = {         //사과라는 객체는
//     name : 'orange',         // 이름이라는 속성을 가지고 있고요
//     display: function() {       //display라는 함수를 가지고 있어서, 자기 자신에 대한 정보를 출력 할수가 있음
//         console.log(`${this.name}: 오란지`)
//     },
// };


//생성자 함수
function Fruit(name, emoji) {           // F 대문자로 작성해줘야함 => 그래야 생성자 함수를 만듬. name 과 emoji라는 것을 인자로 받아와서.
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`)   //this를 써서 다 해야함. 적용할 자리에
    };
    //return this; // 생략 가능
};

const apple = new Fruit('apple', '싸과')
const orange = new Fruit('orange', '오랑지')


console.log(apple);
console.log(orange);
console.log(orange.emoji);
console.log(orange.name);

apple.display();



function sum(a, b) {
    return a + b;       // 매개변수 (Parameter)
}

sum(4,3)        //인자(Argument)

