//To create a function called some that takes a varying numbers of arguments, and returns their sum.
//My Solution
function sum(arr) {
    let total = 0;
    if (Array.isArray(arr))
        for (let value of arr)
            total += value;
    if (typeof (arr) === 'number')
        for (let value of arguments)
            total += value;
    else return 'Invalid arguments';
    return total;
}


//Mosh's Solution 
function sum1(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}
console.log(sum1([1, 2, 3, 4]));

