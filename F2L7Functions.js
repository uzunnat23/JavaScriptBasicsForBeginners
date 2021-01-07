// Performing a task
function greet() {
    // body of function
    console.log('Hello World!');
}

greet(); //calling function


function welcome(name, lastName) { // name = parameter
    console.log('Hello ' + name + ' ' + lastName);
}

//Calculating a value
function square(number) {
    return number * number;
}

welcome('Andrew', 'Turcan'); //calling function with the arguments 'Andrew', 'Turcan'

let result = square(2); //result of calculating function
console.log(result);

console.log(square(4));