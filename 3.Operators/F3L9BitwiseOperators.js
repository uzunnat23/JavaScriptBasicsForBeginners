//1 = 00000001
//2 = 00000010

console.log(1 | 2); //BitWise OR
//R = 00000011
console.log(1 & 2); //BitWise AND
//R = 00000000

// Read,     Write,    Execute
// 00000100, 00000110, 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let MyPermission = 0;
MyPermission = MyPermission | readPermission | writePermission;
console.log(MyPermission); // 6

let message = (MyPermission & readPermission) ? 'yes' : 'no';
console.log(message); // no
