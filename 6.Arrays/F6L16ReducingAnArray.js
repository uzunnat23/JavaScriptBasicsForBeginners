const numbers = [-1, 2, 3, 1];

// let sum = 0;
// for(let n of numbers)
//     sum+=n;

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);
