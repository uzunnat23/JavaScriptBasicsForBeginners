const numbers = [2, 3, 1];

//every() --- checks to see if every element in a given array matches the given criteria
//some()  --- checks to see if we have at least one element in a given array matches the given criteria

const allPOsitive = numbers.every(function (value) {
    return value >= 0;
});
console.log(allPOsitive);

const atLeastPOsitive = numbers.some(function (value) {
    return value >= 0;
});
console.log(atLeastPOsitive);
