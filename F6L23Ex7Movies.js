//All the movies in 2018 with rating>4
//Sort them by their rating
//Descending order
//Pick their title

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'e', year: 2018, rating: 4.7 },
    { title: 'f', year: 2018, rating: 4.6 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]

//My Solution
movies.sort(function (previous, current) {
    if (previous.rating > current.rating) return -1;
    if (previous.rating < current.rating) return 1;
    return 0;
});

// const ratingMoreFour = movies
//     .filter(obj => (obj.year === 2018 && obj.rating > 4))
//     .map(obj => obj.title);

const ratingMoreFour = movies.reduce((previous, current) => {
    return (current.year === 2018 && current.rating > 4) ? previous + current.title + '\n' : previous;
}, []);

console.log(ratingMoreFour);

//Mosh's Solution
const titles = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);
