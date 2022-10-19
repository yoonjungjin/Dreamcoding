class User { // User 부모 클래스
    constructor(name, age, tech) { // 부모 클래스 생성자
      this.name = name;
      this.age = age;
      this.tech = tech;
    }
    getTech(){ return this.tech; } // 부모 클래스 getTech 메서드
  }
  
  class Employee extends User{ // Employee 자식 클래스
    constructor(name, age, tech) { // 자식 클래스 생성자
      super(name, age, tech);
    }
  }
  
  const employee = new Employee("아리랑", "28", "Node.js");
  console.log(employee.name); // 이용우
  console.log(employee.age); // 28
  console.log(employee.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js