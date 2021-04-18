let x = 1;

console.log('x = 1');
//Relation
console.log('x > 0 - ' + (x > 0));
console.log('x >= 1 - ' + (x >= 1));
console.log('x < 1 - ' + (x < 1));
console.log('x <= 1 - ' + (x >= 1));

//Equality
console.log('x !== 1 - ' + (x !== 1));

//Strict Equality(Type + Value)
console.log('1 === 1 - ' + (1 === 1));
console.log('"1" === 1 - ' + ('1' === 1));

// Lose Equality(Value)
// it will convert the type of what we have o the right side to math what we have on the left side
console.log('1 == 1 - ' + (1 == 1));
console.log('"1" == 1 - ' + (1 == 1));
console.log('true == 1 - ' + (true == 1));

