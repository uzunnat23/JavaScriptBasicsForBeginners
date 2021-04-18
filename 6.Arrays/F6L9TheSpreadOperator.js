const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
const combined = [0, ...first, ...second, 7];

const copy = [...combined];

console.log(copy);