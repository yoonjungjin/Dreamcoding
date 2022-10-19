//접근자 프로퍼티 (Accessor Property)
// class 처럼 변수이긴한데, 실제 함수를 말하는 것.

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    };

    set fullName(value) {
        console.log('set',value);
    };
};


const student = new Student('정진', '윤');
console.log(student.fullName);
student.fullName = '김철수'
