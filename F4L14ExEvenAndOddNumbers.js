// Even or ood number
function showNumber(limit) {

    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message)
    }
}

showNumber(10);