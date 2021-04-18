const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -2);

console.log(output);
//My Solution
function move(array, index, offset) { //offset - смещение
    const newArray = [...array];
    const newPlace = index + offset;

    if (newPlace < array.length && newPlace >= 0) {
        newArray.splice(index, 1);
        newArray.splice(newPlace, 0, array[index]);
        return newArray;
    } else console.error('Invalid offset!');
}

//Mosh's Solution
function move(array, index, offset) { //offset - смещение
    const position = index + offset;
    if (position >= array.lenght || position < 0) {
        console.error('Invalid offset!')
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}