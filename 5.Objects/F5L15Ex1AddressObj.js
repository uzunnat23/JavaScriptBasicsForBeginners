//To create an address object with three propreties: street, city, ziCode. 
//To create a function called showAddress that takes an address obj 
//and displays all the propreties of this obj along with their values.

const address = {
    street: 'Bulgara',
    city: 'Chishinau',
    zipCode: '2005'

};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);