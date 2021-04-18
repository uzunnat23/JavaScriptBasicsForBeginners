const numbers = [1, 2, 5, 3, 4];
const max = getMax(numbers);
console.log(max);

//My Solution
function getMax(array) {
    if (array.length === 0) return;
    //------------------1----------------
    // let maxEl = array[0];

    // for (index of array) {
    //     maxEl = (array[index] > array[index - 1]) ? array[index] : maxEl;
    // }
    // return maxEl;

    //------------------2----------------
    return array.reduce((previous, current) => {
        const MaxEl = (current > previous) ? current : previous;
        return MaxEl;
    });

    //Mosh's Solution
    //if (array.length === 0) return undefined;
    //=========================1===================
    // let max = array[0];

    // for (let i = 0; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];

    // return max;

    //=========================2===================
    // return array.reduce((a, b) => (a > b) ? a : b);
}