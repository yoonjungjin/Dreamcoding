// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다');
//     }
//     play () {
//         console.log('놀자아~!');
//     }
// }

// 확장을 왜쓰는데 ?
// 


class Animal {
    constructor(color,pay) {
        this.color = color;
        this.pay = pay;
    }
    eat() {
        console.log(this.pay*10000);
    }
    sleep() {
        console.log('잔다');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이', '120')

console.log(tiger);
tiger.sleep();
tiger.eat();

// 오버라이딩 overriding
class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);   // super는 내가 상속하고 있는 부모 class를 가리키고 있음.
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀자아~!');
    }

    eat() {   
        super.eat();                  // 부무에 있는 함수가 있어서 덮어 씌우고 싶다면 함수를 그대로 구현하면 됨
        console.log('강아지가 먹는다!');
    }
}
const dog = new Dog('빨강이','엘리');

console.log(dog);
dog.sleep();
dog.eat();
dog.play();

