const numbers = 1;
const count = countOccurrences(numbers, 2);

//My Solution
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Value is not an array!');

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}

try {
    console.log(count);
}
catch (e) {
    console.log(e.message);
}
