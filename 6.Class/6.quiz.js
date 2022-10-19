// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들어보세요
// Counter 클래스 만들기

class Counter {      
        #value;           //class counter는 생성자에서 value를 받아오는데,  (내부 프라이빗 필드)
    constructor(startValue){            // 외부에서 초기값을 전달 받는데, 
        if(isNaN(startValue) || startValue < 0) {       // startvalue가 숫자가 아니거나 0보다 작은 마이너스 값이라면, 0으로 초기화 해주고,
            this.#value = 0;                
        } else {                        // 그외에 0 보다 큰 숫자가 주어진다면, 그 숫자부터 카운터가 들어갈 수 잇도록
            this.#value = startValue;
        }
    }

    get value() {              //value 값을 get 을 이용해서 그냥 읽기만 하고, 
        return this.#value;
    }
    increment = () => {         // increment 만을 이용해서 값을 증가 시킬 수 있음.
        this. #value++;
    }
}


//class 를 만들기전에 사용해야되는 코드를 작성해보자. 
const counter = new Counter(0);         // counter라는 인스턴스 객체를 앞으로 만들게될 카운터라는 클래스를 이용해 만들 수 잇고, 생성 할 때 내가 원하는 정보를 전달 할 수 있음.
counter.increment();                    // counter 에서 increment 라는 함수를 호출하면 숫자가 하나씩 호출이 되고, .
counter.increment();                    // 
console.log(counter.value);             // value  라는 속성을 통해 사용자가 현재의 값을 확인하게 만들면 되는구나!