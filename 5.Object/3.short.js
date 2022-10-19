const x = 0;
const y = 0;
const coordinate = { x, y }; //{x: x, y: y};
console.log(coordinate);

function makeObj(name, age) {
    return {
        name: name,
        age: age,
    };
}

// key 와 value가 가진 값이 똑같으므로 , 생략이 가능하다. 