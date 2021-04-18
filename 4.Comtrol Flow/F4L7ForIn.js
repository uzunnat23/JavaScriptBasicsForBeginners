
//for-in loop for objects

const person = {
    name: 'Nataly',
    age: 21
}

for (let key in person)
    console.log(key, person[key]);

//for-in loop for array
const colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(index, colors[index]);
}