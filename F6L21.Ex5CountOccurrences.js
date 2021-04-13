const numbers = [1, 2, 3, 4, 2, 2];

const count = countOccurrences(numbers, 1);

console.log(count);
//My solution
function countOccurrences(array, searchElement) {
    //-------------------1-------------------
    // let count = 0;
    // for (let n of array)
    //     if (n === searchElement) {
    //         count++;
    //     }
    // return count;
    //-------------------2-------------------
    //const count = array.filter(value => value === searchElement).length;
    //--------------------3------------------
    // const filtered = array.filter(value => value === searchElement);
    // const items = filtered.map(n => n = 1);
    // const count = items.reduce((accumulator, currentValue) => accumulator + currentValue);
    //-------------------4--------------------
    const count = array.reduce((accumulator, currentValue) => {
        (currentValue === searchElement) ? accumulator++ : accumulator;
        return accumulator;
    }, 0);
    return count;
}
//Mosh's Ssolution
function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence
    }, 0);
}


