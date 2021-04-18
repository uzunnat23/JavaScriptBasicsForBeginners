//To output all element from range 
const numbers = arrayFromRange(1, 4);

console.log(numbers);
//My Solution
// function arrayFromRange(min, max) {
//     let newArray = [];

//     while (min <= max) {
//         newArray.push(min);
//         min++;
//     }

//     console.log(newArray);
// }

//Mosh's Solution
function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}