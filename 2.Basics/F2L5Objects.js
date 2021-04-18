//Reference types (ссылочный тип): Object, Array, Function

let person = {
    name: 'Nataly',
    age: 21
};
console.log(person);

// Dot Notation
person.name = 'Andrew'
console.log(person.name);

// Bracket Notation
let selection = 'name';
//person['name'] = 'Mary';
person[selection] = 'Mary';
console.log(person.name);
