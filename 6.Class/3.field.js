
// 접근 제어자 - 캡슐화 ( 즉, 내부상으로 필요한 데이터를 외부에서 볼 수 없도록 숨겨 놓는 것.)
//  private(#), public(기본), protected

class Fruit{
    // 자바스크립트에서는 컨트럭쳐에서 주어지는 데이터라면, 생략이 가능함.
    //인스턴스를 만들때 초기화가 되어야한다면, 
    #name;
    #emoji;
    #type = '과일';
    constructor (name, emoji) {    
        this.#name = name;
        this.#emoji = emoji;
    } 
    #display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    };
};

const apple = new Fruit('apple', '싸과')
// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함.
console.log(apple);