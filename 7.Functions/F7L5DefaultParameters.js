
function interest1(principal, rate, years) {
    return principal * rate / 100 * years;
}
console.log(interest1(10000, 3.5, 5));

function interest2(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}
console.log(interest2(10000));

function interest3(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest3(10000));