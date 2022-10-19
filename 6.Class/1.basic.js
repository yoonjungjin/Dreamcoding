//객체를 손쉽게 말들 수 있는 템플릿
// 1.생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ***

// // 클래스 Class
// // class Fruit{
//     // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
//     constructor (name, emoji) {    
//         this.name = name;
//         this.emoji = emoji;
//     }     
//     display = () => {
//         console.log(`${this.name}: ${this.emoji}`);
//     };
//     //return this; // 생략 가능
// };


// // apple 은  Fruit 클래스의 인스턴스이다.
// const apple = new Fruit('apple', '싸과')

// // orange은 Fruit 클래스의 인스턴스이다.
// const orange = new Fruit('orange', '오랑지')


// console.log(apple);
// console.log(orange);
// console.log(apple.name);
// console.log(apple.emoji);

// apple.display();

// // obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
// const obj = {name: 'ellie'}

// ***********************************************************************************************


// 클래스 class

class Fruit {
    constructor (name, emoji) {             // 클래스를 이용해서 만드는 객체의 필요한 데이터를 채워줄 수 있는 constructor(생성자) 지정해줘야 함.
    this.name = name;
    this.emoji = emoji;
}       
    display = () => {
        console.log(`${this.name}: ${this.emoji}`)   
    };
    //return this; // 생략 가능
};

const apple2 = new Fruit('apple2', '싸과')
const orange2 = new Fruit('orange2', '오랑지')


console.log(apple2);
console.log(orange2);
console.log(orange2.emoji);
console.log(orange2.name);

apple2.display();
