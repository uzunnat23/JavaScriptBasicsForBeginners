// Locical AND(&&)
// Return TRUE if both operands are TRUE
console.log('Locical AND(&&)')
console.log('true && true = ' + (true && true)); //true
console.log('false && true = ' + (false && true)); //false

// Logical OR(||)
// Returns TRUE if one of the operands is TRUE
console.log('Logical OR(||)');
console.log('true || true = ' + (true || true)); //true
console.log('false || true = ' + (false || true)); //true
console.log('false && false = ' + (false || false)); //false

// Logical NOT(!)
console.log('Logical NOT(!)');
console.log('!true = ' + (!true))
console.log('!false = ' + (!false))

// Falsy(false) : undefined , null. 0, false, '', NaN
// Anything that is not Falsy -> Truthy

let userColor = 'red';
let defaultColor = 'blue';
// If the on the left side the operand is not falsy, than the result will be what in left side(red), 
// otherwise, the result will be what in the right side(blue).
let currentColor = userColor || defaultColor;
console.log(currentColor);