
function sum(limit) {
    let multiplesSum = 0;

    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0))
            multiplesSum += i;
    }

    return multiplesSum;
}

console.log(sum(10));