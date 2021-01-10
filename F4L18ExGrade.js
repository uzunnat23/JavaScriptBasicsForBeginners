const marks = [80, 80, 50];
//console.log(marks.length);
function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60)
        return 'F';
    if (average < 70)
        return 'D';
    if (average < 80)
        return 'C';
    if (average < 90)
        return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sumGrade = 0;
    for (let value of array)
        sumGrade += value;
    return sumGrade / array.length;
}

console.log(calculateGrade(marks));