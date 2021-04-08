// To create 2 address obj.
// To create 2 functions: areEqual()(===), areSame()

//Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
const address1 = new Address('Bulgara', 'Chishinau', '2005');
const address2 = new Address('Bulgara', 'Chishinau', '2005');

// My solution
function areEqual(address1, address2) {
    let flag = false;
    for (let key in address1) {
        if (address1[key] === address2[key]) flag = true;
        else {
            flag = false;
            break;
        }
    }
    return flag;
}

function areSame(address1, address2) {
    return !areEqual(address1, address2);
}

// Mosh solution 
function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
