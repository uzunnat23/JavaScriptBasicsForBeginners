const numbers = [1, 2, 3, 3, 4, 1, 3, 3];

const output = except(numbers, [1, 3]);

console.log(output);
//My Solution
function except(array, excluded) {

    for (let i = 0; i <= excluded.length - 1; i++) {
        for (let j = 0; j <= array.length - 1; j++) {
            if (excluded[i] === array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}
//Mosh's Solutaion
function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}