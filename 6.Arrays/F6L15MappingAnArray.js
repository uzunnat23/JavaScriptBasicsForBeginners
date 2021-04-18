const numbers = [-1, 2, 3, 1];

//const filtered = numbers.filter(value => value >= 0);

// const items = filtered.map(n => {
//     const obj = { value: n };
//     return obj;
// });

// const items = filtered.map(n => {
//     return { value: n };
// });

//const items = filtered.map(n => ({ value: n }));
//======================================================

const items = numbers
    .filter(value => value >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);


//const html = '<ul>' + items.join('') + '</ul>';

console.log(items);