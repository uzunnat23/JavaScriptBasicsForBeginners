
//we cannot use some parametres after rest operator
function sum1(...args) {
    console.log(args);
    return args.reduce((a, b) => a + b);
}

console.log(sum1(1, 2, 3, 4, 5, 6, 7, 9, 10));

function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));