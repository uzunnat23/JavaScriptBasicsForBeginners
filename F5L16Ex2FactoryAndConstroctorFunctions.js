//To initialize an address object:
//1.Using a factory function 
//2.Constructor function


// let address = {
//     street: 'Bulgara',
//     city: 'Chishinau',
//     zipCode: '2005'

// };

//Factory function 
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
};

const address1 = createAddress('Bulgara', 'Chishinau', '2005');
console.log(address1);

//Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
const address2 = new Address('Bulgara', 'Chishinau', '2005');
console.log(address2);
