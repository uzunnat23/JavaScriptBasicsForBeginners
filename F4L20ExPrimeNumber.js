
function showPrimes(limit) {
    if (limit >= 2) console.log(2);
    for (let number = 3; number <= limit; number += 2) {
        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {
    for (let factor = 3; factor < Math.floor(number / 2); factor += 2)
        if (number % factor === 0)
            return false;
    return true;
}

showPrimes(20);