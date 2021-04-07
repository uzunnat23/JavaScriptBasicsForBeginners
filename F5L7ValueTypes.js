// Primitives are copied by their value
// Objects are copied by their reference   

// Primitive values
let x = 10;
let y = x;

x = 20;
// in console : x = 20, y = 10.

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);// 10
// ------------------------------
// Reference values
let x1 = { value: 10 };
let y1 = x;

x1 = 20;
// in console : x = 20, y = 20.

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // {value: 11}
