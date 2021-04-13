const numbers = [1, 2, 3, 4];

//My Solution
function includes(array, searchElement) {
    for (let index in array) {
        if (array[index] === searchElement) return true;
        else if (index == (array.length - 1)) return false;
    }
}
console.log(includes(numbers, 5));

//Mosh's Solution
function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}