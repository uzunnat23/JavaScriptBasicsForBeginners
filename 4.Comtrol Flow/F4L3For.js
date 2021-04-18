

for (let i = 0; i < 5; i++) {
    console.log('Hello World!', i);
}
console.log('Output in order:');
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

console.log('Output in reverse order:');
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}
