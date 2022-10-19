// Quiz

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

const {
  name,
  styles: { size, color },
} = prop;

console.log(name, size, color);
