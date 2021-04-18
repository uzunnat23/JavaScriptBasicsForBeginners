const color = 'red'; //global constant

function start() {
    const message = 'hi'; //local constant
    //const color = 'blue'; //Local variables or constants in a function, take precedence over global variables or constants.
    console.log(color);
}

function stop() {
    const message = 'bye'; //local constant
}

start();
