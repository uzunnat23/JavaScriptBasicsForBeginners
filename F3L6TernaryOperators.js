// If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log('points = 110 and the type is ' + type);

points = 90;
type = points > 100 ? 'gold' : 'silver';
console.log('points = 90 and the type is ' + type);