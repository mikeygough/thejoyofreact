// OBJECT DESTRUCTURING


// offers a way of extracting some variables from an object
// example
const user = {
    firstname: 'yourname',
    city: 'yourcity',
    province: 'yourprovince',
    country: 'canada',
    postalCode: 'A1b 2C3',
};

var { firstname, country } = user;

console.log(firstname);
console.log(country);

// this is effectively the same as
var firstname = user.firstname;
var country = user.country;


// destructuring function parameters
// say we have a function which takes an object as its first parameter, like this:
function validateUser(user) {
    if (typeof user.name !== 'string') {
        return false;
    }

    if (user.password.length < 12) {
        return false;
    }

    return true;
}

// we could re-write this to destructure name and password at the top of the function
function validateUser(user) {
    const { name, password } = user;

    if (typeof name !== 'string') {
        return false;
    }

    if (password.length < 12) {
        return false;
    }

    return true;
}

// OR, using parameter destructuring, we can do this destructuring right in the function parameters
// when we pass in the object as the first argument, it's deconstructured then and there : )
function validateUser({ name, password }) {
    if (typeof name !== 'string') {
        return false;
    }

    if (password.length < 12) {
        return false;
    }

    return true;
}

// all three methods are equivalent, but the final is maybe the most enjoyable and popular with react developers.
