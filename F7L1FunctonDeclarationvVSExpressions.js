//Function Declaration 
function walk() {
    console.log('Walk');

}

// Anonymous Function Expression
let run = function () {
    console.log('run');
};

//Named Function Expression
let run = function walk() {
    console.log('run');
};
let move = run;

run();
move();
