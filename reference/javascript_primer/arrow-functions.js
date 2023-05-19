// ARROW FUNCTIONS

// non arrow-function way
function oldExclaim(string) {
    return string + '!';
}

// arrow-function way
const newExclaim = string => string + '!';


// longer anonymous function example
const arr = ['hey', 'ho', 'let\'s go'];

// non arrow-function way
arr
    .map(function(string) {
        return string + '!'
    })
    .join(' ');

// arrow-function way
arr
    .map(string => string + '!')
    .join(' ');


// some rules of arrow functions
// short-form versus long-form

// short-form (implicit return)
const oldAdd1 = n => n + 1;

// long-form
const newAdd1 = n => {
    return n + 1;
};

// short-form function body must be a single expression. that expression will be automatically returned.
// long-form function body can contain a number of statements. need to manually specify the return.


// if an arrow function takes a single parameter, the parentheses are options

// this is valid
const logUser1 = user => {
    console.log(user);
}

// this is also valid
const logUser2 = (user) => {
    console.log(user);
}

// the parentheses are mandatory if we have more than one parameter

const updateUser = (user, properties, isAdmin) => {
    if (!isAdmin) {
        throw new Error('Not authorized')
    }

    user.setProperties(properties);
}

// the parentheses are also mandatory if we have no parameters

const sayHello = () => console.log('Hello!');


// arrow functions are sugar-free. i.e. they don't come with some of the magic of traditional functions
// for example, traditional functions can be used as constructors to create objects, unlike arrow functions

function Car(make, model) {
    this.make = make;
    this.model = model;

    return this;
}

new Car('honda', 'civic');
// produces a new 'car' instance.
// this is not possible with arrow functions because they don't have their own prototype.


// implicityly returning objects

// non arrow-function way
function makeObject() {
    return {
        hi: 5,
    };
}

// arrow-function way
const makeObject = () => ({ hi: 5 });
// if we want to return an object with an arrow function, we need to wrap it in parentheses


// similarly, it's common to wrap the short-form expression in parentheses when it's too long to fit on a single line:
const matchedItem = items.find(item => (
    item.color === 'red' && item.size === 'large'
));