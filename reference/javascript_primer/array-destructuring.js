// ARRAY DESTRUCTURING


// a nice way to pluck data out of an array and assign it to a variable

// packing values into an array
const fruits = ['apple', 'banana', 'cantaloupe'];
// unpacking two values from an array
const [firstFruit, secondFruit] = fruits;


// skipping items
// if we only want to grab the third item and not the first or second

const [,, thirdFruit] = fruits;

// or you can just use good old indexing...

const myFavoriteFruit = fruits[1];