const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course1 = courses.find(course1 => course1.name === 'a');
console.log(course1);

const course2 = courses.findIndex(course2 => course2.name === 'a');
console.log(course2);
