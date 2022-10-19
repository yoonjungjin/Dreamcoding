// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다. 
// 정직원은 시간당 10000원 
// 파트타임 직원은  시간당 8000원

// 문제를 풀고 혼자서 , 머리를 싸매고 , 계속 생각한 다음에 문제풀이를 봐야한다.
// 안그러면, 문제 해답을 보면 당연하듯이 바로 이해가 되어 학습효과가 없고, 스스로 생각하고 그 해답을 봤을 땐 아 ! 이렇게도 적용이 가능하구나, 
// 이런 곳에서는 이런걸 쓰면 되는구나 ! 이렇게 생각을 더 많이 하게 된다. 
// 연습을 해야 된다. 

//내가 생각한 로직 
// 일단 클래스는 두개로 나뉜다. 정직원 . 파트타임 왜냐하면 시간당 급여가 다르기 때문

// 이름 부서 한달 근무 시간 넣는 생성자는 똑같이 만들고, 한달 월급 계산 생성자는 따르게 함수를 구성한다 .
//그래서 console 찍으면 정직원은 정직원 상속자
// 파트타임은 파트타임 상속자에게서 출력을 받도록 연결한다. 



// 내가 만든거 !!!!!!!!!
// 정직원 급여 테이블
// class FullTime {
//     constructor(name, part, time) {
//         this.name = name;
//         this.part = part;
//         this.time = time;
//     }
//     workIn() {
//         console.log(this.time*10000);
//     }
// }

// class FullInfo1 extends FullTime {}
// const fullInfo1 = new FullInfo1('윤정진','네이버','160')

// console.log(fullInfo1);
// fullInfo1.workIn();

// // 파트타임 급여 테이블 
// class PartTime {
//     constructor(name, part, time) {
//         this.name = name;
//         this.part = part;
//         this.time = time;
//     }
//     workIn() {
//         console.log(this.time*8000);
//     }
// }

// class PartEmployee1 extends PartTime {}
// const partEmployee1 = new PartEmployee1('홍소현','구글','150')
// console.log(partEmployee1);
// partEmployee1.workIn();


// 숙제 검사
class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
    }
}




class PartTimeEmployee extends Employee {
    static PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
    }
}


const ellie = new FullTimeEmployee('정진','소프트웨어', 30);
const bob = new PartTimeEmployee('소현', '소프트웨어', 10);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());



