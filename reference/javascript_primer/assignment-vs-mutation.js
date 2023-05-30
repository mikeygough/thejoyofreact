// ASSIGNMENT VS. MUTATION


// a 'const' is often thought of as a 'variable that can't change'.
// for example
const hi = 5;
hi = 10;
// returns and error
console.log(hi);
// -> 5


// but this seems to be different for objects...
const person = {
    name: "Hassan",
};

person.name = "Sujata";

console.log(person);
// -> { name: "Sujata" }
// ... what's going on here?


// reassigning labels...
/* when we use the 'let' keyword to create a variable, we're able to change which 'thing' that label refers to.
this is known as re-assignment. we're saying that actually the fruits label should refer to an entirely different value.

when we do this, we're not modifying the data, we're actually modifying the label.
we're detaching it from that original value and connecting it to a new one.

by contrast, variables created with 'const' cannot be re-assigned.
this is the fundamental concept between 'let' and 'const'. when we use 'const we create an indestructible link
between a variable name and a piece of data.

with 'const', we're still able to modify the data (add/remove an item to an array for example)
as long as the label remains intact... this is known as a mutation.

there's a fundamental distinction between re-assignment (pointing a variable name at a new thing) and
mutation (editing the data within the thing).

when we create a constant we can be 100% sure that the variable will never be re-assigned, but no promises are made when it 
comes to mutation. const doesn't block mutation at all.

*/ 