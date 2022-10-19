
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수

    // // Static 정적 프로퍼티, 메서드
    // class ruit('orange', '오랑지')
    
    
    // console.log(apple);
    // console.log(orange);
    // console.log(apple.name);
    // console.log(apple.emoji);
    
    // apple.display();
    // Fruit{
    //     static MAX_FRUITS = 4;
    //     // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    //     constructor (name, emoji) {    
    //         this.name = name;
    //         this.emoji = emoji;
    //     }  
        
    //     // 클래스 레벨의 메서드  => Fruit 이라는 클래스를 통해 호출할 수 있음
    //     // 앞에 static 을 써줘야함
    //     static makeRandomFruit() {
    //         //클래스 레벨의 메서드에서는 this를 참조할 수 없음.
    //         return new Fruit('banana', '뻐나나')
    //     }
    //     // 인스턴스 레벨의 메서드
    //     display = () => {
    //         console.log(`${this.name}: ${this.emoji}`);
    //     };
    //     //return this; // 생략 가능
    // };

    // // 객체자체에 있는 함수는 호출할 수 없음.
    // //생성된 인스턴스를 통해서 호출할수 있음
    
    // // class 레벨의 함수는  class 이름으로 접근이 가능
    // // Instance 레벨의 프로퍼티와 함수는 만들어진 인스턴스를 통해서 접근이 가능하다.
    // const banana = Fruit.makeRandomFruit();
    // console.log(banana);
    // console.log(Fruit.MAX_FRUITS);
    // // apple 은  Fruit 클래스의 인스턴스이다.
    // const apple = new Fruit('apple', '싸과')
    
    // // orange은 Fruit 클래스의 인스턴스이다.
    // const orange = new F
    
    // // obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
    // const obj = {name: 'ellie'}


    // Math.pow();
    // Math 라는걸로 오브젝트를 만들지 않아도, 바로 유용한 유틸리티 함수들을 호출할수 있음
    // Number.isFinite(1);
    // 스테틱을 이용하면 오브젝트를 따로 만들지 않아도 . 비슷한 함수들을 모아서 관리할 수 있음.


    /// Static 정적 프로퍼티, 메서드
    class Fruit{
        static MAX_FRUITS = 4;
        
        constructor (name, emoji) {    
            this.name = name;
            this.emoji = emoji;
        }  
        
      // 클래스 레밸의메서드
        static makeRandomFruit() {
            // static이 붙어있는 클래스 레벨의 메서드에서는 this를 참조할 수 없음.
        return new Fruit('banana', '뻐나나')
        }
       // 인스턴스 레벨의 메서드   // 만들어진 인스턴스 데이터에 참조 할 이유가 없는 함수라면 static 으로 만들 수 있음.
        display = () => {
            console.log(`${this.name}: ${this.emoji}`);
        };
        //return this; // 생략 가능
    };

    const banana = Fruit.makeRandomFruit();

    // apple 은  Fruit 클래스의 인스턴스이다.
    const apple = new Fruit('apple', '싸과')
    
    // orange은 Fruit 클래스의 인스턴스이다.
    const orange = new Fruit('orange', '오랑지')
    
    
    console.log(apple);
    console.log(orange);
    console.log(apple.name);
    console.log(apple.emoji);
    
    apple.display();

