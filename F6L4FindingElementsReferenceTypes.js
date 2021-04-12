const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course1 = courses.find(function (course1) {
    return course1.name === 'a';
});
console.log(course1);

const course2 = courses.findIndex(function (course2) {
    return course2.name === 'a';
});
console.log(course2);
